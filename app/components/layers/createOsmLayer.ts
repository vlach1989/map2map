import { TileLayer } from "@deck.gl/geo-layers";
import { renderBitmapSubLayer } from "./createBitmapSubLayer";

/**
 * Creates an OpenStreetMap XYZ tile layer.
 *
 * Uses the standard OSM raster tile endpoint with 256px tiles.
 * Serves as the base map underneath other overlay layers.
 *
 * @see https://wiki.openstreetmap.org/wiki/Raster_tile_providers
 */
export function createOsmLayer() {
  return new TileLayer({
    id: "osm-tile-layer",
    data: "https://tile.openstreetmap.org/{z}/{x}/{y}.png",
    minZoom: 0,
    maxZoom: 19,
    tileSize: 256,
    renderSubLayers: renderBitmapSubLayer,
  });
}

