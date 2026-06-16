import React from 'react'

const ChildComponent = ({bharath,gghh,click}) => {
  return (
    <div>
      {/* <p>{props.bharath.name}</p>
      <p>{props.bharath.price}</p> */}
      <button onClick={click}>Click me</button>
      <div>{
        gghh.map((student)=>{
        return(
        <>
        <ul>
            <li>{student}</li>
        </ul>
        </>
        )
        })
        
        }</div>
    </div>
  )
}

export default ChildComponent
