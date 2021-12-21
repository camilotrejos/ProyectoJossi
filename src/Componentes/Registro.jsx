import {useRef, useState} from 'react';


export const Registro = () => {

    const nombres_usuarioref = useRef();
    const apellidos_usuarioref = useRef();
    const email_usuarioref = useRef();
    const celular_usuarioref = useRef();
    const password_usuarioref = useRef();

    const [alerta, setAlerta] = useState(false);


    const addUser = () =>{

        const nombres_usuario = nombres_usuarioref.current.value;
        const apellidos_usuario = apellidos_usuarioref.current.value;
        const email_usuario = email_usuarioref.current.value;
        const celular_usuario = celular_usuarioref.current.value;
        const password_usuario = password_usuarioref.current.value;

        fetch("http://localhost:8080/api/users/guardar",{
            method: 'POST',
            body: JSON.stringify({
                nombres_usuario,
                apellidos_usuario,
                email_usuario,
                celular_usuario,
                password_usuario}),
                
            headers:{
                'Content-Type': 'application/json'
            }
        })
            .then(res=>res.json())
            .then(data=>console.log(data))
            .catch(err=>console.log(err));

        setAlerta(true);
        setTimeout(() => setAlerta(false), 3000)

        nombres_usuarioref.current.value = "";
        apellidos_usuarioref.current.value = "";
        email_usuarioref.current.value = "";
        celular_usuarioref.current.value = "";
        password_usuarioref.current.value = "";

    }
    
    return (
        <>
            {alerta && <div className="alert alert-primary" role="alert">
                "Usuario {nombres_usuarioref.current.value} creado con éxito"
            </div>}
            <div className="d-flex justify-content-center">
                <h1>Registrate</h1>
            </div> 
                <section className="my-4">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4">
                                <div className="mb-3">
                                    <label className="form-label">Nombres</label>
                                    <input type="text" className="form-control" ref={nombres_usuarioref}
                                        placeholder="Ingresa tu nombre" />
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="mb-3">
                                    <label className="form-label">Apellidos</label>
                                    <input type="text" className="form-control" ref={apellidos_usuarioref}
                                        placeholder="Ingresa tu apellido" />
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="mb-3">
                                    <label className="form-label">Email</label>
                                    <input type="email" className="form-control" ref={email_usuarioref}
                                        placeholder="Ingresa tu email" />
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="mb-3">
                                    <label className="form-label">Numero de Celular</label>
                                    <input type="number" className="form-control" ref={celular_usuarioref}
                                        placeholder="Ingresa tu numero de celular" />
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="mb-3">
                                    <label className="form-label">Crear contrasena</label>
                                    <input type="password" className="form-control" ref={password_usuarioref}
                                        placeholder="Ingresa tu contrasena" />
                                </div>
                            </div>
                        </div>
                        <div className="mt-4">
                            <button type="button" onClick={addUser} className="btn btn-light">Registrarse</button>
                        </div>
                    </div>
                </section>
        </>
    )
}
