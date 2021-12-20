const servImages = require.context('../Imagenes', true);

export const Descripcionservicio = (props) => {
    return (
        <>
            <h1><center>Nuestros servicios</center></h1>
            <p></p>
            <section className="my-4">  
                <div className="container">
                    {props.data.map((serv)=>{
                        return(
                            <div key={serv._id} className="row">
                                <div className="col-md-5">
                                    <p></p>
                                    <img alt="" src={servImages(`./${serv.url_imagen_servicio}`).default} width="400" />
                                </div>
                                <div className="col-md-7">
                                    <p></p>
                                    <h1>{serv.nombre_servicio}</h1>
                                    <div align="justify">
                                        <p>{serv.descripcion_servicio}</p>
                                    </div>
                                    <p></p>
                                    <p></p>
                                    
                                    <div className="col-auto">
                                        <a href="../agenda">
                                        <button type="button" className="btn btn-light mb-3">Reservar</button>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </section>
        </>
    )
}
