import React from 'react'
import './Container.css'

const Container = ({children, type = ""}) => {
  return (
      <div className={`cont ${type}`} >
        {children}
      </div>
  )
}

export default Container
