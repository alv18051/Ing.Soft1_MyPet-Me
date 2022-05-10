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

 import React, { useState } from 'react';
 import OptionComponent from './OptionComponent'
 import CardComponent from './CardComponent'
 import { Heading, Button, 
        Input, 
        FormControl, 
        Select, 
        Slider, 
        RangeSlider, 
        RangeSliderFilledTrack, 
        RangeSliderTrack, 
        RangeSliderThumb, 
        SliderTrack, 
        SliderFilledTrack, 
        SliderThumb, 
        Box, 
        SliderMark, 
        RangeSliderMark  } from '@chakra-ui/react';
 import './search.css'


 
 function Search({onCurrentPage}) {
  const [Cercania, setCercania] = useState('')
  const [Emergencia, setEmergencia] = useState('')
  const [Tarifas, setTarifas] = useState('')
  const [Rating, setRating] = useState('')
  const [Cantidad, setCantidad] = useState('')
  
 

const [value, setValue] = React.useState('')
  
   
const  handleRanking= (emergency) => {
  fetch("http://127.0.0.1:8000/sort_by_rating", {
      method: 'POST',
      headers: {
          'Content-Type' : 'application/json'
      },
      body: JSON.stringify({
          emergency: emergency,

      })

  })
  .then(response => response.json())
  .then(result => {
      if(result.success){

          console.log(result.exist)
          console.log(result.data)
          if(result.exist === 0){
              alert("No se encontraron veterinarias")

          }else{
              //alert("Vet: El trejo")
              console.log('no')


          }
      }else{
          alert("Error con la solicitud")
      }
  })
  .catch(error => {
      alert("Ocurrio un error inesperado: " + error)
  })
} 

const handleSubmit = event => {
  event.preventDefault();
  if(Emergencia === 'true'){
    setEmergencia = true;
  } else{
    setEmergencia = false
  }
  

  handleRanking(Emergencia);

};



    const target = event => {
      alert(`Cercania: ${Cercania} & Especialidad: ${Emergencia} & Tarifas: ${Tarifas} 
      & Rating: ${Rating} & Cantidad: ${Cantidad} `);
      event.preventDefault();
    }
   
     return (
      <div className='SearchBackgorund'>
        <div className='SearchOuterContainer container'>
          <div className='SearchInfoContainer'>
            <div className='titleContainer'>
              <Heading className='title'>Filtros</Heading>
            </div>
            
            <form onSubmit={target}>

            <div className='SearchOuterContainer2'>
              <FormControl>
                <label>Cercania</label>
                <Slider min={0} max = {45}  defaultValue = {0} step = {15} onChangeEnd = {(val) => console.log(val)}>
                  <SliderMark value={1} mt = '1' ml = '-2.5' fontSize='smaller'>
                    1 km
                  </SliderMark>
                  <SliderMark value={15} mt = '1' ml = '-2.5' fontSize='smaller'>
                    2 km
                  </SliderMark>
                  <SliderMark value={30} mt = '1' ml = '-2.5' fontSize='smaller'>
                    4 km
                  </SliderMark>
                  <SliderMark value={45} mt = '1' ml = '-2.5' fontSize='smaller'>
                    5+ km
                  </SliderMark>
                  <SliderTrack>
                    <Box position='relative' right={10}/>
                    <SliderFilledTrack bg= 'orange'/>
                  </SliderTrack>
                  <SliderThumb />
                </Slider>
                  
              </FormControl>
            </div>

            <div className='SearchOuterContainer2'>
              <FormControl>
                <label>Emergencia</label>
                <Select placeholder={'-Representa una emergencia'} focusBorderColor={'rgb(174 213 142)'} onChange ={event => setEmergencia(event.currentTarget.value)}>
                    <option value='true'>{'Si'}</option>
                    <option value='false'>{'No'}</option>
                  </Select>
              </FormControl>
            </div>

            <div className='SearchOuterContainer2'>
              <FormControl>
                <label>Tarifas</label>
                <RangeSlider aria-label={['min', 'max']}  defaultValue = {[0, 10]} step = {25} onChangeEnd = {(val) => console.log(val)}>
                  <RangeSliderMark value={25} mt = '1' ml = '-2.5' fontSize='smaller'>
                    -Q.1k
                  </RangeSliderMark>
                  <RangeSliderMark value={50} mt = '1' ml = '-2.5' fontSize='smaller'>
                    Q2.4k
                  </RangeSliderMark>
                  <RangeSliderMark value={75} mt = '1' ml = '-2.5' fontSize='smaller'>
                    Q3.9k
                  </RangeSliderMark>
                  <RangeSliderMark value={100} mt = '1' ml = '-2.5' fontSize='smaller'>
                    Q.4k+
                  </RangeSliderMark>
                  <RangeSliderTrack>
                    <Box position='relative' right={10}/>
                    <RangeSliderFilledTrack bg= 'orange'/>
                  </RangeSliderTrack>
                  <RangeSliderThumb index={0}/>
                  <RangeSliderThumb index={1}/>
                </RangeSlider>
              </FormControl>
            </div>

            <div className='SearchOuterContainer2'>
              <FormControl>
                <label>Rating</label>
                <RangeSlider aria-label={['min' ,'max']}  defaultValue = {[0, 10]} step = {33} onChangeEnd = {(val) => console.log(val)}>
                  <RangeSliderMark value={33} mt = '1' ml = '-2.5' fontSize='smaller'>
                    1-3
                  </RangeSliderMark>
                  <RangeSliderMark value={66} mt = '1' ml = '-2.5' fontSize='smaller'>
                    3-4
                  </RangeSliderMark>
                  <RangeSliderMark value={99} mt = '1' ml = '-2.5' fontSize='smaller'>
                    5
                  </RangeSliderMark>
                  
                  <RangeSliderTrack>
                    <Box position='relative' right={10}/>
                    <RangeSliderFilledTrack bg = ' orange'/>
                  </RangeSliderTrack>
                  <RangeSliderThumb index={0}/>
                  <RangeSliderThumb index={1}/>
                </RangeSlider>
              </FormControl>
            </div>

            <div className='SearchOuterContainer2'>
              <FormControl>
                <label>Cant. de veterinarios</label>
                <Slider min={0} max = {50}  defaultValue = {[0]} step = {10} onChangeEnd = {(val) => console.log(val)}>
                  <SliderMark value={12} mt = '1' ml = '-2.5' fontSize='smaller'>
                    1 
                  </SliderMark>
                  <SliderMark value={20} mt = '1' ml = '-2.5' fontSize='smaller'>
                    1-2 
                  </SliderMark>
                  <SliderMark value={30} mt = '1' ml = '-2.5' fontSize='smaller'>
                    2-4 
                  </SliderMark>
                  <SliderMark value={40} mt = '1' ml = '-2.5' fontSize='smaller'>
                    5-7 
                  </SliderMark>
                  <SliderMark value={50} mt = '1' ml = '-2.5' fontSize='smaller'>
                    7+
                  </SliderMark>
                  
                  <SliderTrack>
                    <Box position='relative' right={10}/>
                    <SliderFilledTrack bg= 'orange'/>
                  </SliderTrack>
                  <SliderThumb />
                </Slider>
              </FormControl>
            </div>

          
          
            <Button type='submit' 
              backgroundColor='#ea9a64'
              _hover='rgb(174 213 142)'
              _active={{bg:'rgb(174 213 142)', borderColor:'rgb(174, 213, 142)'}}
              color='#fff'
              width='100%'
              marginTop='10px'   
            >Aplicar Filtros</Button>
          

            </form>
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
            <CardComponent title='Veterinaria El Rejo'  link='./Popup' image='https://pbs.twimg.com/media/EWH0kEZWsAAWwvI.jpg'/>
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
