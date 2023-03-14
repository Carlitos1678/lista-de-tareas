
import { NuevaTarea } from "./componentes/NuevaTarea";
import { useState, useEffect} from "react";
import {Tabla}  from "./componentes/Tabla";
import {Cleantask} from "./componentes/Cleantask";



function App() {
 const [tarea,setTarea] = useState([
  {name:'limpiar la casa', realizada: false},
  {name:'leer 20 min', realizada: false},
  {name:'programar 20', realizada: false}
 ])

 function crearTarea (Tarea){
  if (!tarea.find(tarea => tarea.name === Tarea)){
     setTarea([...tarea,{name:Tarea , realizada: false}])
  }
 
 }

 const limpiartareas = () =>{
    return(
      setTarea(tarea.filter(t=> !t.realizada))
    )
 }

 const Togglefila = work => {
    setTarea(
      tarea.map(w=> (w.name === work.name ? {...w, realizada: !w.realizada}: w) ))
   
 }

 useEffect(()=> {
  let data = localStorage.getItem('task')
  if (data){
    setTarea(JSON.parse(data))
    console.log(data)
  }
 },[])

 useEffect(()=>{
  localStorage.setItem('task', JSON.stringify(tarea))
 },[tarea])

 


  return (
      <div className="bg-dark vh-100 text-white ">
        <div className="container col-md-4 offset-md-4 p-4">
          <NuevaTarea crearTarea={crearTarea}/>
          <Tabla work={tarea} Togglefila={Togglefila} />
          <Cleantask limpiartareas={limpiartareas}/>
          <Tabla work={tarea} Togglefila={Togglefila} tareacompletada={true} />
        </div>
      
       
      </div>
 

    )
}
export default App;
