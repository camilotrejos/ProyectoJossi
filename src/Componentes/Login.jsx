import React from 'react'

export const Login = () => {
    return (
        <>
            <div class="d-flex justify-content-center">
                <h1>Inicia sesión</h1>
            </div>
            <p></p>
            <form>
                <div class="d-grid gap-2 col-6 mx-auto">
                    <input type="email" class="form-control" placeholder="Email" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <p></p>
                <div class="d-grid gap-2 col-6 mx-auto">
                    <input type="password" class="form-control" placeholder="Contraseña" id="exampleInputPassword1" />
                </div>
                <p></p>
                <center><button type="submit" class="btn btn-light">Ingresar</button></center>
            </form>
        </>
    )
}
