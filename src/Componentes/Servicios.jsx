import React from 'react'
import { Descripcionservicio } from './Descripcionservicio'
import { Otrosservicios } from './Otrosservicios'
import { Ultimoscomentarios } from './Ultimoscomentarios'

export const Servicios = () => {
    return (
        <>
            <div className="col-sm-12">
                <Descripcionservicio />
            </div>
            <div className="col-sm-12">
                <Ultimoscomentarios />
            </div>
            <div className="col-sm-12">
                <Otrosservicios />
            </div>
        </>
    )
}
