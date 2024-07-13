import React, {useEffect, useState} from "react";
import MiembroServicio from "../servicios/MiembroServicio";
import { Link } from "react-router-dom";

export default function MembresiaComponente(){

	const[miembros,setMiembros]= useState([]);

useEffect(()=>{

listarMiembros();

},[]
)

const listarMiembros=()=>{
	MiembroServicio.findAll().then(response=>{
		setMiembros(response.data);
		console.log(response.data);
	
	}).catch(error=>{
		console.log(error);
	})
}



const deletePersona =   (idMiembro)=>{
	MiembroServicio.delete(idMiembro) . then((response) => {
	listarMiembros ();
	} ) .catch(error =>{
	console. log (error) ;
	})
}



    return (
<div className="container">
<h2 className='text-center'> Membresias Registradas</h2>

<Link to='/form-miembro' className="btn btn-primary mb-2">Agregar</Link>
    	<table class="table table-striped table-hover">
<thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Nombre</th>
      <th scope="col">Apellido</th>
      <th scope="col">Fecha de nacimiento</th>
	  <th scope="col">Correo</th>
      <th scope="col">Telefono</th>
		<th>Opciones</th>
    </tr>
  </thead>
  <tbody>
{miembros.map(
	miembro=>

    <tr key={miembro.id}>
      <td>{miembro.id}</td>
      <td>{miembro.nombre}</td>
      <td>{miembro.apellido}</td>
	  <td>{miembro.fechaDeNacimiento}</td>
      <td>{miembro.email}</td>
      <td>{miembro.telefono}</td>
	  <th><Link  className="btn btn-info" to={`/editar-miembro/${miembro.id}`}>Editar</Link></th>
	  <th><button  className='btn btn-danger'onClick={() => deletePersona(miembro.id)}>Eliminar</button></th>

    </tr>
)}    
  </tbody>
  </table>
  </div>
    )
}