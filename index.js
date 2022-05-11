let map;
let rectabgle;
var score = 0;
var guess = 0;

$(".score").text(score);

// var styles = {
//   hide: [
//     {
//       featureType: "poi.business",
//       stylers: [{ visibility: "off" }],
//     },
//     {
//       featureType: "transit",
//       elementType: "labels.icon",
//       stylers: [{ visibility: "off" }],
//     },
//   ],
// };



function initMap() {
  map = new window.google.maps.Map(document.getElementById("map"), {
    center: { lat: 34.23953309518544, lng: -118.52739370002166 },
    //mapId: '9df71ae3092839ba',
    zoom: 17,
    draggable: false,
    scrollwheel: false,
    panControl: false,
    
    
  });
  
  map.setOptions({styles: styles['hide']});
  map.addListener("dblclick", (e) => {
    placeRectangle(e.latLng, map);
  });
}

function placeRectangle(latlng, map) {
  if (guess == 0) {
    if (
      latlng.lat() < 34.239330596944825 &&
      latlng.lat() > 34.23785825204986 &&
      latlng.lng() < -118.52889571586483 &&
      latlng.lng() > -118.52979693808068
    ) {
      const rectangle = new window.google.maps.Rectangle({
        strokeColor: "#00FF00",
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: "#00FF00",
        fillOpacity: 0.35,
        map,
        bounds: {
          north: 34.239330596944825,
          south: 34.23785825204986,
          east: -118.52889571586483,
          west: -118.52979693808068,
        },
      });
      score++;
      $(".score").text(score);
      $(".two").text("Library");
    } else {
      const rectangle = new window.google.maps.Rectangle({
        strokeColor: "#FF0000",
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: "#FF0000",
        fillOpacity: 0.35,
        map,
        bounds: {
          north: 34.239330596944825,
          south: 34.23785825204986,
          east: -118.52889571586483,
          west: -118.52979693808068,
        },
      });
      $(".score").text(score);
      $(".two").text("Library");
    }
    guess++;
  } else if (guess == 1) {
    if (
      latlng.lat() < 34.24041170050165 &&
      latlng.lat() > 34.239512020414594 &&
      latlng.lng() < -118.52862282291551 &&
      latlng.lng() > -118.53006920096206
    ) {
      const rectangle = new window.google.maps.Rectangle({
        strokeColor: "#00FF00",
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: "#00FF00",
        fillOpacity: 0.35,
        map,
        bounds: {
          north: 34.24041170050165,
          south: 34.239512020414594,
          east: -118.52862282291551,
          west: -118.53006920096206,
        },
      });
      score++;
      $(".score").text(score);
      $(".three").text("Jacaranda Hall");
    } else {
      const rectangle = new window.google.maps.Rectangle({
        strokeColor: "#FF0000",
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: "#FF0000",
        fillOpacity: 0.35,
        map,
        bounds: {
          north: 34.24041170050165,
          south: 34.239512020414594,
          east: -118.52862282291551,
          west: -118.53006920096206,
        },
      });
      $(".score").text(score);
      $(".three").text("Jacaranda Hall");
    }
    guess++;
  } else if (guess == 2) {
    if (
      latlng.lat() < 34.242095462789635 &&
      latlng.lat() > 34.24099326640536 &&
      latlng.lng() < -118.52777981010605 &&
      latlng.lng() > -118.52957624590803
    ) {
      const rectangle = new window.google.maps.Rectangle({
        strokeColor: "#00FF00",
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: "#00FF00",
        fillOpacity: 0.35,
        map,
        bounds: {
          north: 34.242095462789635,
          south: 34.24099326640536,
          east: -118.52777981010605,
          west: -118.52957624590803,
        },
      });
      score++;
      $(".score").text(score);
      $(".four").text("Health Center");
    } else {
      const rectangle = new window.google.maps.Rectangle({
        strokeColor: "#FF0000",
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: "#FF0000",
        fillOpacity: 0.35,
        map,
        bounds: {
          north: 34.242095462789635,
          south: 34.24099326640536,
          east: -118.52777981010605,
          west: -118.52957624590803,
        },
      });
      $(".score").text(score);
      $(".four").text("Health Center");
    }
    guess++;
  } else if (guess == 3) {
    if (
      latlng.lat() < 34.238429124980996 &&
      latlng.lat() > 34.237964724999856 &&
      latlng.lng() < -118.52580630522593 &&
      latlng.lng() > -118.52669761152826
    ) {
      const rectangle = new window.google.maps.Rectangle({
        strokeColor: "#00FF00",
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: "#00FF00",
        fillOpacity: 0.35,
        map,
        bounds: {
          north: 34.238429124980996,
          south: 34.237964724999856,
          east: -118.52580630522593,
          west: -118.52669761152826,
        },
      });
      score++;
      $(".score").text(score);
      $(".five").text("Chicano House—D5");
    } else {
      const rectangle = new window.google.maps.Rectangle({
        strokeColor: "#FF0000",
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: "#FF0000",
        fillOpacity: 0.35,
        map,
        bounds: {
          north: 34.238429124980996,
          south: 34.237964724999856,
          east: -118.52580630522593,
          west: -118.52669761152826,
        },
      });
      $(".score").text(score);
      $(".five").text("Chicano House—D5");
    }
    guess++;
  } else if (guess == 4) {
    if (
      latlng.lat() < 34.2426757955454 &&
      latlng.lat() > 34.24224428272986 &&
      latlng.lng() < -118.5298519053278 &&
      latlng.lng() > -118.53018845352291
    ) {
      const rectangle = new window.google.maps.Rectangle({
        strokeColor: "#00FF00",
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: "#00FF00",
        fillOpacity: 0.35,
        map,
        bounds: {
          north: 34.2426757955454,
          south: 34.24224428272986,
          east: -118.5298519053278,
          west: -118.53018845352291,
        },
      });
      score++;
      $(".score").text(score);
      $(".five").text("Chicano House—D5");
    } else {
      const rectangle = new window.google.maps.Rectangle({
        strokeColor: "#FF0000",
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: "#FF0000",
        fillOpacity: 0.35,
        map,
        bounds: {
          north: 34.2426757955454,
          south: 34.24224428272986,
          east: -118.5298519053278,
          west: -118.53018845352291,
        },
      });
      $(".score").text(score);
      $(".five").text("Chicano House—D5");
    }
    guess++;
  }
}

window.initMap = initMap;
