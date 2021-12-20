import { useState, useEffect } from "react";
import React from 'react'

const servImages = require.context('../Imagenes', true);

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
                                <div key={serv._id} className="col-md-4 mb-5">
                                    <a href={`../servicios/${serv.id_servicio}`} className="text-decoration-none">
                                        <div className="card bg-dark text-light border-0 servicios">
                                            <img alt="" src={servImages(`./${serv.url_imagen_servicio}`).default} className="card-img-top" />
                                            <div className="card-body">
                                                <h5 className="card-title">{serv.nombre_servicio}</h5>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            );
                        })}          
                    </div>
            </section>
        </>
    )
}
