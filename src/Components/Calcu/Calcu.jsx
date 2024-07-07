import React, { useState } from 'react'
import Input from './Input'
import Button from './Button'
import style from "./Calcu.module.css"

function Calcu() {
  const optrList=[
    "C","1","2","+","3","4","-","5","6","*","7","8","/","9","0","%",".","<-","="
  ]

  const [value,setValue]=useState("")
  
  const [error,setError]=useState("")


  function handleClick(buttonValue) {
    if (buttonValue == "C" || buttonValue=="Delete") {
      setValue("");
    } else if (buttonValue == "=" || buttonValue=="Enter") {
      if(value.length!=0){
        let newValue = String(eval(value));
        setValue(newValue);
      }

    } else if (buttonValue == "<-" || buttonValue=="Backspace") {
      console.log(typeof value);
      let newValue = value.slice(0, value.length - 1);
      setValue(newValue);
    } else if(["1","2","+","3","4","5","-","6","7","*","8","9","/","0",".","%"
    ].includes(buttonValue)) {
      if (
        (["+", "-", "*", "/", "%","."].includes(value[value.length - 1]) &&
          ["+", "-", "*", "/", "%","."].includes(buttonValue))) {
            throw Error("Invalid Entry")
      } else {
        let newValue = value + buttonValue;
        setValue(newValue);
      }
    }else{
      
      throw Error("Invalid Entry: Strict mode is ON")
    }
  }


  function handleClickk(buttonValue){
    try {
      handleClick(buttonValue)
    } catch (error) {
      setError(error.message)
      setTimeout(()=>{
        setError("")
      },700)
    }
  
  }
  return (
    <>
    <div className={`${style.container}`}>
      <div>
        <Input value={value} handleClick={handleClickk}/>
      </div>
      <div className={`${style.message}`}>
        <p>{error}</p>
      </div>
      <div className={`${style.btns}`}>
        {optrList.map((opr,key)=>{
            return <Button key={key} handleClick={handleClickk} buttonValue={opr}/>
        })}
      </div>
      </div>
    </>
  )
}

export default Calcu
