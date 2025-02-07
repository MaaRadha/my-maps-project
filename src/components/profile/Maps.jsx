import React, { useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
const mapboxAccessToken = import.meta.env.VITE_MAPBOX_ACCESS_TOKEN;
const Maps = () => {
  const mapContainerRef = useRef();
  const mapRef = useRef();

  useEffect(() => {
    mapboxgl.accessToken = mapboxAccessToken;

    mapRef.current = new mapboxgl.Map({
      container: mapContainerRef.current,
      center: [10.75317, 59.90764],
      zoom: 16.2,
      pitch: 40,
      bearing: 53,
      style: "mapbox://styles/mapbox/streets-v12",
      minZoom: 15,
      maxZoom: 17,
    });

    mapRef.current.on("style.load", () => {
      // add a geojson source with a polygon to be used in the clip layer.
      mapRef.current.addSource("eraser", {
        type: "geojson",
        data: {
          type: "FeatureCollection",
          features: [
            {
              type: "Feature",
              properties: {},
            },
          ],
        },
      });

      // add the clip layer and configure it to also remove symbols and trees.
      // clipping becomes active from zoom level 16 and below.
      mapRef.current.addLayer({
        id: "eraser",
        type: "clip",
        source: "eraser",
        layout: {
          // specify the layer types to be removed by this clip layer
          "clip-layer-types": ["symbol", "model"],
        },
        maxzoom: 16,
      });

      // add a line layer to visualize the clipping region.
      mapRef.current.addLayer({
        id: "eraser-debug",
        type: "line",
        source: "eraser",
        paint: {
          "line-color": "rgba(255, 0, 0, 0.9)",
          "line-dasharray": [0, 4, 3],
          "line-width": 5,
        },
      });
    });
  }, []);

  return (
    <div className="h-screen">
      <div className="h-full" ref={mapContainerRef} />
    </div>
  );
};

export default Maps;
