import Cabello from "../Imagenes/Cabello.jpeg";

export const Descripcionservicio = () => {
    return (
        <>
            <h1><center>Nuestros servicios</center></h1>
            <p></p>
            <section className="my-4">
                <div className="container">
                    <div className="row">
                        <div className="col-md-5">
                            <p></p>
                            <img alt="" src={Cabello} width="400" />
                        </div>
                        <div className="col">
                            <p></p>
                            <h2>Corte de cabello</h2>
                            <div align="justify"><p>En Jossi BarberShop sabemos que cada persona tiene estilos diferentes, para ello
                                contamos con especialistas en corte de cabello, quienes te ofrecen la seguridad y el confort necesario
                                para que te veas y te sientas bien.<br></br>
                                Reserva un corte de cabello y disfruta de todo lo que Jossi Barbershop tiene para ti.
                            </p></div>
                            <p></p>
                            <p></p>
                            <form>
                                <p className="clasificacion"><h5>Calificación:
                                    <label for="radio1">★</label>
                                    <label for="radio1">★</label>
                                    <label for="radio1">★</label>
                                    <label for="radio1">★</label>
                                    <label for="radio1">★</label>
                                </h5>
                                </p>
                            </form>
                            <div className="col-auto">
                                <button type="button" className="btn btn-light mb-3">Reservar</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
