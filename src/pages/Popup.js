/**#######################################################################################
 * Universidad del Valle de Guatemala
 * Departamento de Ciencias de la Computación
 * Ingeniería de Software 1 - Sección 10
 * 
 * Me Pet & Me
 * ! Popup: Mostrar los datos específicos de la veterinaria seleccionada
 * 
 * Integrantes:
 * Cristian Laynez
 * Elean Rivas
 * Sara Paguaga
 * Diego Ruiz
 * Javier Alvarez
 #######################################################################################*/

 import React from "react";
 import HeaderComponent from "./HeaderComponent";
 import { Link, useNavigate } from "react-router-dom";
 import './popup.css';
 import { Avatar, AvatarBadge, AvatarGroup } from '@chakra-ui/react'
 import { Skeleton, SkeletonCircle, SkeletonText } from '@chakra-ui/react'  
 import { Divider } from '@chakra-ui/react'

 function Popup({onCurrentPage}) {
     return (
      <div>
            <HeaderComponent className="header"/>
        
          <div class="body-a">
            <div class="vet-container">
            <Avatar size="2xl" name='Dan Abrahmov' src='https://bit.ly/dan-abramov' />
            <div class="info">
              <h1>veterinaria el Rejo</h1>
              <Divider orientation='horizontal' />
              <h1>Hospital veterinario</h1>
              <Divider orientation='horizontal' />
              <h1>Número de telefono: 70321214</h1>
              <Divider orientation='horizontal' />
              <h1>Dirección: 18 Av. 11-95 zona 15, Vista Hermosa III.</h1>
            </div>
            <button class="emBtn">Ir allí</button>
            <Skeleton height='20px' />
            </div>
          </div>
          <footer class="footer-section">
        <div class="container">
            <div class="footer-cta pt-5 pb-5">
                <div class="row">
                    <div class="col-xl-4 col-md-4 mb-30">
                        <div class="single-cta">
                            <i class="fas fa-map-marker-alt"></i>
                            <div class="cta-text">
                                <h4>My Pet & My</h4>
                                <span>Universidad del Valle</span>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-4 col-md-4 mb-30">
                        <div class="single-cta">
                            <i class="fas fa-phone"></i>
                            <div class="cta-text">
                                <h4>Ingeniería de Software</h4>
                                <span>9876543210 0</span>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-4 col-md-4 mb-30">
                        <div class="single-cta">
                            <i class="far fa-envelope-open"></i>
                            <div class="cta-text">
                                <h4>Contactanos</h4>
                                <span>correol@ejemplo.com</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="footer-content pt-5 pb-5">
                <div class="row">
                    <div class="col-xl-4 col-lg-4 mb-50">
                        <div class="footer-widget">
                            <div class="footer-logo">
                            </div>
                            
                            <div class="subscribe-form">
                                <form action="#">
                                   
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="copyright-area">
            <div class="container">
                <div class="row">
                    <div class="col-xl-6 col-lg-6 text-center text-lg-left">
                       
                    </div>
                    <div class="col-xl-6 col-lg-6 d-none d-lg-block text-right">
                        <div class="footer-menu">
                            <ul>
                                
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
      </div>
     );
   }
   
 export default Popup;
   