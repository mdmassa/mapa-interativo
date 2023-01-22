// create Leaflet map
var map = L.map('map', {
    minZoom: 4,
    maxZoom: 6
  });
  
  // image generated with gdal2tiles --leaflet ...
  L.tileLayer('http://localhost:5500/tiles/faerun/{z}/{x}/{y}.png', {
    noWrap: true
  }).addTo(map);
  
  // set the map to fit the world
  map.fitWorld();
  
  // attributions
  var attributionControl = map.attributionControl;
  attributionControl.addAttribution('<a href="https://loremaps.azurewebsites.net/">LoreMaps</a>');
  attributionControl.addAttribution('Arquivo de mapa <a href="http://www.pocketplane.net/">Pocket Plane Group</a>');
  
  //#region MARCADORES

    /* Modelo

  // [Nome da Localização]
  var nomeMarker = L.marker([coordenada]).addTo(map);
  nomeMarker.bindPopup(`<h3>nome</h3>
  <p class="locDesc">tipo</p>`).on('click', () => {
    map.flyTo([coordenada], 6);

    // add information from .txt
      fetch("http://localhost:5500/web/all_maps/dnd/forgotten_realms/continents/faerun/locations/locdir/locfile.html")
         .then(response => response.text())
         .then(data => {
          document.getElementById("mapInfo").innerHTML = data;
          document.querySelector('#mapInfo').scrollTop = 0;
      })

  }).addTo(map);

  */


  //#region Inverno remoto
  var neverwinterMarker = L.marker([83.03155, -158.31299]).addTo(map);
  neverwinterMarker.bindPopup(`<h3>Inverno Remoto</h3> 
  <p class="locDesc">Cidade</p>
  `).on('click', () => {
      map.flyTo([83.03155, -158.31299], 6);

      // add information from .txt
      fetch("http://localhost:5500/web/all_maps/dnd/forgotten_realms/continents/faerun/locations/inverno_remoto/inverno_remoto.html")
         .then(response => response.text())
         .then(data => {
          document.getElementById("mapInfo").innerHTML = data;
          document.querySelector('#mapInfo').scrollTop = 0;
      })

  }).addTo(map);
  
  //#endregion

  //#region Phandalin
  var phandalinMarker = L.marker([82.66787727945918, -153.585859355341]).addTo(map);
  phandalinMarker.bindPopup(`<h3>Phandalin</h3> 
  <p class="locDesc">Vila</p>
  `).on('click', () => {
      map.flyTo([82.66787727945918, -153.585859355341], 6);

      // add information from .txt
      fetch("http://localhost:5500/web/all_maps/dnd/forgotten_realms/continents/faerun/locations/phandalin/phandalin.html")
         .then(response => response.text())
         .then(data => {
          document.getElementById("mapInfo").innerHTML = data;
          document.querySelector('#mapInfo').scrollTop = 0;
      })

  }).addTo(map);
  //#endregion

  //#region Porto LLast
  var portoLLastMarker = L.marker([83.21049936471866, -159.62942352832476]).addTo(map);
  portoLLastMarker.bindPopup(`<h3>Porto Llast</h3>
  <p class="locDesc">Pequena Cidade</p>`).on('click', () => {
    map.flyTo([83.21049936471866, -159.62942352832476], 6);

    // add information from .txt
    fetch("http://localhost:5500/web/all_maps/dnd/forgotten_realms/continents/faerun/locations/porto_llast/porto_llast.html")
    .then(response => response.text())
    .then(data => {
     document.getElementById("mapInfo").innerHTML = data;
     document.querySelector('#mapInfo').scrollTop = 0;
 })

}).addTo(map);
//#endregion

  //#region Luskan
  var luskanMarker = L.marker([83.7107320137689, -161.9377135462538]).addTo(map);
  luskanMarker.bindPopup(`<h3>Luskan</h3>
  <p class="locDesc">Cidade</p>`).on('click', () => {
    map.flyTo([83.7107320137689, -161.9377135462538], 6);

    // add information from .txt
    fetch("http://localhost:5500/web/all_maps/dnd/forgotten_realms/continents/faerun/locations/luskan/luskan.html")
    .then(response => response.text())
    .then(data => {
     document.getElementById("mapInfo").innerHTML = data;
     document.querySelector('#mapInfo').scrollTop = 0;
 })

}).addTo(map);
//#endregion

  //#region Mirabar

  var mirabarMarker = L.marker([84.3995116971245, -152.3528140432342]).addTo(map);
  mirabarMarker.bindPopup(`<h3>Mirabar</h3>
  <p class="locDesc">Cidade</p>`).on('click', () => {
    map.flyTo([84.3995116971245, -152.3528140432342], 6);

    // add information from .txt
      fetch("http://localhost:5500/web/all_maps/dnd/forgotten_realms/continents/faerun/locations/mirabar/mirabar.html")
         .then(response => response.text())
         .then(data => {
          document.getElementById("mapInfo").innerHTML = data;
          document.querySelector('#mapInfo').scrollTop = 0;
      })

  }).addTo(map);

  //#endregion

  //#region Sela Longa
  var longsaddleMarker = L.marker([83.55478564554016, -150.8579214601944]).addTo(map);
  longsaddleMarker.bindPopup(`<h3>Sela Longa</h3>
  <p class="locDesc">Cidade</p>`).on('click', () => {
    map.flyTo([83.55478564554016, -150.8579214601944], 6);

    // add information from .txt
      fetch("http://localhost:5500/web/all_maps/dnd/forgotten_realms/continents/faerun/locations/sela_longa/sela_longa.html")
         .then(response => response.text())
         .then(data => {
          document.getElementById("mapInfo").innerHTML = data;
          document.querySelector('#mapInfo').scrollTop = 0;
      })

  }).addTo(map);
  //#endregion

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