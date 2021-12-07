import Logoinvert from "../Imagenes/Logoinvert.png";

export const Footer = () => {
    return (
        <>
            <footer class="bd-footer py-2 mt-4 bg-dark">
                <div class="container py-2">
                    <ul class="nav justify-content-center pb-2 mb-4 border-bottom">
                    </ul>
                    <div class="row justify-content-between">
                        <div class="col-lg-4 mb-3">
                            <a class="d-inline-flex align-items-center mb-2 link-dark text-decoration-none" href="/"
                                aria-label="Bootstrap">
                                <img class="" src={Logoinvert} width="100" />
                            </a>
                            <ul class="list-unstyled small text-muted">
                                <li class="mb-2">Jossi BarberShop S.A.S., es una empresa dedicada a prestar servicios
                                estéticos, principalmente en cabello, barba y cejas. Cuenta con
                                cinco sedes en Medellín y el Valle de Aburrá.
                                </li>
                            </ul>
                        </div>
                        <div class="col-lg-3 mb-3">
                            <h5>Contactenos</h5>
                            <ul class="list-unstyled">
                                <li class="mb-2">Calle 45 # 56 - 54</li>
                                <li class="mb-2">Tel: (060) 456 67 45</li>
                                <li><a href="#" class="link-primary">Términos y condiciones</a></li>
                                <li><a href="#" class="link-primary">Politicas de privacidad</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}