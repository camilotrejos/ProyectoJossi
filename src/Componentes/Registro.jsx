
export const Registro = () => {
    return (
        <>
            <div class="d-flex justify-content-center">
                <h1>Registrate</h1>
            </div>
            <section class="my-4">
                <div class="container">
                    <div class="row">
                        <div class="col-md-4">
                            <div class="mb-3">
                                <label for="nombresRegistros" class="form-label">Nombres</label>
                                <input type="text" class="form-control" id="nombresRegistros"
                                    placeholder="Ingresa tu nombre" />
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="mb-3">
                                <label for="apellidosRegistros" class="form-label">Apellidos</label>
                                <input type="text" class="form-control" id="apellidosRegistros"
                                    placeholder="Ingresa tu apellido" />
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="mb-3">
                                <label for="emailRegistros" class="form-label">Email</label>
                                <input type="email" class="form-control" id="emailRegistros"
                                    placeholder="Ingresa tu email" />
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="mb-3">
                                <label for="numberRegistros" class="form-label">Numero de Celular</label>
                                <input type="number" class="form-control" id="numberRegistros"
                                    placeholder="Ingresa tu numero de celular" />
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="mb-3">
                                <label for="contrasenaRegistros" class="form-label">Crear contrasena</label>
                                <input type="password" class="form-control" id="contrasenaRegistros"
                                    placeholder="Ingresa tu contrasena" />
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="mb-3">
                                <label for="contrasenabRegistros" class="form-label">Validar contrasena</label>
                                <input type="password" class="form-control" id="contrasenabRegistros"
                                    placeholder="Valida tu contrasena" />
                            </div>
                        </div>
                    </div>
                    <div class="mt-4">
                        <button type="button" class="btn btn-light">Registrarse</button>
                    </div>
                </div>
            </section>
        </>
    )
}
