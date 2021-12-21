import { useRef, useState, useEffect } from "react";


export function Crearempleado() {

    const [dataServicios, setdataServicios] = useState([]);
    
    const [alerta, setAlerta] = useState(false);

    const nombreRef = useRef();
    const apellidoRef = useRef();
    const id_servicioRef = useRef();
    
    useEffect(()=>{
        fetch('http://localhost:8080/api/servicios/')
            .then(res => res.json())
            .then(data=>{
                console.log(data)
                setdataServicios(data);
            })
        
    },[]);


    
    function Crear() {
        const nombres_barbero = nombreRef.current.value;
        const apellidos_barbero = apellidoRef.current.value;
        const id_servicio_barbero = id_servicioRef.current.value;
    
        fetch("http://localhost:8080/api/barberos/",{
            method: 'POST',
            body: JSON.stringify({
                nombres_barbero,
                apellidos_barbero,
                id_servicio_barbero
            }),
            headers:{
                'Content-Type': 'application/json'
            }
        })
            .then(res=>res.json())
            .then(data=>console.log(data))
            .catch(err=>console.log(err));


        setAlerta(true);
        setTimeout(() => setAlerta(false), 3000)

        nombreRef.current.value = ""
        apellidoRef.current.value =""
        id_servicioRef.current.value = ""
    }

    return (
        <>
            {alerta && <div className="alert alert-primary" role="alert">
                "Barbero {nombreRef.current.value} creado con éxito"
            </div>}
            <h1><center>Crear Barbero</center></h1>
            <p></p>
            <form>
                <center>
                    <div className="d-grid gap-2 col-6 mx-auto">
                        <input type="text" className="form-control" placeholder="Nombre empleado" ref={nombreRef} />
                    </div>
                    <p></p>

                    <div className="d-grid gap-2 col-6 mx-auto">
                        <input type="text" className="form-control" placeholder="Apellido empleado" ref={apellidoRef} />
                    </div>
                    <p></p>

                    <div className="d-grid gap-2 col-6 mx-auto">

                    <select className="form-select form-select-lg mb-3" aria-label=".form-select-lg example" defaultValue={'DEFAULT'} ref={id_servicioRef}>
                        <option value="DEFAULT" disabled>Seleccione un servicio</option>
                        {dataServicios.map((serv)=>{
                            return(
                                <option key={serv._id} value={serv._id}>{serv.nombre_servicio}</option>
                            );

                        })}
                   
                    </select>
                        
                </div>
                    <p></p>
                    <div className="col-auto">
                        <button type="button" className="btn btn-light mb-3" onClick={Crear}>Crear</button>
                    </div>
                </center>
            </form>

        </>
    )
}