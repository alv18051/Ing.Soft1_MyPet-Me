import React from 'react';
import InputComponent from './InputComponent'
import { Heading, Button } from '@chakra-ui/react';
import './register.css'


const Login = () => {

    const [correo, setCorreo] = useState('')
    const [contra1, setContra1] = useState('')

    const getCorreo = (correo) => {
        setCorreo(correo)
    }
    const getContra = (contra) => {
        setContra1(contra)
    }

    const handleVerify = ( email, password) => {
        fetch("http://127.0.0.1:8000/verify", {
            method: 'GET',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify({
                
                email: email,
                password: password,
                
            })
        })
        .then(response => response.json())
        .then(result => {
            if(result.success){
                alert("Bienvenido")
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
        alert(`Email: ${correo} & Nombre: ${nombre} & Apellido: ${apellido} & Usuario: ${user} `);
        if(contra1 === contra2){
            alert('las contraseñas coinciden');
            handleVerify( correo, contra1);

        }else{
            alert('no coinciden las contraseñas, vuelva a intentarlo')
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
                    <InputComponent title='Correo'  message='Ingresa tu correo' />
                    <InputComponent title='Contraseña'  message='Ingresa tu contraseña' />
                    <p className='questionCont'>¿No tienes cuenta? <a href='#'><b className='highlight'>¡Registrate!</b></a></p>
                </div>
                <div className='innerContainer'>
                        
                    </div>
            </div>
        </div>
  )
}

export default Login
