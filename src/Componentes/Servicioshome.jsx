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
                <div className="row gx-4 gx-lg-5">
                    <div className="col-md-4 mb-5">
                        <div className="card h-100">
                            <div className="card-body">
                                <img alt="" className="" src={Cabello} width="300" />
                            </div>
                            <div className="card-footer"><button type="button" className="btn btn-dark">Cabello</button></div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-5">
                        <div className="card h-100">
                            <div className="card-body">
                                <img alt="" className="" src={Barba} width="300" />
                            </div>
                            <div className="cclsard-footer"><button type="button" className="btn btn-dark">Barba</button></div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-5">
                        <div className="card h-100">
                            <div className="card-body">
                                <img alt="" className="" src={Cejas} width="300" />
                            </div>
                            <div className="card-footer"><button type="button" className="btn btn-dark">Cejas</button></div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
