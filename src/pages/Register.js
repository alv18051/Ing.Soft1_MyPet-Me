import React from 'react';
import InputComponent from './InputComponent'
import { Heading, Button } from '@chakra-ui/react';
import './register.css'


const Register = () => {

  return (
    <div className='provisionalBackgorund'>
            <div className='outerContainer container' >
                <div className='infoContainer'>
                    <div className='titleContainer'>
                        <Heading className='title'>Registro</Heading>
                    </div>
                    <InputComponent title='Nombre'  message='Ingresa tu nombre' />
                    <InputComponent title='Apellidos'  message='Ingresa tus apellidos' />
                    <InputComponent title='Nombre de usuario'  message='Ingresa tu nombre de usuario' />
                    <InputComponent title='Correo'  message='Ingresa tu correo' />
                    <InputComponent title='Contraseña'  message='Ingresa tu contraseña' />
                    <InputComponent title='Cofirmar contraseña' message='Confirma tu contraseña' />
                    <p className='questionCont'>¿Ya tienes cuenta? <a href='/login'> <b className='highlight'>¡Inicia sesión!</b></a></p>
                </div>
                <div className='innerContainer'>
                        <Button
                            backgroundColor='#ea9a64'
                            _hover='rgb(174 213 142)'
                            _active={{bg:'rgb(174 213 142)', borderColor:'rgb(174, 213, 142)'}}
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

export default Register
