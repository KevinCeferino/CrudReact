import React, { useState } from 'react'
import uniqid from 'uniqid'

const Listadonombres = () => {

    const [nombre, setNombre] = useState('')
    const [listadonombres, setListadonombres] = useState([])
    const [modoEdicion, setmodoEdicion] = useState(false)
    const [id, setId] = useState('')
    const [error, setError] = useState(null)

    const addNombres = (e) => {
        e.preventDefault()
        if (!nombre.trim()) {
            setError('El campo está vacío')
            return
        }
        const nuevoNombre = {
            id: uniqid(),
            tituloNombre: nombre
        }
        setListadonombres([...listadonombres, nuevoNombre])
        setNombre('')
        setError(null)

    }
    const deleteNombre = (id) => {
        const nuevaArray = listadonombres.filter(item => item.id !== id)
        setListadonombres(nuevaArray);
    }
    const editar = (item) => {
        setmodoEdicion(true)
        setNombre(item.tituloNombre)
        setId(item.id)
    }
    const editarNombre = (e) => {
        e.preventDefault()
        if (!nombre.trim()) {
            setError('El campo está vacío')
            return
        }
        const NuevoArray = listadonombres.map(item => item.id === id ? { id: id, tituloNombre: nombre } : item)
        setListadonombres(NuevoArray)
        setmodoEdicion(false)
        setNombre('')
        setError(null)
    }
    return (
        <div>
            <h1>Aplicación de CRUD básica</h1>
            <div className="row">
                <div className="col">
                    <h2>Listado de nombres</h2>
                    <ul className="list-group">
                        {
                            listadonombres.map(item =>
                                <li
                                    key={item.id}
                                    className="list-group-item">{item.tituloNombre}
                                    <button
                                        onClick={() => { editar(item) }}
                                        className="btn btn-info float-right">
                                        Editar
                                 </button>
                                    <button
                                        onClick={() => { deleteNombre(item.id) }}
                                        className="btn btn-danger float-right">
                                        Borrar
                                 </button>
                                </li>)
                        }
                    </ul>
                </div>
                <div className="col">
                    <h2>Formulario para añadir nombres</h2>
                    <form onSubmit={modoEdicion ? editarNombre : addNombres} className='form-group'>
                        <input
                            onChange={(e) => setNombre(e.target.value)}
                            className='form-control mb-3'
                            placeholder='Introduce el nombre'
                            type="text"
                            value={nombre}
                        />
                        <input
                            className='btn btn-outline-info btn-block mb-3'
                            type="submit"
                            value={modoEdicion ? 'EDITAR NOMBRES' : 'REGISTRAR NOMBRE'} />
                    </form>
                    {
                        error != null ? (
                            <div className="alert alert-danger">{error}</div>
                        ) :
                            (
                                <div></div>
                            )
                    }
                </div>
            </div>
        </div>
    )
}

export default Listadonombres