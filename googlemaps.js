// //main js file
//
//
// // self invoking function to contain scope
// (function(window, MapProject) {
// //     var input = document.getElementById('location');
// //     var searchBox = new google.maps.places.SearchBox(input);
// //     //map options object
// //     var options = MapProject.MAP_OPTIONS,
// //         element = document.getElementById('map-canvas'),
// //         // map = new google.maps.Map(element, options);
// //         map = mapBuild.create(element, options);
// //
// //         var autocomplete = new google.maps.places.Autocomplete(input, {
// //           types: ["geocode"]
// //         });
// //
// //         autocomplete.bindTo('bounds', map);
// //         var infowindow = new google.maps.InfoWindow();
// //
// //         google.maps.event.addListener(autocomplete, 'place_changed', function() {
// //             infowindow.close();
// //             var place = autocomplete.getPlace();
// //             if (place.geometry.viewport) {
// //               map.fitBounds(place.geometry.viewport);
// //             } else {
// //               map.setCenter(place.geometry.location);
// //               map.setZoom(17);
// //             }
// //
// //             moveMarker(place.name, place.geometry.location);
// //
// //             $("input").focusin(function () {
// //         $(document).keypress(function (e) {
// //             if (e.which == 13) {
// //                  selectFirstResult();
// //             }
// //         });
// //     });
// //     $("input").focusout(function () {
// //         if(!$(".pac-container").is(":focus") && !$(".pac-container").is(":visible"))
// //             selectFirstResult();
// //     });
// //
// //      function selectFirstResult() {
// //         infowindow.close();
// //         $(".pac-container").hide();
// //         var firstResult = $(".pac-container .pac-item:first").text();
// //
// //         var geocoder = new google.maps.Geocoder();
// //         geocoder.geocode({"address":firstResult }, function(results, status) {
// //             if (status == google.maps.GeocoderStatus.OK) {
// //                 var lat = results[0].geometry.location.lat(),
// //                     lng = results[0].geometry.location.lng(),
// //                     placeName = results[0].address_components[0].long_name,
// //                     latlng = new google.maps.LatLng(lat, lng);
// //
// //                 moveMarker(placeName, latlng);
// //                 $("input").val(firstResult);
// //             }
// //         });
// //      }
// //
// //      function moveMarker(placeName, latlng){
// //         marker.setIcon(image);
// //         marker.setPosition(latlng);
// //         infowindow.setContent(placeName);
// //         infowindow.open(map, marker);
// //      }
// // });
// //
// //     // map.controls[google.maps.ControlPosition.TOP_RIGHT].push(input);
// //
// //     //We can add our own custom options
// //     // map.addMarker(28.541937, -81.372347, true);
// //
// //     map.addMarker({
// //         lat: 28.541937,
// //         lng: -81.372347,
// //         draggable: true,
// //         id: 1,
// //         icon: 'http://i67.tinypic.com/54jgqb.png'
// //     });
// //     //
// //     // map.addMarker({
// //     //     lat: 28.540951,
// //     //     lng: -81.381265,
// //     //     draggable: true,
// //     //     id: 2
// //     //         // icon: 'http://i67.tinypic.com/54jgqb.png'
// //     // });
// //
// //     // $("#submit").on('click', function() {
// //     //     var query = $("#location").val();
// //     //     console.log(query);
// //     //
// //     //     $.ajax({
// //     //         type: "GET",
// //     //         url: 'http://maps.googleapis.com/maps/api/geocode/json?address=' + query + '&sensor=false',
// //     //         success: function(data) {
// //     //             console.log('Search Results', data.results);
// //     //
// //     //         },
// //     //         error: function(e) {
// //     //             console.log("error");
// //     //         }
// //     //     });
// //     //
// //     // });
// //
// //
// //
// //     // //tapping into google namespace to create markers
// //     // var marker = new google.maps.Marker({
// //     //   position: {
// //     //     lat: 28.541937,
// //     //     lng: -81.372347
// //     //   },
// //     //   //setting the marker to the map
// //     //   map: map.gMap,
// //     //   icon: 'http://i67.tinypic.com/54jgqb.png'
// //     // });
// //
// //
// //
// //     // click listener for events on the map
// //     map._on('click', function(e) {
// //         console.log(e);
// //         console.log(this);
// //         console.log("click is working");
// //     });
//
//
//
//
//
// }(window, window.MapProject));
(function(window, MapProject) {
$(function(){
   var lat = 28.541937,
       lng = -81.372347,
       latlng = new google.maps.LatLng(lat, lng),
       image = 'http://i67.tinypic.com/54jgqb.png';

   var mapOptions = {
           center: new google.maps.LatLng(lat, lng),
           zoom: 15,
           mapTypeId: google.maps.MapTypeId.HYBRID
       },
       map = new google.maps.Map(document.getElementById('map_canvas'), mapOptions),
       marker = new google.maps.Marker({
           position: latlng,
           map: map,
           icon: image
        });

   var input = document.getElementById('searchTextField');
   var autocomplete = new google.maps.places.Autocomplete(input, {
       types: ["geocode"]
   });

  //  var serviceInput = document.getElementById('extraSearch');
//    service = new google.maps.places.PlacesService(map);
//    service.textSearch(request, callback);
//
//    function callback(results, status) {
//   if (status == google.maps.places.PlacesServiceStatus.OK) {
//     for (var i = 0; i < results.length; i++) {
//       var place = results[i];
//       createMarker(results[i]);
//     }
//   }
// }

   autocomplete.bindTo('bounds', map);
   var infowindow = new google.maps.InfoWindow();

   google.maps.event.addListener(autocomplete, 'place_changed', function() {
       infowindow.close();
       var place = autocomplete.getPlace();
       if (place.geometry.viewport) {
           map.fitBounds(place.geometry.viewport);
       } else {
           map.setCenter(place.geometry.location);
           map.setZoom(17);
       }

       moveMarker(place.name, place.geometry.location);
   });

   $("input").focusin(function () {
       $(document).keypress(function (e) {
           if (e.which == 13) {
                selectFirstResult();
           }
       });
   });
   $("input").focusout(function () {
       if(!$(".pac-container").is(":focus") && !$(".pac-container").is(":visible"))
           selectFirstResult();
   });

    function selectFirstResult() {
       infowindow.close();
       $(".pac-container").hide();
       var firstResult = $(".pac-container .pac-item:first").text();

       var geocoder = new google.maps.Geocoder();
       geocoder.geocode({"address":firstResult }, function(results, status) {
           if (status == google.maps.GeocoderStatus.OK) {
               var lat = results[0].geometry.location.lat(),
                   lng = results[0].geometry.location.lng(),
                   placeName = results[0].address_components[0].long_name,
                   latlng = new google.maps.LatLng(lat, lng);

               moveMarker(placeName, latlng);
               $("input").val(firstResult);
           }
       });
    }

    function moveMarker(placeName, latlng){
       marker.setIcon(image);
       marker.setPosition(latlng);
       infowindow.setContent(placeName);
       infowindow.open(map, marker);
    }
});
}(window, window.MapProject));
