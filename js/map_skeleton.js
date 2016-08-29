(function(window, google) {


    //module. mapBuild stores a function
    var mapBuild = (function() {
        //constructor
        function mapBuild(element, opts) {
            this.gMap = new google.maps.Map(element, opts);
        }
        mapBuild.prototype = {
          //function zoom, it will take in a level. it will see if the level exists
          // this will set the zoom, if it does not exist then will return the zoom
            zoom: function(level) {
                if (level) {
                    this.gMap.setZoom(level);
                } else {
                    return this.gMap.getZoom();
                }
            },
            //creating a click listener for events on the map
            //function to handle events. "_on" is private within my library
            // adding "opts" refactoring to add costum events to the map and marker
            _on: function(opts) {
              //assigning my library as this. Because outside of map_Skeleton "this" is the map
              var self = this;
              google.maps.event.addListener(opts.obj, opts.event, function(e) {
            //call function will execute this function. Take the "this" value. event is the first argument to be returned
                opts.callback.call(self, e);
              });
            },
            //method
            addMarker: function(opts) {
              opts.position = {
                lat: opts.lat,
                lng: opts.lng
              }
              //when adding a marker, we can check to see if there is an event
              if (opts.event) {
              //if there is an event, we want to fire it off
               this._on({
                 obj: marker
               });
              }
              //console.log our custom ID number
              console.log(this._createMarker(opts));
            },
            //create marker function that is added to map
            _createMarker: function(opts) {
              opts.map = this.gMap;
              return new google.maps.Marker(opts);
            }

        };
        return mapBuild;
    }());

    mapBuild.create = function(element, opts) {
        return new mapBuild(element, opts);
    };

    //mapBuild is attached to the window
    window.mapBuild = mapBuild;

}(window, google))
