import React, {Fragment, useState, useContext} from 'react';
import ProyectoContext from '../../context/proyectos/proyectoContext';
const NuevoProyecto = () =>{

    //Obtener el state del formulario
    const proyectosContext = useContext(ProyectoContext);
    const { formulario,
            errorformulario,
            mostrarFormulario,
            agregarProyecto,
            mostrarError } 
            = proyectosContext;

    //State para proyecto
    const [proyecto, guardarProyecto] = useState({
        nombre: ''
    });

    //Extraer nombre del proyecto
    const{ nombre } = proyecto;

    const onChangeProyecto = e =>{
        guardarProyecto({
            ...proyecto,
            [e.target.name] : e.target.value
        })
    }

    const onSubmitProyecto = e =>{
        e.preventDefault();
        

        //Validar proyecto
        if(nombre === ''){
            mostrarError();
            return;
        }
            
        
        //Agregar al state
        agregarProyecto(proyecto);
        //Reiniciar el form
        guardarProyecto({
            nombre:''
        })
    }

    const onClickForm = () =>{
        mostrarFormulario();


    }
    return(
        <Fragment>
        <button
            type="button"
            className="btn btn-block btn-primario"
            onClick={onClickForm}
        >Nuevo Proyecto</button>

            
                
            { formulario ? (
                <form
                className= "formulario-nuevo-proyecto"
                onSubmit={onSubmitProyecto}
            >
                <input
                    type="text"
                    className="input-text"
                    placeholder="Nombre Proyecto"
                    name="nombre"
                    onChange={onChangeProyecto}
                    value={nombre}
                >
                </input>
    
                <input
                    type="submit"
                    className="btn btn-primario btn-block"
                    value="Agregar Proyecto"
                ></input>
            </form>
         
            )
                : null
        }
            
             
        {errorformulario ? <p className="mensaje error">El nombre del
        proyecto es obligatorio</p>
            : null
        }
        </Fragment> 
    );
    }

export default NuevoProyecto;