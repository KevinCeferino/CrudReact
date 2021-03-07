import React, {useState} from 'react'
import uniqid from 'uniqid'

const Listadonombres = ()=>{

    const [nombre, setNombre] = useState('')
    const [listadonombres, setListadonombres] = useState([])

    const addNombres=(e)=>{
        e.preventDefault()
        const nuevoNombre = {
            id:uniqid(),
            tituloNombre:nombre
        }
        setListadonombres([...listadonombres,nuevoNombre])
        setNombre('')
        
    }
    const deleteNombre=(id)=>{
        const nuevaArray = listadonombres.filter(item => item.id !== id)
        setListadonombres(nuevaArray);
    }
    return (
        <div>
            <h1>Aplicación de CRUD básica</h1>
            <div className="row">
                <div className="col">
                    <h2>Listado de nombres</h2>
                    <ul className="list-group">
                        {
                            listadonombres.map(item=>
                                
                                <li
                                 key={item.id} 
                                 className="list-group-item">{item.tituloNombre}
                                 <button
                                 onClick={()=>{deleteNombre(item.id)}}
                                 className="btn btn-danger float-right">
                                     Borrar
                                 </button>
                                 </li>)
                        
                        }
                    </ul>
                </div>
                <div className="col">
                    <h2>Formulario para añadir nombres</h2>
                    <form onSubmit={(e)=>addNombres(e)} className='form-group'>
                        <input 
                        onChange={(e)=> setNombre(e.target.value)} 
                        className='form-control mb-3' 
                        placeholder='Introduce el nombre' 
                        type="text"
                        value={nombre}
                        />
                        <input className='btn btn-outline-success btn-block mb-3' type="submit" value='Registrar nombre'/>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Listadonombres