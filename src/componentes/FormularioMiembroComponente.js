import React, { useState,useEffect } from 'react'

import MiembroServicio from '../servicios/MiembroServicio';

import { Link, useNavigate,useParams } from 'react-router-dom';

export const FormularioMiembroComponente = () => {

    const [nombre, setNombre] = useState('');

    const [apellido, setApellido] = useState('');

    const [fechaDeNacimiento, setfechaDeNacimiento] = useState('');

    const [email, setEmail] = useState('');

    const [telefono, setTelefono] = useState('');


    const navigate = useNavigate();
    const {idMiembro}= useParams();

    const createMiembro = (e) =>{

        e.preventDefault();

    const Miembro = { nombre,apellido,fechaDeNacimiento, email, telefono };

    if(idMiembro){
        MiembroServicio.update(idMiembro,Miembro).then((response) => {

            console.log(response.data);
    
            navigate('/miembros');
    
        }).catch(error => {
    
            console.log(error)
    
        })
    }else{

    MiembroServicio.create(Miembro).then((response) => {

        console.log(response.data);

        navigate('/miembros');

    }).catch(error => {

        console.log(error)

    })
}}

useEffect(()=>{
MiembroServicio. findByID( idMiembro) . then (( response)=>{
setNombre( response. data. nombre) ;
setApellido( response. data. apellido) ;

setEmail ( response. data. email) ;
setTelefono( response. data. telefono) ;
const formattedDate = new Date(response.data.fechaDeNacimiento).toISOString().split('T')[0];
setfechaDeNacimiento(formattedDate);
}).catch(error=>{
console. log(error) ;
})
},[])


const titulo =()=>{
    if(idMiembro){  
return <h2 className='text-center'>Editar Persona</h2>
    }else{
return <h2 className='text-center'>Agregar Persona</h2>
    }
}
    return (

        <div>

            <div className='container pt-3'>

                <div className='row'>

                    <div className='card col-md-6 offset-md-3 offset-md-3'>

                    <h2 className=' text-center pt-2'>
                        {titulo()}
                        </h2>
                                                <div className='card-body'>

                            <form>

                                <div className="form-group mb-2">

                                    <label className="form-label">Nombre</label>

                                    <input
                                        type='text'
                                        placeholder='Ingrese el nombre'
                                        name='nombre'
                                        className='form-control'
                                        value={nombre}
                                        onChange={(e) => setNombre(e.target.value)}
                                    />

                                </div>

                                <div className="form-group mb-2">

<label className="form-label">Apellidos</label>

<input
    type='text'
    placeholder='Ingrese los apellidos'
    name='nombre'
    className='form-control'
    value={apellido}
    onChange={(e) => setApellido(e.target.value)}
/>

</div>

<div className="form-group mb-2">

<label className="form-label">Fecha de nacimiento</label>

<input
    type='date'
    placeholder='Ingrese la fecha de nacimiento'
    name='fecha'
    className='form-control'
    value={fechaDeNacimiento}
    onChange={(e) => setfechaDeNacimiento(e.target.value)}
/>

</div>



                                <div className='form-group mb-2'>

                                    <label className="form-Label">Correo</label>

                                    <input
                                        type='email'

                                        placeholder='Ingrese el correo'

                                        name='correo'

                                        className="form-control"

                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}

                                    />
                                </div>

                                <div className="form-group mb-2">
                                    <label className='form-label'>Teléfono</label>
                                    <input

                                        type='text'

                                        placeholder='Ingrese el teléfono'

                                        name='telefono'

                                        className='form-control'

                                        value={telefono}

                                        onChange={(e) => setTelefono(e.target.value)}
                                    />
                                </div>

                                <button className='btn btn-success' onClick={(e) => createMiembro(e)} >Guardar</button>

                                &nbsp;&nbsp;

                                <Link to='/miembros' className='btn btn-danger'> Cancelar</Link>

                            </form>

                        </div>

                    </div>

                </div>

            </div>
        </div>
    )

}

export default FormularioMiembroComponente;