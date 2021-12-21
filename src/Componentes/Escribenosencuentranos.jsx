import Mapa from "../Imagenes/Mapa.jpg";

export const Escribenosencuentranos = () => {
    return (
        <>
            <section className="my-4">
                <div className="container">
                    <div className="row">
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
