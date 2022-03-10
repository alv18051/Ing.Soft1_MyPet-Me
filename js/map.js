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
      'long' : 14.6050635,
      'lat' : -90.4893286,
      'direccion' : 'Zona 16',
      'veterinario' : 'Pedrito'
    },
    {
      'name' : 'Pool',
      'long' : 14.60497999,
      'lat' : -90.49281568,
      'direccion' : 'Zona 16',
      'veterinario' : 'Juanito UwU'
    }
  ]
}

// Detectar el div selected
const selectedVet = document.getElementById('selected');
const information = document.createElement('h3');
information.append("Porfavor selecciona una veterinaria :)")
selectedVet.appendChild(information);

// console.log(testjson);

// Por medio de este ciclo forEach se podrá agregar y mostrar la info de la veterinaria jeje
testjson['places'].forEach(element => {  
  // Impelentar marcador
  let marker = L.marker([element['long'], element['lat']]).addTo(map);
  // Implementar event listener al marcador
  marker.addEventListener("click", function() {
    document.querySelector('h3').remove()        
    
    try {
      // eliminar botones si los hay
      selectedVet.querySelector('form').remove()
      selectedVet.querySelector('button').remove()
      selectedVet.querySelector('button').remove()
    } catch (error) {
      
    }
    
    // Implementar los titulos
    const theVet = document.createElement('h3')
    theVet.append(element['name'])
    theVet.append(document.createElement('br'))
    theVet.append("Veterinario: " + element['veterinario'])
    
    // Implementar botones
    const callVet = document.createElement('button')
    callVet.className = 'btn-from-vet'
    callVet.append('Llamar a ' + element['name'])    
    
    const theForm = document.createElement('form')
    theForm.action = '../pages/popup.html'
    
    const moreInfo = document.createElement('button')
    moreInfo.className = 'btn-from-vet'  
    moreInfo.append('Más información')    
    
    theForm.appendChild(moreInfo)
    
    selectedVet.appendChild(theVet)
    selectedVet.appendChild(callVet)
    selectedVet.appendChild(theForm)
    
  })
});

// Controlar el div