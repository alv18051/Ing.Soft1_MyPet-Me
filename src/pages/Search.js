/**#######################################################################################
 * Universidad del Valle de Guatemala
 * Departamento de Ciencias de la Computación
 * Ingeniería de Software 1 - Sección 10
 * 
 * Me Pet & Me
 * ! Search: Para buscar las veterinarias que el usuario solicita
 * 
 * Integrantes:
 * Cristian Laynez
 * Elean Rivas
 * Sara Paguaga
 * Diego Ruiz
 * Javier Alvarez
 #######################################################################################*/

 import React from 'react';
 import OptionComponent from './OptionComponent'
 import CardComponent from './CardComponent'
 import { Heading, Button, Input  } from '@chakra-ui/react';
 import './search.css'

 function Search({onCurrentPage}) {
     return (
      <div className='SearchBackgorund'>
        <div className='SearchOuterContainer container'>
          <div className='SearchInfoContainer'>
            <div className='titleContainer'>
              <Heading className='title'>Filtros</Heading>
            </div>
            <OptionComponent title='Cercanía'  message='-Área de busqueda' opcion1='1km'
            opcion2='2km' opcion3='5km' opcion4='10km'/>
            <OptionComponent title='Especialidad'  message='-Mascota' opcion1='Perros'
            opcion2='Gatos' opcion3='Peces' opcion4='Exóticos'/>
            <OptionComponent title='Tarifas'  message='-Rango de precio' opcion1='Menos de Q1,000'
            opcion2='Entre Q1,000 y Q2,499' opcion3=' Entre Q2,500 y Q3,999' opcion4='Más de Q4,000'/>
            <OptionComponent title='Rating'  message='-Valoración por estrellas' opcion1='Cualquier valoración'
            opcion2='2 a 3 estrellas' opcion3='4 a 5 estrellas' opcion4='Únicamente 5 estrellas'/>
            <OptionComponent title='Cantidad de veterinarios'  message='-No. de veterinarios en turno' opcion1='1 veterinario'
            opcion2='2 a 4 veterinarios' opcion3='4 a 6 veterinarios' opcion4='7 o más veterinarios'/>

          </div>
          <div className='innerContainer'>
            <Button
              backgroundColor='#ea9a64'
              _hover='rgb(174 213 142)'
              _active={{bg:'rgb(174 213 142)', borderColor:'rgb(174, 213, 142)'}}
              color='#fff'
              width='100%'
              marginTop='10px'   
            >Aplicar Filtros</Button>
          </div>
        </div>

        <div className='SearchOuterContainer3 container'>
          <div className='SearchInfoContainer'>
            <div className='titleContainer'>
              <Heading className='title'>Busqueda de veterinarias</Heading>
            </div>
          </div>
          <div className='SearchGridContainer'>
            <Input className='inputS' focusBorderColor='rgb(174 213 142)' placeholder='Ingrese el nombre de una veterinaria'/>
            <Button className='buttonS'
              backgroundColor='#ea9a64'
              _hover='rgb(174 213 142)'
              _active={{bg:'rgb(174 213 142)', borderColor:'rgb(174, 213, 142)'}}
              color='#fff'
              grid-column='8'
              grid-row='1'
            >	&#x1F50D; </Button>
          </div>

          <div className='CardsContainer'>
            <CardComponent title='Veterinaria El Rejo'  link='elpastor.html' image='https://pbs.twimg.com/media/EWH0kEZWsAAWwvI.jpg'/>
            <CardComponent title='Veterinaria La Paz'  link='elpastor.html' image='https://pbs.twimg.com/media/EWH0kEZWsAAWwvI.jpg'/>
            <CardComponent title='CEMIVET'  link='elpastor.html' image='https://pbs.twimg.com/media/EWH0kEZWsAAWwvI.jpg'/>
            <CardComponent title='VETINSA'  link='elpastor.html' image='https://pbs.twimg.com/media/EWH0kEZWsAAWwvI.jpg'/>
            <CardComponent title='Veterinaria El Pastor'  link='elpastor.html' image='https://pbs.twimg.com/media/EWH0kEZWsAAWwvI.jpg'/>
            <CardComponent title='Veterinaria La Bendicion'  link='elpastor.html' image='https://pbs.twimg.com/media/EWH0kEZWsAAWwvI.jpg'/>
            <CardComponent title='Veterinaria El Cerro'  link='elpastor.html' image='https://pbs.twimg.com/media/EWH0kEZWsAAWwvI.jpg'/>
            <CardComponent title='DANA'  link='elpastor.html' image='https://pbs.twimg.com/media/EWH0kEZWsAAWwvI.jpg'/>
          </div>

        </div>




      </div>
     );
   }
   
 export default Search;
   