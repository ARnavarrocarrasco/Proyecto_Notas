import React from 'react'
import Container from '../01_atomos/Container'
import Button from '../01_atomos/Button'

const Header = (props) => {
  return (
    <Container type='header'>
        <Button color='red'/>
        {props.children}
    </Container>
  )
}

export default Header
