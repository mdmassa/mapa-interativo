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

//#region Localizações ao Noroeste

    //#region Inverno remoto
    var neverwinterMarker = L.marker([83.03155, -158.31299]).addTo(map);
    neverwinterMarker.bindPopup(`<h3>Inverno Remoto</h3> 
    <p class="locDesc">Cosmópole</p>
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
    <p class="locDesc">Cidade Pequena</p>`).on('click', () => {
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
    <p class="locDesc">Cidade Pequena</p>`).on('click', () => {
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
    <p class="locDesc">Cidade Pequena</p>`).on('click', () => {
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
    <p class="locDesc">Aldeia</p>`).on('click', () => {
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

    //#region Triboar
    var triboarMarker = L.marker([82.7681391822544, -147.12069000259504]).addTo(map);
    triboarMarker.bindPopup(`<h3>Triboar</h3>
    <p class="locDesc">Cidade Grande</p>`).on('click', () => {
      map.flyTo([82.7681391822544, -147.12069000259504], 6);
    
      // add information from .txt
          fetch("http://localhost:5500/web/all_maps/dnd/forgotten_realms/continents/faerun/locations/triboar/triboar.html")
          .then(response => response.text())
            .then(data => {
              document.getElementById("mapInfo").innerHTML = data;
              document.querySelector('#mapInfo').scrollTop = 0;
          })
    
      }).addTo(map);
      //#endregion

    //#region Lariço Vermelho
    var redlarchMarker = L.marker([82.40823147725087, -146.94482028694327]).addTo(map);
    redlarchMarker.bindPopup(`<h3>Lariço Vermelho</h3>
    <p class="locDesc">Vila</p>`).on('click', () => {
      map.flyTo([82.40823147725087, -146.94482028694327], 6);
    
      // add information from .txt
          fetch("http://localhost:5500/web/all_maps/dnd/forgotten_realms/continents/faerun/locations/larico_vermelho/larico_vermelho.html")
          .then(response => response.text())
            .then(data => {
              document.getElementById("mapInfo").innerHTML = data;
              document.querySelector('#mapInfo').scrollTop = 0;
          })
    
      }).addTo(map);
    //#endregion

    //#region Águas Profundas
    var waterdeepMarker = L.marker([81.65330835588037, -149.472947449437]).addTo(map);
    waterdeepMarker.bindPopup(`<h3>Águas Profundas</h3>
    <p class="locDesc">Cosmópole</p>`).on('click', () => {
      map.flyTo([81.65330835588037, -149.472947449437], 6);
    
      // add information from .txt
          fetch("http://localhost:5500/web/all_maps/dnd/forgotten_realms/continents/faerun/locations/aguas_profundas/aguas_profundas.html")
          .then(response => response.text())
            .then(data => {
              document.getElementById("mapInfo").innerHTML = data;
              document.querySelector('#mapInfo').scrollTop = 0;
          })
    
      }).addTo(map);
    //#endregion

    //#region Pedra Noturna
    var nightstoneMarker = L.marker([81.39093994309583, -145.88960199303287]).addTo(map);
    nightstoneMarker.bindPopup(`<h3>Pedra Noturna</h3>
    <p class="locDesc">Fortificação</p>`).on('click', () => {
      map.flyTo([81.39093994309583, -145.88960199303287], 6);
    
      // add information from .txt
          fetch("http://localhost:5500/web/all_maps/dnd/forgotten_realms/continents/faerun/locations/pedra_noturna/pedra_noturna.html")
          .then(response => response.text())
            .then(data => {
              document.getElementById("mapInfo").innerHTML = data;
              document.querySelector('#mapInfo').scrollTop = 0;
          })
    
      }).addTo(map);
    //#endregion

    //#region Yartar
    var yartarMarker = L.marker([83.06605550417774, -144.40201887902353]).addTo(map);
    yartarMarker.bindPopup(`<h3>Yartar</h3>
    <p class="locDesc">Cidade Pequena</p>`).on('click', () => {
      map.flyTo([83.06605550417774, -144.40201887902353], 6);
    
      // add information from .txt
          fetch("http://localhost:5500/web/all_maps/dnd/forgotten_realms/continents/faerun/locations/yartar/yartar.html")
          .then(response => response.text())
            .then(data => {
              document.getElementById("mapInfo").innerHTML = data;
              document.querySelector('#mapInfo').scrollTop = 0;
          })
    
      }).addTo(map);
    //#endregion

    //#region Fortaleza de Helm
    var helmsholdMarker = L.marker([82.97534666724411, -157.2255954120512]).addTo(map);
    helmsholdMarker.bindPopup(`<h3>Fortaleza de Helm</h3>
    <p class="locDesc">Cidade-Fortaleza Pequena</p>`).on('click', () => {
      map.flyTo([82.97534666724411, -157.2255954120512], 6);
    
      // add information from .txt
          fetch("http://localhost:5500/web/all_maps/dnd/forgotten_realms/continents/faerun/locations/fortaleza_de_helm/fortaleza_de_helm.html")
          .then(response => response.text())
            .then(data => {
              document.getElementById("mapInfo").innerHTML = data;
              document.querySelector('#mapInfo').scrollTop = 0;
          })
    
      }).addTo(map);
    //#endregion

    //#region Amphail
    var amphailMarker = L.marker([82.08819592233121, -148.64631705638004]).addTo(map);
    amphailMarker.bindPopup(`<h3>Amphail</h3>
    <p class="locDesc">Vila</p>`).on('click', () => {
      map.flyTo([82.08819592233121, -148.64631705638004], 6);
    
      // add information from .txt
          fetch("http://localhost:5500/web/all_maps/dnd/forgotten_realms/continents/faerun/locations/amphail/amphail.html")
          .then(response => response.text())
            .then(data => {
              document.getElementById("mapInfo").innerHTML = data;
              document.querySelector('#mapInfo').scrollTop = 0;
          })
    
      }).addTo(map);
    //#endregion

    //#region Rassalantar
    var rassalantarMarker = L.marker([81.9447678293486, -148.9322930015691]).addTo(map);
    rassalantarMarker.bindPopup(`<h3>Rassalantar</h3>
    <p class="locDesc">Aldeia</p>`).on('click', () => {
      map.flyTo([81.9447678293486, -148.9322930015691], 6);
    
      // add information from .txt
          fetch("http://localhost:5500/web/all_maps/dnd/forgotten_realms/continents/faerun/locations/rassalantar/rassalantar.html")
          .then(response => response.text())
            .then(data => {
              document.getElementById("mapInfo").innerHTML = data;
              document.querySelector('#mapInfo').scrollTop = 0;
          })
    
      }).addTo(map);
    //#endregion

    //#region Ninho dos Grifos
    var griffonsnestMarker = L.marker([83.99307175845784, -146.9304613852458]).addTo(map);
    griffonsnestMarker.bindPopup(`<h3>Ninho dos Grifos</h3>
    <p class="locDesc">Aldeia</p>`).on('click', () => {
      map.flyTo([83.99307175845784, -146.9304613852458], 6);
    
      // add information from .txt
          fetch("http://localhost:5500/web/all_maps/dnd/forgotten_realms/continents/faerun/locations/ninho_dos_grifos/ninho_dos_grifos.html")
          .then(response => response.text())
            .then(data => {
              document.getElementById("mapInfo").innerHTML = data;
              document.querySelector('#mapInfo').scrollTop = 0;
          })
    
      }).addTo(map);
    //#endregion

    //#region Bryn Shander
  var brynshanderMarker = L.marker([84.4209142464696, -165.93668421184242]).addTo(map);
  brynshanderMarker.bindPopup(`<h3>Bryn Shander</h3>
  <p class="locDesc">Cidade Pequena</p>`).on('click', () => {
    map.flyTo([84.4209142464696, -165.93668421184242], 6);
  
    // add information from .txt
        fetch("http://localhost:5500/web/all_maps/dnd/forgotten_realms/continents/faerun/locations/bryn_shander/bryn_shander.html")
        .then(response => response.text())
          .then(data => {
            document.getElementById("mapInfo").innerHTML = data;
            document.querySelector('#mapInfo').scrollTop = 0;
        })
  
    }).addTo(map);
  //#endregion

    //#region Pedra Hundel
  var hundelstoneMarker = L.marker([84.25178795002259, -168.30748766940889]).addTo(map);
  hundelstoneMarker.bindPopup(`<h3>Pedra Hundel</h3>
  <p class="locDesc">Cidade Pequena</p>`).on('click', () => {
    map.flyTo([84.25178795002259, -168.30748766940889], 6);
  
    // add information from .txt
        fetch("http://localhost:5500/web/all_maps/dnd/forgotten_realms/continents/faerun/locations/pedra_hundel/pedra_hundel.html")
        .then(response => response.text())
          .then(data => {
            document.getElementById("mapInfo").innerHTML = data;
            document.querySelector('#mapInfo').scrollTop = 0;
        })
  
    }).addTo(map);
    //#endregion

    //#region Cisalha de Fogo
    var fireshearMarker = L.marker([83.85116353882519, -169.89135444276357]).addTo(map);
    fireshearMarker.bindPopup(`<h3>Cisalha de Fogo</h3>
    <p class="locDesc">Cidade Grande</p>`).on('click', () => {
      map.flyTo([83.85116353882519, -169.89135444276357], 6);
    
      // add information from .txt
          fetch("http://localhost:5500/web/all_maps/dnd/forgotten_realms/continents/faerun/locations/cisalha_de_fogo/cisalha_de_fogo.html")
          .then(response => response.text())
            .then(data => {
              document.getElementById("mapInfo").innerHTML = data;
              document.querySelector('#mapInfo').scrollTop = 0;
          })
    
      }).addTo(map);
    //#endregion

    //#region Mestre de Ferro
    var ironmasterMarker = L.marker([84.44010682117988, -170.0233433405431]).addTo(map);
    ironmasterMarker.bindPopup(`<h3>Mestre de Ferro</h3>
    <p class="locDesc">Cidade Pequena</p>`).on('click', () => {
      map.flyTo([84.44010682117988, -170.0233433405431], 6);

      // add information from .txt
          fetch("http://localhost:5500/web/all_maps/dnd/forgotten_realms/continents/faerun/locations/mestre_de_ferro/mestre_de_ferro.html")
          .then(response => response.text())
            .then(data => {
              document.getElementById("mapInfo").innerHTML = data;
              document.querySelector('#mapInfo').scrollTop = 0;
          })

      }).addTo(map);
    //#endregion

    //#region Svardborg
    var svardborgMarker = L.marker([84.78253072828504, -173.0590879894729]).addTo(map);
    svardborgMarker.bindPopup(`<h3>Svardborg</h3>
    <p class="locDesc">Fortaleza</p>`).on('click', () => {
      map.flyTo([84.78253072828504, -173.0590879894729], 6);

      // add information from .txt
          fetch("http://localhost:5500/web/all_maps/dnd/forgotten_realms/continents/faerun/locations/svardborg/svardborg.html")
          .then(response => response.text())
            .then(data => {
              document.getElementById("mapInfo").innerHTML = data;
              document.querySelector('#mapInfo').scrollTop = 0;
          })

      }).addTo(map);
    //#endregion

    //#region Aurilssbarg
    var aurilssbargMarker = L.marker([83.89571893465583, -175.89684929173336]).addTo(map);
    aurilssbargMarker.bindPopup(`<h3>Aurilssbarg</h3>
    <p class="locDesc">Cidade Pequena</p>`).on('click', () => {
      map.flyTo([83.89571893465583, -175.89684929173336], 6);

      // add information from .txt
          fetch("http://localhost:5500/web/all_maps/dnd/forgotten_realms/continents/faerun/locations/aurilssbarg/aurilssbarg.html")
          .then(response => response.text())
            .then(data => {
              document.getElementById("mapInfo").innerHTML = data;
              document.querySelector('#mapInfo').scrollTop = 0;
          })

      }).addTo(map);
    //#endregion

//#endregion

  // markers pop-up
  neverwinterMarker.openPopup();

  //#endregion


  // Mostrar coordenadas no console
  map.on('click', function(e){
    var coord = e.latlng;
    var lat = coord.lat;
    var lng = coord.lng;
    console.log("coordenadas do clique: " + lat + ", " + lng);
    });