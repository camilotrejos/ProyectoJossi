import Mapa from "../Imagenes/Mapa.jpg";

export const Escribenosencuentranos = () => {
    return (
        <>
            <section class="my-4">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <h2>Escríbenos</h2>                           
                                <input type="text" className="form-control" placeholder="Nombre completo" />                          
                            <p></p>
                                <textarea class="form-control rounded-3" name="Descripción" id="descripcion" rows="8" placeholder="Mensaje"></textarea>
                        </div>
                        <div className="col">
                            <h2><center>¡Encuéntranos!</center></h2>
                            <center><img alt="" src={Mapa} width="300" height="260" /></center>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
