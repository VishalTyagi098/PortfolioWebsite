import React from 'react'
import classes from './Button.module.css'

function Button(props) {
  return (
    <div className=''>
      <button className={classes.btn}><span> {props.title}</span></button>
    </div>
  )
}

export default Button