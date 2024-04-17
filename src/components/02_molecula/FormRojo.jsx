import React from 'react'
import Container from '../01_atomos/Container'
import Button from '../01_atomos/Button'
import Input from '../01_atomos/Input'

const FormRojo = () => {
  return (
    <div>
      <Container>
        <Input/>
        <Button color='red'/>
      </Container>
    </div>
  )
}

export default FormRojo
