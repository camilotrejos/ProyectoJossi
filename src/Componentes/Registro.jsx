
export const Registro = () => {
    return (
        <>
            <div className="d-flex justify-content-center">
                <h1>Registrate</h1>
            </div>
            <section className="my-4">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="mb-3">
                                <label for="nombresRegistros" className="form-label">Nombres</label>
                                <input type="text" className="form-control" id="nombresRegistros"
                                    placeholder="Ingresa tu nombre" />
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="mb-3">
                                <label for="apellidosRegistros" className="form-label">Apellidos</label>
                                <input type="text" className="form-control" id="apellidosRegistros"
                                    placeholder="Ingresa tu apellido" />
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="mb-3">
                                <label for="emailRegistros" className="form-label">Email</label>
                                <input type="email" className="form-control" id="emailRegistros"
                                    placeholder="Ingresa tu email" />
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="mb-3">
                                <label for="numberRegistros" className="form-label">Numero de Celular</label>
                                <input type="number" className="form-control" id="numberRegistros"
                                    placeholder="Ingresa tu numero de celular" />
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="mb-3">
                                <label for="contrasenaRegistros" className="form-label">Crear contrasena</label>
                                <input type="password" className="form-control" id="contrasenaRegistros"
                                    placeholder="Ingresa tu contrasena" />
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="mb-3">
                                <label for="contrasenabRegistros" className="form-label">Validar contrasena</label>
                                <input type="password" className="form-control" id="contrasenabRegistros"
                                    placeholder="Valida tu contrasena" />
                            </div>
                        </div>
                    </div>
                    <div className="mt-4">
                        <button type="button" className="btn btn-light">Registrarse</button>
                    </div>
                </div>
            </section>
        </>
    )
}
