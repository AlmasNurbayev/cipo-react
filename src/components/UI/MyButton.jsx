import React from 'react';
import classes from './MyButton.module.css'

export default function MyButton({children, ...props}) {
  //*"btn btn-outline-success" класс кнопки из бутстрап
  return (
    <button {...props} className={classes.myBtn}> 
      {children}
    </button>
  )
}
