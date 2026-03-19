import { BitmapLayer } from "@deck.gl/layers";
import type { _Tile2DHeader } from "@deck.gl/geo-layers";

/**
 * Props passed to a TileLayer's renderSubLayers callback.
 *
 * We only declare the subset we actually use to keep the helper
 * decoupled from a specific TileLayer parameterisation.
 */
interface SubLayerProps {
  id: string;
  tile: _Tile2DHeader;
  data: ImageBitmap | null;
  [key: string]: unknown;
}

/**
 * Shared renderSubLayers callback for TileLayers that display raster images.
 *
 * Converts each tile's fetched image data into a BitmapLayer positioned
 * by the tile's geographic bounding box. This is reused by both the OSM
 * base layer and the ČÚZK WMS ortofoto layer to avoid code duplication.
 */
export function renderBitmapSubLayer(props: SubLayerProps) {
  const { boundingBox } = props.tile;

  return new BitmapLayer({
    id: props.id,
    image: props.data,
    bounds: [
      boundingBox[0][0], // west  (min longitude)
      boundingBox[0][1], // south (min latitude)
      boundingBox[1][0], // east  (max longitude)
      boundingBox[1][1], // north (max latitude)
    ],
  });
}

