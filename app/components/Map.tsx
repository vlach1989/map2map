"use client";

import { DeckGL } from "@deck.gl/react";
import { createOsmLayer, createOrtofotoLayer } from "./layers";

/**
 * Initial camera position — centred on Prague at zoom 13
 * so ortofoto detail is clearly visible on load.
 */
const INITIAL_VIEW_STATE = {
  longitude: 14.42,
  latitude: 50.08,
  zoom: 13,
  pitch: 0,
  bearing: 0,
};

/**
 * Full-screen map component.
 *
 * Renders two raster tile layers:
 *  1. OSM base map   — provides road/label context
 *  2. ČÚZK Ortofoto  — aerial imagery overlay from the Czech cadastral office
 *
 * Layer order in the array matters: later layers render on top.
 */
export default function Map() {
  const osmLayer = createOsmLayer();
  const ortofotoLayer = createOrtofotoLayer();

  return (
    <DeckGL
      initialViewState={INITIAL_VIEW_STATE}
      controller={true}
      layers={[osmLayer, ortofotoLayer]}
      style={{ width: "100%", height: "100%" }}
    />
  );
}

