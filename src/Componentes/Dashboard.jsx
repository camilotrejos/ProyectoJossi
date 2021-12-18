import React from 'react'

export const Dashboard = () => {

    //const dataService= [

    //{Id:1, Nombre:'Corte de Cabello', Fecha:'24/12/2021', Empleado:'Ramón Pérez', Comentario: "Muy bueno", Calificacion: "5", Accion: "E"},
    //{Id:2, Nombre:'Corte de Barba', Fecha:'07/12/2021', Empleado:'Agripinito Tirciniano', Comentario: "Muy bueno", Calificacion: "4", Accion: "E"}

    //]
    
    return (
        <>
            <div className="d-flex justify-content-center">
              <h1>Dashboard</h1>        
            </div>  
            <p/> <p/><p/><p/>
            <div className="d-flex justify-content-center">

                <button type="button" className="btn btn-light">Servicio+</button>
            </div>


            <div className="d-flex justify-content-left">
                <h2>Servicios</h2>
            </div>     
              
            <div className="d-flex justify-content-center">
            <table className="table table-dark table-striped">
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">Descripción</th>
                    <th scope="col">Costo</th>
                    <th scope="col">Duración</th>
                    <th scope="col">Acciones</th>
                    
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <th scope="row">1</th>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                                        
                    </tr>
                    <tr>
                    <th scope="row">2</th>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    </tr>
                    <tr>
                    <th scope="row">3</th>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    
                    </tr>
                </tbody>
                </table>

            </div>
            <p/><p/><p/>
            <div className="d-flex justify-content-center">

                <button type="button" className="btn btn-light">Empleado+</button>
            </div>
            <div className="d-flex justify-content-left">
                <h2>Empleados</h2>
            </div>     
              
            <div className="d-flex justify-content-center">
            <table className="table table-dark table-striped">
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">Nombre</th>
                    <th scope="col">Servicio</th>
                    <th scope="col">Acciones</th>
                    
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <th scope="row">1</th>
                    <td></td>
                    <td></td>
                    <td></td>
                                                            
                    </tr>
                    <tr>
                    <th scope="row">2</th>
                    <td></td>
                    <td></td>
                    <td></td>
                    </tr>
                    <tr>
                    <th scope="row">3</th>
                    <td></td>
                    <td></td>
                    <td></td>
                                       
                    </tr>
                </tbody>
                </table>

            </div>
            <p/><p/><p/>
        </>
    )
}