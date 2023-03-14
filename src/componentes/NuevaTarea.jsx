import React from 'react'
import { useState } from 'react'

const NuevaTarea = ({crearTarea}) => {
    const [agregar,setAgregar]= useState('')
  

    const handleSubmit = (e) =>{
      crearTarea(agregar)  
      e.preventDefault()
      localStorage.setItem('tarea', agregar)
      setAgregar('') 
    }
  
    return (
    <form onSubmit={handleSubmit} className='my-2 row'> 
     
      <h1 > APP TAREAS </h1>
      <div className='col-9'>
        <input type="text" 
        placeholder="cual es tu nueva tarea" 
        onChange={(e)=>{setAgregar(e.target.value)}} 
        value={agregar} 
        className='form-control' />
      </div>
      <div className='col-3'>
        <button onChange={()=> alert(agregar)} className='btn btn-primary btn-sm'>Agregar Tarea </button>
      </div>
      

    

</form> 
  )
}

export {NuevaTarea}