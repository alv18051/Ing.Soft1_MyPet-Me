// -> Preparar mapa
let map = L.map('map').setView([14.62877, -90.48700], 12);
L.tileLayer('https://api.maptiler.com/maps/streets/{z}/{x}/{y}.png?key=BQXsiXZUxXH1lXIqVePl',{
  tileSize: 512,
  zoomOffset: -1,
  minZoom: 1,
  attribution: "\u003ca href=\"https://www.maptiler.com/copyright/\" target=\"_blank\"\u003e\u0026copy; MapTiler\u003c/a\u003e \u003ca href=\"https://www.openstreetmap.org/copyright\" target=\"_blank\"\u003e\u0026copy; OpenStreetMap contributors\u003c/a\u003e",
  crossOrigin: true
}).addTo(map);

// -> Ingresar markers
// este será un json de prueba y ejemplos
let testjson = {  
  'places' : [
    {
      'name' : 'UVG',
      'coordinates' : [14.6050635,-90.4893286]
    },
    {
      'name' : 'Pool',
      'coordinates' : [14.60497999,-90.49281568]
    }
  ]
}

// Por medio de este ciclo forEach se podrá agregar y mostrar la info de la veterinaria jeje
testjson['places'].forEach(element => {
  let long = element['coordinates'][0]
  let lat = element['coordinates'][1]
  let marker = L.marker([long, lat]).addTo(map);
  marker.addEventListener("click", function() {
    alert(element['name'])
  })
});
