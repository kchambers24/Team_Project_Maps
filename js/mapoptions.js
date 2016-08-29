(function(window, google, mapProject) {

MapProject.MAP_OPTIONS = {
  center: {
    lat: 28.541937,
    lng: -81.372347,
  },
  zoom: 15,
  disableDefaultUI: false,
  mapTypeId: google.maps.MapTypeId.HYBRID,
  zoomControlOptions: {
    position: google.maps.ControlPosition.TOP_LEFT
  }

};

// || is an OR check
}(window, google, window.MapProject || (window.MapProject = {})))
