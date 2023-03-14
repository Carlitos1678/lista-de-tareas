import React from 'react'

const Cleantask = ({limpiartareas}) => {
   
    const handleClean =()=>{
        if (window.confirm('¿Quieres eliminar las tareas?')){
            limpiartareas()
        }
    }
    return (
        <input type="button" value='Limpiar tareas' onClick={handleClean} className='btn btn-danger btn-sm d-flex'/>
    
  )
}

export {Cleantask}