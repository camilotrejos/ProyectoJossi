import Logoinvert from "../Imagenes/Logoinvert.png";

export const Footer = () => {
    return (
        <>
            <footer className="bd-footer py-2 mt-4 bg-dark">
                <div className="container py-2">
                    <ul className="nav justify-content-center pb-2 mb-4 border-bottom">
                    </ul>
                    <div className="row justify-content-between">
                        <div className="col-lg-4 mb-3">
                            <a className="d-inline-flex align-items-center mb-2 link-dark text-decoration-none" href="/"
                                aria-label="Bootstrap">
                                <img alt="" src={Logoinvert} width="100" />
                            </a>
                            <ul className="list-unstyled small text-muted">
                                <li className="mb-2">Jossi BarberShop S.A.S., es una empresa dedicada a prestar servicios
                                estéticos, principalmente en cabello, barba y cejas. Cuenta con
                                cinco sedes en Medellín y el Valle de Aburrá.
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-3 mb-3">
                            <h5>Contactenos</h5>
                            <ul className="list-unstyled">
                                <li className="mb-2">Calle 45 # 56 - 54</li>
                                <li className="mb-2">Tel: (060) 456 67 45</li>
                                <li><a href="##" className="link-light">Términos y condiciones</a></li>
                                <li><a href="##" className="link-light">Politicas de privacidad</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}