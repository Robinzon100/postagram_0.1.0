import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

export const mapBox = () => {
  mapboxgl.accessToken =
    "pk.eyJ1IjoiYmVxYTk4IiwiYSI6ImNrbHVub3FwMzIwd3Mybm53eGUwdHVocDcifQ.RU7WMfHW-Anzr1iftas2zg";

  const setupMap = (center) => {
    const map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/beqa98/cklxehyd268z717qke1dn2olx",
      center: [44.78333,41.71667], // თბილისის კორტინატები,ზუსტად რომ დაჯდეს
      zoom: 14,
    });

    const nav = new mapboxgl.NavigationControl();
    map.addControl(nav);
  };

  const successLocation = (position) => {
    setupMap([position.coords.longitude, position.coords.latitude]);
  };

  const errorLocation = () => {
    setupMap([-2.24, 53.48]);
  };

  navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {
    enableHighAccuracy: true,
  });
};
