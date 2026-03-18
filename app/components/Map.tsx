"use client";

import { DeckGL } from "@deck.gl/react";
import { TileLayer } from "@deck.gl/geo-layers";
import { BitmapLayer } from "@deck.gl/layers";

const INITIAL_VIEW_STATE = {
  longitude: 14.42,
  latitude: 50.08,
  zoom: 5,
  pitch: 0,
  bearing: 0,
};

export default function Map() {
  const tileLayer = new TileLayer({
    id: "osm-tile-layer",
    data: "https://tile.openstreetmap.org/{z}/{x}/{y}.png",
    minZoom: 0,
    maxZoom: 19,
    tileSize: 256,
    renderSubLayers: (props) => {
      const { boundingBox } = props.tile;
      return new BitmapLayer(props, {
        data: undefined,
        image: props.data,
        bounds: [
          boundingBox[0][0],
          boundingBox[0][1],
          boundingBox[1][0],
          boundingBox[1][1],
        ],
      });
    },
  });

  return (
    <DeckGL
      initialViewState={INITIAL_VIEW_STATE}
      controller={true}
      layers={[tileLayer]}
      style={{ width: "100%", height: "100%" }}
    />
  );
}

