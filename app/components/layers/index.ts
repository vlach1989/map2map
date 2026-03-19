/**
 * Barrel export for all map layer factories.
 *
 * Import layer constructors from here to keep the Map component clean:
 *   import { createOsmLayer, createOrtofotoLayer } from "./layers";
 */
export { createOsmLayer } from "./createOsmLayer";
export { createOrtofotoLayer } from "./createOrtofotoLayer";
export type { OrtofotoLayerOptions } from "./createOrtofotoLayer";

