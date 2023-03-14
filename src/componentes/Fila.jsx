import React from 'react'

const Fila = ({task,Togglefila}) => {
  return (
    <tr >
        <td className='d-flex justify-content-between'> 
            {task.name}
            <input type='checkbox' 
            checked={task.realizada}
            onChange={()=> Togglefila(task)}/>
         </td>   
  </tr>
  )
}

export default Fila