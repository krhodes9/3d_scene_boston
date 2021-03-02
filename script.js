require(["esri/Map",
      "esri/WebScene",
      "esri/views/SceneView",
      "esri/Camera",
      "esri/widgets/Home",
      "dojo/domReady!",
      "esri/layers/SceneLayer"
    ], function(Map, WebScene, SceneView, Camera, Home, SceneLayer) {

      var map = new Map({
        basemap: "streets",
        ground: "world-elevation"
      });
      
      var scene = new WebScene({
        portalItem:{
         id:"8046207c1c214b5587230f5e5f8efc77" 
        }
      });
      
      var camera = new Camera({
        position: [
           -71.0656,
          42.3551,
          1500// elevation in meters
        ],
        tilt:0,
        heading: 0
      })
      
      var camera2 = new Camera({
        position: [
           -71.0972,
          42.3467,
          500// elevation in meters
        ],
        tilt: 0,
        heading: 0
      });
      
      var camera3 = new Camera({
        position: [
           -71.0125,
          42.3379,
          100// elevation in meters
        ],
        tilt: 90,
        heading: 360
      });
      
           var camera4 = new Camera({
        position: [
           -71.1167,
          42.3770,
          2500// elevation in meters
        ],
        tilt: 0,
        heading: 0
      });
      
      var view = new SceneView({
        container: "viewDiv",
        map: scene,
        center: [-71.1167, 42.3770],
        zoom: 2,
        viewingMode:"global",
        camera: camera4,
        environment: {
            lighting: {
              date: new Date("Tue Mar 2 2021 16:00:00 GMT+0100 (CET)"),
              directShadowsEnabled: true,
              // don't update the view time when user pans.
              // The clock widget drives the time
              cameraTrackingEnabled: false
            }
        },
    });
    
    var homeBtn = new Home({
        view: view
      });

      // Add the home button to the top left corner of the view
    view.ui.add(homeBtn, "top-left");
    
    [cam1, cam2, cam3].forEach(function(button) {
      button.style.display = 'flex';
      view.ui.add(button, 'top-right');
    });
    
    cam2.addEventListener('click', function() {
      // reuse the default camera position already established in the homeBtn
      view.goTo({
        target:camera2
      });
    });
    
    cam1.addEventListener('click', function() {
      // reuse the default camera position already established in the homeBtn
      view.goTo({
        target:camera
      });
    });

     cam3.addEventListener('click', function() {
      // reuse the default camera position already established in the homeBtn
      view.goTo({
        target:camera3
      });
    });
  var sceneLayer = new SceneLayer({
          portalItem: {
            id: "2e0761b9a4274b8db52c4bf34356911e"
          },
          popupEnabled: false
        });
        map.add(sceneLayer);

        // Create MeshSymbol3D for symbolizing SceneLayer
        var symbol = {
          type: "mesh-3d", // autocasts as new MeshSymbol3D()
          symbolLayers: [
            {
              type: "fill", 
              material: {
                color: [250, 247, 134]
              }
            }
          ]
        };
        // Add the renderer to sceneLayer
        sceneLayer.renderer = {
          type: "simple", // autocasts as new SimpleRenderer()
          symbol: symbol
        };
      });
  
