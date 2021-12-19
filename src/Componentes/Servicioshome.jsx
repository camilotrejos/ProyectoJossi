import { useState, useEffect } from "react";
import React from 'react'

export const Servicioshome = () => {

    const [dataServicios, setdataServicios] = useState([]);
    
    const fetchServicios = ()=>{
        fetch('http://localhost:8080/api/servicios')
            .then(res => res.json())
            .then(data=>{
                setdataServicios(data)
                console.log(data);
    
            })
      }

    useEffect(()=>{
        fetchServicios();
    },[])

    return (
        <>
            <section>
                <div>
                    <h1>Nuestros servicios</h1>
                </div>
                <p></p>

                    <div className="row gx-4 gx-lg-5">     
                        {dataServicios.map((serv)=>{   
                            return(
                                <div className="col-md-4 mb-5">
                                    <div className="card h-100">
                                        <div className="card-body">
                                            <img alt={serv.nombre_servicio} src={`../src/Imagenes/${serv.url_imagen_servicio}`} width="300" />
                                        </div>
                                        <div className="card-footer"><button type="button" className="btn btn-dark">{serv.nombre_servicio}</button></div>
                                    </div>  
                                </div>
                            );
                        })}          
                    </div>
            </section>
        </>
    )
}
