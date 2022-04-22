import {useState, React} from 'react';
import InputComponent from './InputComponent'
import { Heading, Button } from '@chakra-ui/react';
import './register.css'


const Login = () => {

    const [contra1, setContra1] = useState('')
    const [correo, setCorreo] = useState('')
    
    const getCorreo = (correo) => {
        setCorreo(correo)
    }

    const getContra = (contra) => {
        setContra1(contra)
    }

    const handleSubmit = event => {
        event.preventDefault();
        if(correo === 'ja@1' && contra1 === '1'){
            alert('bienvenido')  

        }else{
            alert('no')
        }
      };

  return (
    <div className='provisionalBackgorund'>
            <div className='outerContainer container' >
                <div className='infoContainer'>
                    <div className='titleContainer'>
                        <Heading className='title'>Iniciar Sesión</Heading>
                    </div>
                    <form onSubmit={handleSubmit}>

                    <InputComponent getter = {getCorreo} title='Correo'  message='Ingresa tu correo' />
                    <InputComponent getter = {getContra} title='Contraseña'  message='Ingresa tu contraseña' />
                    
                    <Button
                            backgroundColor='#ea9a64'
                            _hover='rgb(174 213 142)'
                            _active={{bg:'rgb(174 213 142)', borderColor:'rgb(174, 213, 142)'}}
                            color='#fff'
                            type='submit' 
                            width='100%'
                            marginTop='10px' 
                             
                        >
                            Aceptar
                    </Button>
                    </form>
                    
                    <p className='questionCont'>¿No tienes cuenta? <a href='./Register'><b className='highlight'>¡Registrate!</b></a></p>
                </div>
                <div className='innerContainer'>
                    </div>
            </div>
        </div>
  )
}

export default Login
