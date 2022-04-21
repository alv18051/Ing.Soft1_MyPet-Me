import React from 'react';
import { Input, FormLabel } from '@chakra-ui/react';
import './register.css'

const InputComponent = ({ fun, title, message }) => {

  const handleChange = (event) => {
        fun(event.target.value)
    }

  const colors = {
      fondo: 'rgb(223 225 225)',
      verde: 'rgb(174 213 142)',
      white: 'rgb(181 142 213)',
      naranja: 'rgb(37, 150, 190)',
      verde2: '#97db75',
      verde3: '#ace291',
      verde4: '#b6e69e'
  }

  const styles = {
      outerContainer: {
          width: '100%',
          height: 'auto',
          padding: '10px',
          borderRadius: '10px',
      },
  };

  return (
    <div className='outerContainer2'>
      <FormLabel color={'rgb(174 213 142)'}>{title}</FormLabel>
      <Input onChange={handleChange} focusBorderColor={colors.verde} placeholder={message} />
    </div>
  )
}

export default InputComponent
