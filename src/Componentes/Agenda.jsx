import React from 'react'
import { Titulo } from './Titulo'

export const Agenda = () => {


    const dataServicios = [

    {Id:1, Nombre:'Corte de Cabello'},
    {Id:2, Nombre:'Corte de Barba'},
    {Id:3, Nombre:'Cejas'},

    ]
    
 
    return (
        <>
            < Titulo />    

            <p/>

            <div class="d-flex justify-content-center">
            
                <input class="d-flex justify-content-center" list="dataServicios" id="iddataServicios" placeholder="Busque el Servicio"/>
                <datalist id="dataServicios">
                    
                    <option value="Corte cabello"/>
                    <option value="Corte barba"/>
                    <option value="Corte cejas"/>
                    
                   
                </datalist>
            </div>

            <p/>

            <div class="d-flex justify-content-center">
                <input class="d-flex justify-content-center" list="dataBarberos" id="iddataBarberos" placeholder="Busque el Barbero"/>
                    <datalist id="dataBarberos">
                        <option value="Pepito"/>
                        <option value="Anita"/>
                        <option value="Mafe"/>
                    </datalist>
            </div>

            <p/>

            <div class="d-flex justify-content-center">
                <table class="table table-dark table-hover">
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
