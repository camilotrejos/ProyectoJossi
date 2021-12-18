import React from 'react'
import { useState, useEffect } from 'react'
import { Titulo } from './Titulo'


export const Agenda = () => {


    const [SelectedServ, setSelectedServ] = useState("");
    const [ListBarberos, setListBarberos] = useState([]);


    const pickServicio = (event)=>{
        setSelectedServ(event.target.value)

        fetch()
    }
 
    useEffect(() => {
        const filterBarberos = dataBarberos.filter((barb)=> barb.servicio_barbero===SelectedServ)
        setListBarberos(filterBarberos)

    }, [SelectedServ])
    
    const dataServicios = 
    [

        {
            id_servicio:"1",
            nombre:"Corte de Cabello",
            url_imagen:"Cabello.jpeg",
            descripcion:"Descripcion Cabello",
            costo:"1000"
        },

        {
            id_servicio:"2",
            nombre:"Corte de Barba",
            url_imagen:"Barba.jpeg",
            descripcion:"Descripcion Barba",
            costo:"2000"
        },

        {
            id_servicioe:"3",
            nombre:"Corte de Cejas",
            url_imagen:"Cejas.jpeg",
            descripcion:"Descripcion Cejas",
            costo:"3000"
        },

    ]

    const dataBarberos =
    [
        {
            id_barbero: "1",
            nombre_barbero: "juan",
            servicio_barbero: "1",
        },

        {
            id_barbero: "2",
            nombre_barbero: "Pedro",
            servicio_barbero: "1",
        },

        {
            id_barbero: "3",
            nombre_barbero: "Pedro",
            servicio_barbero: "3",
        }

    ]
    
 
    return (
        <>
            < Titulo />    

            <p/>

            <div className="d-flex justify-content-center">

                <select id="inputSelectServicio" className="form-select form-select-lg mb-3" aria-label=".form-select-lg example" onChange={pickServicio}>
                    <option selected>Seleccione el Servicio</option>
                    
                    {dataServicios.map((serv)=>{
                        return(
                            <option key={serv.id_servicio} value={serv.id_servicio}>{serv.nombre}</option>
                        );

                    })}
                   
                </select>
                        
            </div>

            <p/>



            <div className="d-flex justify-content-center">

                <select id="inputSelectBarbero" className="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
                    <option selected>Seleccione el Barbero</option>
                    
                    {ListBarberos.map((barb)=>{
                        return(
                            <option key={barb.id_barbero} value={barb.id_barbero}>{barb.nombre_barbero}</option>
                        );

                    })}
                   
                </select>
                        
            </div>

            <p/>

            <div className="d-flex justify-content-center">
                <table className="table table-dark table-hover">
                    <thead>
                        <tr>
                            <th scope="col">Horario</th>
                            <th scope="col">Disponibilidad</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">07:00-08:00</th>
                            <td>No disponible</td>

                        </tr>
                        <tr>
                            <th scope="row">08:00-09:00</th>
                            <td>No disponible</td>

                        </tr>
                        <tr>
                            <th scope="row">09:00-10:00</th>
                            <td>No disponible</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}
