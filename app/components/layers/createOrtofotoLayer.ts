import { TileLayer } from "@deck.gl/geo-layers";
import type { GeoBoundingBox, _TileLoadProps } from "@deck.gl/geo-layers";
import { renderBitmapSubLayer } from "./createBitmapSubLayer";

/**
 * ČÚZK Ortofoto WMS service base URL.
 *
 * @see https://ags.cuzk.gov.cz/arcgis1/services/ORTOFOTO/MapServer/WMSServer?request=GetCapabilities&service=WMS
 */
const WMS_BASE_URL =
  "https://ags.cuzk.gov.cz/arcgis1/services/ORTOFOTO/MapServer/WMSServer";

/** Tile dimensions in pixels — larger tiles = fewer requests. */
const TILE_SIZE = 512;

/**
 * Builds a WMS GetMap URL from the tile's geographic bounding box.
 *
 * We use WMS 1.1.1 (not 1.3.0) intentionally:
 *  - In WMS 1.1.1, BBOX axis order is always (x, y) = (lon, lat),
 *    which matches the {west, south, east, north} values deck.gl provides.
 *  - WMS 1.3.0 with EPSG:4326 reverses the axis order to (lat, lon),
 *    which would require swapping coordinates.
 *
 * @param bbox - Geographic bounding box from deck.gl tile ({west, south, east, north})
 * @returns    Fully qualified WMS GetMap request URL
 */
function buildWmsUrl(bbox: GeoBoundingBox): string {
  const params = new URLSearchParams({
    SERVICE: "WMS",
    REQUEST: "GetMap",
    VERSION: "1.1.1",
    LAYERS: "0", // Layer "0" = current ortofoto mosaic
    STYLES: "",
    SRS: "EPSG:4326", // WMS 1.1.1 uses SRS (not CRS)
    FORMAT: "image/png", // JPEG is optimal for ortofoto (no transparency needed)
    WIDTH: String(TILE_SIZE),
    HEIGHT: String(TILE_SIZE),
    BBOX: `${bbox.west},${bbox.south},${bbox.east},${bbox.north}`,
    TRANSPARENT: "true",
  });

  return `${WMS_BASE_URL}?${params.toString()}`;
}

/**
 * Fetches a WMS tile image for the given tile props.
 *
 * Constructs the GetMap URL from the tile's bounding box, fetches the
 * response as a blob, and decodes it into an ImageBitmap for rendering.
 *
 * @param props - Tile load props provided by deck.gl's TileLayer
 * @returns       Decoded ImageBitmap, or null if the request was aborted
 */
async function fetchWmsTile(props: _TileLoadProps): Promise<ImageBitmap> {
  const bbox = props.bbox as GeoBoundingBox;
  const url = buildWmsUrl(bbox);

  const response = await fetch(url, { signal: props.signal });
  const blob = await response.blob();
  return createImageBitmap(blob);
}

/**
 * Options for the ortofoto WMS layer.
 */
export interface OrtofotoLayerOptions {
  /** Layer opacity, 0–1. Defaults to 1 (fully opaque). */
  opacity?: number;
  /** Whether the layer is visible. Defaults to true. */
  visible?: boolean;
}

/**
 * Creates a ČÚZK Ortofoto WMS tile layer.
 *
 * Fetches ortofoto imagery from the Czech Office for Surveying, Mapping
 * and Cadastre (ČÚZK) WMS service, tiled at 512×512 px.
 * The layer is meant to be rendered on top of a base map (e.g. OSM).
 *
 * @param options - Optional configuration (opacity, visibility)
 */
export function createOrtofotoLayer(options: OrtofotoLayerOptions = {}) {
  const { opacity = 1, visible = true } = options;

  return new TileLayer<ImageBitmap>({
    id: "cuzk-ortofoto-wms",

    /**
     * We set data to null because tile URLs are constructed dynamically
     * inside getTileData based on each tile's bounding box.
     */
    data: null,

    /**
     * Custom tile data loader — builds the WMS GetMap URL from the
     * tile's bbox and fetches the image as an ImageBitmap.
     */
    getTileData: fetchWmsTile,

    minZoom: 0,
    maxZoom: 20,
    tileSize: TILE_SIZE,
    opacity,
    visible,

    renderSubLayers: renderBitmapSubLayer,
  });
}

