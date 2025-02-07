import { useRef, useEffect } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

const mapboxAccessToken = import.meta.env.VITE_MAPBOX_ACCESS_TOKEN;
console.log("Mapbox Token:", mapboxAccessToken);

const MyComponent = () => {
  const mapRef = useRef();
  const mapContainerRef = useRef();

  useEffect(() => {
    mapboxgl.accessToken = mapboxAccessToken;
    mapRef.current = new mapboxgl.Map({
      container: mapContainerRef.current,
    });

    return () => {
      mapRef.current.remove();
    };
  }, []);

  return (
    <>
      <div
        id="map-container"
        ref={mapContainerRef}
        style={{ height: "100vh" }}
      />
    </>
  );
};

export default MyComponent;
