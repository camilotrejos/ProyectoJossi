import Avatarusuario from "../Imagenes/Avatarusuario.png";

export const Perfilusuario = () => {

    return (
        <>
            <div className="d-flex justify-content-center">
              <h1>Perfil de Usuario</h1>        
            </div>  
            <p/>
            <div>
            <img alt="" src={Avatarusuario} width="150" />
            </div>
            <p/>
            <div className="d-flex justify-content-left">
                <h4>Silfredo Godoy Chavez</h4>     
            </div>
              <div className="d-flex justify-content-left">
                <h4>silfredogch@gmail.com</h4>
              </div>     
              <div className="d-flex justify-content-left">
                <h4>3156828676</h4>
              </div>     
            <p/>


            <div className="d-flex justify-content-center">
                <button type="button" className="btn btn-light">Reservar+</button>
            </div>


            <div className="d-flex justify-content-left">
                <h2>Mis servicios</h2>
            </div>     
              <p/>

            <div className="d-flex justify-content-center">
            <table className="table table-dark table-striped">
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">Servicio</th>
                    <th scope="col">Fecha</th>
                    <th scope="col">Empleado</th>
                    <th scope="col">Comentario</th>
                    <th scope="col">Calificación</th>
                    <th scope="col">Estado</th>
                    <th scope="col">Acción</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <th scope="row">1</th>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    
                    </tr>
                    <tr>
                    <th scope="row">2</th>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    </tr>
                    <tr>
                    <th scope="row">3</th>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    </tr>
                </tbody>
                </table>

            </div>
            <p/><p/><p/>
        </>
    )
}