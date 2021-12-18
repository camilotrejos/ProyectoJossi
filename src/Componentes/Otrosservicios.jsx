import Cejas from "../Imagenes/Cejas.jpeg";
import Barba from "../Imagenes/Barba.jpeg";

export const Otrosservicios = () => {
    return (
        <>
        <section>
                <div>
                    <h1>Otros servicios</h1>
                </div>
                <p></p>
                <div className="row gx-4 gx-lg-5">
                    <div className="col-md-4 mb-5">
                        <div className="card h-100">
                            <div className="card-body">
                                <img alt="" src={Barba} width="300" />
                            </div>
                            <div className="card-footer"><button type="button" className="btn btn-dark">Barba</button></div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-5">
                        <div className="card h-100">
                            <div className="card-body">
                                <img alt="" src={Cejas} width="300" />
                            </div>
                            <div className="card-footer"><button type="button" className="btn btn-dark">Cejas</button></div>
                        </div>
                    </div>
                </div>
            </section>   
        </>
    )
}
