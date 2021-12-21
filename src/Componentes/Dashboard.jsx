import React, { useEffect, useState }from 'react'

export const Dashboard = () => {

    const [dataServicios, setdataServicios] = useState([]);
    const [dataBarberos, setdataBarberos] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:8080/api/servicios/')
            .then(res => res.json())
            .then(data=>{
                console.log(data)
                setdataServicios(data);
            })
        
        fetch('http://localhost:8080/api/barberos/')
        .then(res => res.json())
        .then(data=>{
            console.log(data)
            setdataBarberos(data);
        })

    },[]);



    return (
        <>
            <div className="d-flex justify-content-center">
              <h1>Dashboard</h1>        
            </div>  
            <p/> <p/><p/><p/>
            <div className="d-flex justify-content-center">
                <a href='../crearservicio'>
                    <button type="button" className="btn btn-light">Servicio+</button>
                </a>
            </div>


            <div className="d-flex justify-content-left">
                <h2>Servicios</h2>
            </div>     
              
            <div className="d-flex justify-content-center">
            <table className="table table-dark table-striped">
                <thead>
                    <tr>
                    <th scope="col">Nombre</th>
                    <th scope="col">Descripcion</th>
                    <th scope="col">Costo</th>
                    <th scope="col">Acciones</th>
                    
                    </tr>
                </thead>
                <tbody>
                
                {dataServicios.map((serv)=>{
                    return(
                        <tr key={serv._id}>
                        <td>{serv.nombre_servicio}</td>
                        <td>{serv.descripcion_servicio}</td>
                        <td>{serv.costo_servicio}</td>
                        <td> Editar / Eliminar </td>
                                            
                        </tr>
                    );
                })}
                    
                    
                </tbody>
                </table>

            </div>
            <p/><p/><p/>
            <div className="d-flex justify-content-center">
                <a href='../crearempleado'>
                    <button type="button" className="btn btn-light">Barberos+</button>
                </a>
            </div>
            <div className="d-flex justify-content-left">
                <h2>Barberos</h2>
            </div>     
              
            <div className="d-flex justify-content-center">
            <table className="table table-dark table-striped">
                <thead>
                    <tr>
                    <th scope="col">Nombre</th>
                    <th scope="col">Apellido</th>
                    <th scope="col">Estado</th>
                    <th scope="col">Servicio</th>
                    
                    </tr>
                </thead>
                <tbody>
                
                {dataBarberos.map((barb)=>{
                    return(

                        <tr key={barb._id}>
                        <td>{barb.nombres_barbero}</td>
                        <td>{barb.apellidos_barbero}</td>
                        <td>{barb.estado_barbero.toString()}</td>
                        <td>{barb.id_servicio_barbero.nombre_servicio}</td>
                        <td> Editar / Eliminar </td>               
                        </tr>
                    );
                })}
                    
                    
                </tbody>
                </table>

            </div>
            <p/><p/><p/>
        </>
    )
}