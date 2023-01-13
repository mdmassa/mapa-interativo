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
  
  // REGION MARCADORES
  //#region 

  // Inverno Remoto -- Neverwinter
  var neverwinterMarker = L.marker([83.03155, -158.31299]).addTo(map);
  neverwinterMarker.bindPopup(`<h3> Inverno Remoto </h3> 
  <p>Cidade</p>
  `).on('click', () => {
      map.flyTo([83.03155, -158.31299], 6);
  }).addTo(map);
  
  // Phandalin
  var phandalinMarker = L.marker([82.66787727945918, -153.585859355341]).addTo(map);
  phandalinMarker.bindPopup(`<h3> Phandalin </h3> 
  <p>Vila</p>
  `).on('click', () => {
      map.flyTo([82.66787727945918, -153.585859355341], 6);
  }).addTo(map);

  // markers pop-up
  neverwinterMarker.openPopup();

  //#endregion

  map.on('click', function(e){
    var coord = e.latlng;
    var lat = coord.lat;
    var lng = coord.lng;
    console.log("coordenadas do clique: " + lat + ", " + lng);
    });