import React from 'react';
import InputComponent from './InputComponent'
import { Heading, Button } from '@chakra-ui/react';
import './register.css'


const Login = () => {

  return (
    <div className='provisionalBackgorund'>
            <div className='outerContainer container' >
                <div className='infoContainer'>
                    <div className='titleContainer'>
                        <Heading className='title'>Iniciar Sesión</Heading>
                    </div>
                    <InputComponent title='Correo'  message='Ingresa tu correo' />
                    <InputComponent title='Contraseña'  message='Ingresa tu contraseña' />
                    <p className='questionCont'>¿No tienes cuenta? <a href='/register'><b className='highlight'>¡Registrate!</b></a></p>
                </div>
                <div className='innerContainer'>
                        <Button
                            backgroundColor='#ea9a64'
                            _hover='#ea9a64'
                            _active={{bg:'#ea9a64', borderColor:'#ea9a64'}}
                            color='#fff'
                            width='100%'
                            marginTop='10px'   
                        >
                            Aceptar
                        </Button>
                    </div>
            </div>
        </div>
  )
}

export default Login
