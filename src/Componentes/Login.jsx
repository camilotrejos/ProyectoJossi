import React, { useRef, useState } from 'react'


export const Login = () => {

    const emailRef = useRef();
    const passwordRef = useRef();

    const [alerta, setAlerta] = useState(false);
    const [textAlert, settextAlert] = useState("")

    function InicioSesion(){
        const email_usuario = emailRef.current.value
        const password_usuario = passwordRef.current.value
        
        fetch("http://localhost:8080/api/users/login",{
            method: 'POST',
            body: JSON.stringify({
                email_usuario,
                password_usuario}),

            headers:{
                'Content-Type': 'application/json'
            }
        })
            .then(res=>res.json())
            .then(data=>{
                console.log(data);
                settextAlert(data.msg)
            })
            .catch(err=>console.log(err));


        setAlerta(true);
        setTimeout(() => setAlerta(false), 3000)

        emailRef.current.value = ""
        passwordRef.current.value =""
    }

    return (
        <>
            {alerta && <div className="alert alert-primary" role="alert">
                {textAlert}
            </div>}
            
            <div className="d-flex justify-content-center">
                <h1>Inicia sesión</h1>
            </div>
            <p></p>
            
            <div className="d-grid gap-2 col-6 mx-auto">
                <input type="email" className="form-control" placeholder="Email" ref={emailRef}/>
            </div>
            <p></p>
            <div className="d-grid gap-2 col-6 mx-auto">
                <input type="password" className="form-control" placeholder="Contraseña" ref={passwordRef}/>
            </div>
            <p></p>
            <center><button type="button" onClick={InicioSesion} className="btn btn-light">Ingresar</button></center>

        </>
    )
}
