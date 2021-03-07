import React, {useState} from 'react'

const Listadonombres = ()=>{
    return (
        <div>
            <h1>Aplicación de CRUD básica</h1>
            <div className="row">
                <div className="col">
                    <h2>Listado de nombres</h2>
                </div>
                <div className="col">
                    <h2>Formulario para añadir nombres</h2>
                    <form className='form-group'>
                        <input className='form-control mb-3' placeholder='Introduce el nombre' type="text"/>
                        <input className='btn btn-outline-success btn-block mb-3' type="submit" value='Registrar nombre'/>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Listadonombres