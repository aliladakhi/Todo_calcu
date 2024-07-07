import React from 'react'
import css from "./Input.module.css"

function Input({value,handleClick}) {

  return (
    <div>
      <input className={`${css.expr}`} onKeyDown={(e)=>handleClick(e.key)}  value={value} type="text" readOnly/>
    </div>
  )
}

export default Input
