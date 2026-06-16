import React from 'react'
import Students from './Students'
const Teachers = () => {
    const Bharath ={
        maths:40,
        science:50,
        social:45
    }
  return (
    <div>
      <Students marks={Bharath}/>
    </div>
  )
}

export default Teachers
