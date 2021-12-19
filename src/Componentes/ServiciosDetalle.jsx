import React from 'react'
import { Descripcionservicio } from './Descripcionservicio'
import { Otrosservicios } from './Otrosservicios'
import { Ultimoscomentarios } from './Ultimoscomentarios'

export const ServiciosDetalle = (props) => {
    

    
    return (
        <>

            <h1>{props.name}</h1>
            {/* <div className="col-sm-12">
                <Descripcionservicio />
            </div>
            <div className="col-sm-12">
                <Ultimoscomentarios />
            </div>
            <div className="col-sm-12">
                <Otrosservicios />
            </div> */}
        </>
    )
}
