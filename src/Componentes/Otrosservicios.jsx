const servImages = require.context('../Imagenes', true);

export const Otrosservicios = ({children}) => {
    return (
        <>
        <section>
                <div>
                    <h1>Otros servicios</h1>
                </div>
                <p></p>
                <div className="row gx-4 gx-lg-5">     
                        {children.map((serv)=>{   
                            return(
                                <div key={serv._id} className="col-md-4 mb-5">
                                    <a href={`../servicios/${serv._id}`} className="text-decoration-none">
                                        <div className="card bg-dark text-light border-0 servicios">
                                            <img alt="" src={servImages(`./${serv.url_imagen_servicio}`).default} className="card-img-top" />
                                            <div className="card-body">
                                                <h4 className="card-title">{serv.nombre_servicio}</h4>
                                                <h6>Costo: ${serv.costo_servicio}</h6>
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
