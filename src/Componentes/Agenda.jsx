import React from 'react'
import { useState, useEffect, useRef } from 'react'
import { Titulo } from './Titulo'


export const Agenda = () => {


/*     const [SelectedServ, setSelectedServ] = useState(""); */
    const [ListBarberos, setListBarberos] = useState([]);
    const [dataServicios, setdataServicios] = useState([]);
    const selectServRef = useRef();


    useEffect(()=>{
        fetch('http://localhost:8080/api/servicios/')
            .then(res => res.json())
            .then(data=>{
                console.log(data)
                setdataServicios(data);
            })
        
    },[]);

    const selectServ = () =>{
        const selectedServ = selectServRef.current.value
        fetch('http://localhost:8080/api/barberos/')
            .then(res => res.json())
            .then(data=>{
                console.log(data)                
                setListBarberos(data.filter(barb=>barb.id_servicio_barbero.nombre_servicio===selectedServ));
            });
    };

    return (
        <>
            < Titulo />    

            <p/>

            <p/>

            <div className="d-flex justify-content-center">

                <select className="form-select form-select-lg mb-3" aria-label=".form-select-lg example" defaultValue={'DEFAULT'} onChange={selectServ} ref={selectServRef}>
                    <option value="DEFAULT" disabled>Seleccione un servicio</option>
                    {dataServicios.map((serv)=>{
                        return(
                            <option key={serv.id_servicio} value={serv.id_servicio}>{serv.nombre_servicio}</option>
                        );

                    })}
                   
                </select>
                        
            </div>

            <div className="d-flex justify-content-center">

                <select className="form-select form-select-lg mb-3" aria-label=".form-select-lg example" defaultValue={'DEFAULT'} >
                    <option value="DEFAULT" disabled>Seleccione un Barbero</option>
                    {ListBarberos.map((barb)=>{
                        return(
                            <option key={barb.id_barbero} value={barb.id_barbero}>{barb.nombres_barbero}</option>
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
