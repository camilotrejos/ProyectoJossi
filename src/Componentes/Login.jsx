import React from 'react'

export const Login = () => {
    return (
        <>
            <div className="d-flex justify-content-center">
                <h1>Inicia sesión</h1>
            </div>
            <p></p>
            <form>
                <div className="d-grid gap-2 col-6 mx-auto">
                    <input type="email" className="form-control" placeholder="Email" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <p></p>
                <div className="d-grid gap-2 col-6 mx-auto">
                    <input type="password" className="form-control" placeholder="Contraseña" id="exampleInputPassword1" />
                </div>
                <p></p>
                <center><button type="submit" className="btn btn-light">Ingresar</button></center>
            </form>
        </>
    )
}
