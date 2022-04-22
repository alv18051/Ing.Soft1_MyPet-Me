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

 import React from "react";
 import '../styles/index.css'
 import '../map.js';

 function Emergency({setCurrentPage}) {

    const returnToMain = () => {
      setCurrentPage("#main")
      window.history.pushState({}, '', '/main')
    }

     return (
      <><meta name="viewport" content="initial-scale=1,maximum-scale=1,user-scalable=no" />
      <script src="https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/leaflet.js"></script><>
        <meta http-equiv="X-UA-Compatible" content="IE=edge"></meta>
         <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
         <div class="header">
           <a href="#default" class="logo">My Pet&Me</a>
           <div class="header-right">
             <a class="active" href="#home">Emergencia</a>
             <a href="#contact">Búsqueda</a>
             <a href="#about">Iniciar sesión</a>
           </div>
         </div>
         <div class="displayInfo">
           <h2>Emergencia</h2>
           
           <div class="vetInfo">
              <h4>Veterinaria:</h4>
              <h4>Dirección:</h4>
              <h4>Veterinario:</h4>
              <h4>Número de teléfono:</h4>
           </div>
           <button class="emBtn">Llamar ambulancia</button>
         </div>
         <div class="displayMap">
         <h3>Veterinarias más cercanas</h3>
         <p><a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a></p>
            
            <iframe width="1100" height="500" src="https://api.maptiler.com/maps/streets/?key=KJJzdJb6HdpmbcSQnQc7#10.4/15.08004/-90.41161"></iframe>
         </div>
       </></>

     );
   }
   
 export default Emergency;
   