import Cejas from "../Imagenes/Cejas.jpeg";
import Barba from "../Imagenes/Barba.jpeg";
import Cabello from "../Imagenes/Cabello.jpeg";
import React from 'react'

export const Servicioshome = () => {
    return (
        <>
            <section>
                <div>
                    <h1>Nuestros servicios</h1>
                </div>
                <p></p>
                <div class="row gx-4 gx-lg-5">
                    <div class="col-md-4 mb-5">
                        <div class="card h-100">
                            <div class="card-body">
                                <img class="" src={Cabello} width="300" />
                            </div>
                            <div class="card-footer"><button type="button" class="btn btn-dark">Cabello</button></div>
                        </div>
                    </div>
                    <div class="col-md-4 mb-5">
                        <div class="card h-100">
                            <div class="card-body">
                                <img class="" src={Barba} width="300" />
                            </div>
                            <div class="card-footer"><button type="button" class="btn btn-dark">Barba</button></div>
                        </div>
                    </div>
                    <div class="col-md-4 mb-5">
                        <div class="card h-100">
                            <div class="card-body">
                                <img class="" src={Cejas} width="300" />
                            </div>
                            <div class="card-footer"><button type="button" class="btn btn-dark">Cejas</button></div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
