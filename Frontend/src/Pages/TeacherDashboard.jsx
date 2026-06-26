import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {toast,ToastContainer} from 'react-toastify'
const TeacherDashboard = () => {
  const id =localStorage.getItem("id")
  const token = localStorage.getItem("token")
  const[data, setData]= useState({})

  const fetchUser=async()=>{
try {
    const user = await axios.get(`http://localhost:8000/api/dashboard/${id}`,{
        headers:{
            Authorization:`Bearer ${token}`
        }
    })
    setData(user.data)
     toast.success(`Login sucess`)
} catch (error) {
    console.log(error)
}
  }

  useEffect(()=>{
    fetchUser()
  },[])

  return (
    <div>
     <header className='bg-blue-300 flex'>
        <h1 className='text-2xl p-3'>Welcome {data.name}</h1>
        <button className='bg-red-500 m-2 p-1 rounded-lg '>Logout</button>
    </header>
    <ToastContainer/>
    </div>
  )
}

export default TeacherDashboard
