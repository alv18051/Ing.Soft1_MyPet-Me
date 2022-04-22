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

import '../styles/index.css'
import { Link, useNavigate } from "react-router-dom";

 function HeaderComponent({setCurrentPage}) {

     return (

      <>
      <nav class="header">
         <a href="#default" class="logo">My Pet&Me</a>
         <ul class="header-right">
           
         <li className="option active">
            <Link to={"/emergency"}>Emergencia</Link>
           </li>   

        <li className="option">
            <Link to={"/search"}>Busqueda</Link>
        </li>

        <li className="option">
            <Link to={"/login"}>Iniciar sesion</Link>
        </li>

         </ul>
       </nav>
       
         </>

     );
   }
   
 export default HeaderComponent;
   