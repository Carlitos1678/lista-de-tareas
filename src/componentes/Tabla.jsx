import React from 'react'
import Fila from './Fila'


  const Tabla = ({work, Togglefila, tareacompletada = false}) => {
  
  const tablaRows = (tareahecha) =>{
    return(
      work
      .filter(task=> task.realizada === tareahecha) 
      .map(task=>(
        <Fila task={task} key={task.name} Togglefila={Togglefila}  />
      ))
    )
  }

  return (
    <table className='table table-dark table-striped table-bordered-secondary'>
          <thead>
            <tr>
              <th className='table-primary'>Lista de tareas </th>
            </tr>
            </thead>
            <tbody>
              {
               tablaRows(tareacompletada)
              }
            </tbody>     
        </table>
  )
}


export {Tabla}