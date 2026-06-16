import React from 'react'
import ChildComponent from './ChildComponent'


const Parentcomponnet = () => {
    // const name1 = "Bharath"
    // const age1 = 30

    const mobile ={
        name:"Samsung",
        price:25000
    }
  const students = ["Rishi" , "Rahul" ,"Krishna" ,"Prinshu"]

  const buttonClick =()=>{
    alert("Clicked")
  }
  return (
    <div>
      <ChildComponent bharath={mobile} gghh={students} click={buttonClick}/>
    </div>
  )
}

export default Parentcomponnet
