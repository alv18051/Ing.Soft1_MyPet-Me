/**#######################################################################################
 * Universidad del Valle de Guatemala
 * Departamento de Ciencias de la Computación
 * Ingeniería de Software 1 - Sección 10
 * 
 * Me Pet & Me
 * ! Emergency: Mostrar mapa y solicitar que se atienda a la mascota
 * 
 * Integrantes:
 * Cristian Laynez
 * Elean Rivas
 * Sara Paguaga
 * Diego Ruiz
 * Javier Alvarez
 #######################################################################################*/

import React, { useState } from "react";

import '../styles/map.css'

import MapComponent from "./components/MapComponent";
import Popup from "./Popup";

const Emergency = () => {

  const[vets, setVets] = useState([])
  const[selectedVet, setSelectedVet] = useState({
    "name":"N/A", "direction":"N/A", "phone":"N/A"
  })
  const[loaded, setLoaded] = useState(false)
  const[seePopup, setSeePopup] = useState(false)

  const handleVets = () => {
    fetch("http://127.0.0.1:8000/get_vets")
    .then(response => response.json())
    .then(result => {
        if(result.success){
          setVets(result.data)                    
          setLoaded(true)
        }
        else{
          console.log("Error: " + result.data)
        }
    })
    .catch(error => {
        console.log("Error inesperado con los shows" + error)
    })
  }

  React.useEffect(() => {
    handleVets()
  }, [])

  const SeeMaps = ({}) => {
    return (
      <>
        <meta name="viewport" content="initial-scale=1,maximum-scale=1,user-scalable=no" />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/leaflet.js"></script>
        <>
          <meta http-equiv="X-UA-Compatible" content="IE=edge"></meta>
          <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
  
          {(selectedVet["name"] !== "N/A") && 
            <div class="displayInfo">
              <h2>Emergencia</h2>
  
              <div class="vetInfo">
                <h4>Veterinaria: {selectedVet["name"]}</h4>
                <h4>Dirección: {selectedVet["direction"]}</h4>
                {/* <h4>Veterinario:</h4> */}
                <h4>Número de teléfono: {selectedVet["phone"]}</h4>
              </div>
              <button class="emBtn" onClick={() => setSeePopup(true)}>Ver Más Detalles</button>
            </div>        
          }
  
          <div className={(selectedVet["name"] !== "N/A") ? "displayMap" : "displayMap-ext"}>        
            <div className={(selectedVet["name"] !== "N/A") ? "map-container" : "map-container-ext"}>
              {!loaded && <h1>Cargando...</h1>}
              {loaded && <MapComponent vets={vets} setSelectedVet={setSelectedVet}/>}            
            </div>
          </div>
        </>
      </>
    )
  }

  return (
    <>
      {!seePopup && <SeeMaps/>}    
      {seePopup && <Popup vet={selectedVet}/>}    
    </>
  );
}
   
export default Emergency;
   