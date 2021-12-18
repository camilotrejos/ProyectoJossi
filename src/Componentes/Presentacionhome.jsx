import Imgpresentacion from "../Imagenes/Presentacion.jpeg";
import React from 'react'

export const Presentacionhome = () => {
    return (
        <>
            <section className="my-4">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <img alt="" className="" src={Imgpresentacion} width="500" />
                        </div>
                        <div className="col">
                            <h2>Bienvenido</h2>
                            <div align="justify"><p>Jossi BarberShop es un lugar donde podrás encontrar los servicios que
                                necesitas para verte y sentirte bien. Te ofrecemos servicios de corte para el cabello y la barba en diferentes estilos,
                                además de diseño y perfilado de cejas.
                                Podrás elegir a uno de nuestros barberos especialistas según la disponibilidad de su agenda.<br></br>
                                Registrate y disfruta de todo lo que la familia Jossi tiene para ti.
                            </p></div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
