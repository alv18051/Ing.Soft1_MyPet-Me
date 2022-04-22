import React, { useState } from 'react';
import InputComponent from './InputComponent'
import { Heading, Button, Input, FormControl, FormLabel  } from '@chakra-ui/react';
import './register.css';

//const Client = require('pg').Pool;


/*const client = new Client({
    user:"postgres",
    host:"localhost",
    database:"mypet",
    password:"bases2022",
    port: 5432

});

const InsertUser = async(user_name, email,password, apellido, nombre) =>{
    try{
        await client.connect();
        await client.query("INSERT INTO users(user_name, email,password, apellido, nombre)VALUES ($1, $2,$3,$4,$5)`", [user_name, email, apellido, nombre, password]);
        return true
    } catch{
        
        return false;
    }finally{
        await client.end();
    }
};*/

let user_type = 1;

const Register = () => {

    const [nombre, setNombre] = useState('')
    const [apellido, setApellido] = useState('')
    const [user, setUser] = useState('')
    const [correo, setCorreo] = useState('')
    const [contra1, setContra1] = useState('')
    const [contra2, setContra2] = useState('')

    const handleSubmit = event => {
        event.preventDefault();
        alert(`Email: ${correo} & Nombre: ${nombre} & Apellido: ${apellido} & Usuario: ${user} `);
        if(contra1 === contra2){
            alert('las contraseñas coinciden')
            /*InsertUser(user, correo, apellido, nombre, contra1).then(resilt => {
                if (resilt){
                    console.log('usuario creado');
                }
            })*/   

        }else{
            alert('no coinciden las contraseñas')
        }
      };

    const getNombre = (name) => {
        setNombre(name)
    }

    const getApellido = (apellido) => {
        setApellido(apellido)
    }
    const getUser = (user) => {
        setUser(user)
    }
    const getCorreo = (correo) => {
        setCorreo(correo)
    }
    const getContra = (contra) => {
        setContra1(contra)
    }
    const getContras = (contras) => {
        setContra2(contras)
    }
 

  return (
    <div className='provisionalBackgorund'>
            <div className='outerContainer container' >
                <div className='infoContainer'>
                    <div className='titleContainer'>
                        <Heading className='title'>Registro</Heading>
                    </div>
                    <form onSubmit={handleSubmit}>
                    <InputComponent getter = {getNombre} title='Nombre'  message='Ingresa tu nombre' />
                    <InputComponent getter = {getApellido} title='Apellidos'  message='Ingresa tus apellidos' />
                    <InputComponent getter = {getUser} title='Nombre de usuario'  message='Ingresa tu nombre de usuario' />
                    <InputComponent getter = {getCorreo} title='Correo'  message='Ingresa tu correo' />
                    <InputComponent getter = {getContra} title='Contraseña'  message='Ingresa tu contraseña' />
                    <InputComponent getter = {getContras} title='Cofirmar contraseña' message='Confirma tu contraseña' />
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

                    <p className='questionCont'>¿Ya tienes cuenta? <a href='./Login'> <b className='highlight'>Iniciar sesión</b></a></p>
                </div>

                <div className='innerContainer'>
                        
                    </div>
            </div>
        </div>
  )

  
}

export default Register
