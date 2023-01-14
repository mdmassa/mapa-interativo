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

    /* Modelo

  // [Nome da Localização]
  var nomeMarker = L.marker([coordenada]).addTo(map);
  nomeMarker.bindPopup(`<h3>nome</h3>
  <p class="locDesc">tipo</p>`)on('click', () => {
    map.flyTo([coordenada], 6);
}).addTo(map);

  */
  var info = '/run/media/massa/FILES/projetos-dev/mapa-interativo/web/all_maps/dnd/forgotten_realms/continents/faerun/locations/inverno_remoto.txt';

  // Inverno Remoto -- Neverwinter
  var neverwinterMarker = L.marker([83.03155, -158.31299]).addTo(map);
  neverwinterMarker.bindPopup(`<h3>Inverno Remoto</h3> 
  <p class="locDesc">Cidade</p>
  `).on('click', () => {
      map.flyTo([83.03155, -158.31299], 6);
      // add information from .txt
      fetch(info)
        .then(response => response.text())
        .then(data => {
          document.getElementById("mapInfo").innerHTML = data;
      })

  .catch(error => console.error(error));
  
  }).addTo(map);
  
  // Phandalin
  var phandalinMarker = L.marker([82.66787727945918, -153.585859355341]).addTo(map);
  phandalinMarker.bindPopup(`<h3>Phandalin</h3> 
  <p class="locDesc">Vila</p>
  `).on('click', () => {
      map.flyTo([82.66787727945918, -153.585859355341], 6);
  
  }).addTo(map);

  // Porto Llast
  var portoLLastMarker = L.marker([83.21049936471866, -159.62942352832476]).addTo(map);
  portoLLastMarker.bindPopup(`<h3>Porto Llast</h3>
  <p class="locDesc">Pequena Cidade</p>`).on('click', () => {
    map.flyTo([83.21049936471866, -159.62942352832476], 6);
}).addTo(map);

  // Luskan
  var luskanMarker = L.marker([83.7107320137689, -161.9377135462538]).addTo(map);
  luskanMarker.bindPopup(`<h3>Luskan</h3>
  <p class="locDesc">Cidade</p>`).on('click', () => {
    map.flyTo([83.7107320137689, -161.9377135462538], 6);
}).addTo(map);

  // markers pop-up
  neverwinterMarker.openPopup();

  //#endregion


  // Mostrar coordenadas no console
  map.on('click', function(e){
    var coord = e.latlng;
    var lat = coord.lat;
    var lng = coord.lng;
    console.log("coordenadas do clique: " + lat + ", " + lng + "\nLocal ID: " + currentLocation);
    });