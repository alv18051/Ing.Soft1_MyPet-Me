/**#######################################################################################
 * Universidad del Valle de Guatemala
 * Departamento de Ciencias de la Computación
 * Ingeniería de Software 1 - Sección 10
 * 
 * Me Pet & Me
 * ! Main: Página principal de My Pet & Me
 * 
 * Integrantes:
 * Cristian Laynez
 * Elean Rivas
 * Sara Paguaga
 * Diego Ruiz
 * Javier Alvarez
 #######################################################################################*/

 import React from "react";

 function Main({setCurrentPage}) {
 
     const changeToEmergency = () => {
       setCurrentPage("#emergency")
       window.history.pushState({}, '', '/emergency')
     }
 
     const changeToRegister = () => {
       setCurrentPage("#register")
       window.history.pushState({}, '', '/emergency')
     }
 
     const changeToLogin = () => {
       setCurrentPage("#login")
       window.history.pushState({}, '', '/login')
     }
   
     return (
       <div>
         <h1>My Pet And Me</h1>
         <div>
           {/* <a onClick={changeToEmergency} class="emBtn">Emergencia</a> */}
           <a onClick={changeToEmergency} class="emBtn">Emergencia</a>
           <br></br>
           <br></br>
           <a onClick={changeToRegister} class="emBtn">Registro</a>
           <a onClick={changeToLogin} class="emBtn">Log In</a>
 
         </div>
       </div>
     );
   }
   
 export default Main;
  