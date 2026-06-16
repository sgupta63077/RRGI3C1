import React from 'react'

const Students = ({marks}) => {
  return (
    <div>
      <p>Maths :{marks.maths}</p>
       <p>Science :{marks.science}</p>
        <p>Social :{marks.social}</p>
    </div>
  )
}

export default Students
