import React from 'react'

export const Registrohome = () => {
    return (
        <>
            <div className="d-flex justify-content-center">
                <h2>Registrate y has parte de la familia Jossi</h2>
            </div>
            <p></p>
            <form>
                <div className="d-grid gap-2 col-6 mx-auto">
                    <button type="button" className="btn btn-light btn-block">Registrarse</button>
                </div>
                <p></p>
                <div className="d-grid gap-2 col-6 mx-auto">
                    <button type="button" className="btn btn-secondary btn-block">Iniciar sesión</button>
                </div>
            </form>
        </>
    )
}
