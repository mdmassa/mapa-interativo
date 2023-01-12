/*
// earth map

var map = L.map('map').setView([51.505, -0.09], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
*/

// create Leaflet map
var map = L.map('map', {
    minZoom: 4,
    maxZoom: 6
  });
  
  // image generated with gdal2tiles --leaflet ...
  L.tileLayer('https://loremaps.github.io/LoreMaps-Faerun-Tiles/Lang/pb/{z}/{x}/{y}.png', {
    noWrap: true
  }).addTo(map);
  
  // set the map to fit the world
  map.fitWorld();
  
  // attributions
  var attributionControl = map.attributionControl;
  attributionControl.addAttribution('<a href="https://loremaps.azurewebsites.net/">LoreMaps</a>');
  attributionControl.addAttribution('Map data <a href="http://www.pocketplane.net/">Pocket Plane Group</a>');
  
  // makers
  var neverwinterMarker = L.marker([83.03155, -158.31299]).addTo(map);
  
  // markers pop-up
  neverwinterMarker.bindPopup('Inverno Remoto').openPopup();