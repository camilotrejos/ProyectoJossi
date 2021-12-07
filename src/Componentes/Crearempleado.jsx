import { useRef, useState } from "react";
export function Crearempleado() {

    const nombre = useRef();
    const servicio = useRef();

    //creamos un array para guardar los datos
    let array = [];
    const [alerta, setAlerta] = useState(false);
    function Crear() {
        const nom = nombre.current.value;
        const serv = servicio.current.value;
        //console.log(nom + " " + " " + serv);


        //creamos un json
        const j = { nombre: nom, servicio: serv };

        //para obtener los valores del localstore
        array = JSON.parse(localStorage.getItem("array")) || [];
        console.log = (j);

        // añadimos al array j los datos
        array.push(j);
        // guardamos en el localStorage
        localStorage.setItem("array", JSON.stringify(array));

        //para que las cajas queden vacias
        nombre.current.value = "";
        servicio.current.value = "";

        //console.log(array);

        setAlerta(true);
        setTimeout(() => setAlerta(false), 3000)
    }

    return (
        <>
            {alerta && <div class="alert alert-primary" role="alert">
                "Empleado {nombre.current.value} creado con éxito"
            </div>}
            <h1><center>Crear empleado</center></h1>
            <p></p>
            <form>
                <center>
                    <div class="d-grid gap-2 col-6 mx-auto">
                        <input type="text" className="form-control" placeholder="Nombre empleado" ref={nombre} />
                    </div>
                    <p></p>
                    <div class="d-grid gap-2 col-6 mx-auto">
                        <input type="text" className="form-control" placeholder="Servicio que presta" ref={servicio} />
                    </div>
                    <p></p>
                    <div className="col-auto">
                        <button type="button" class="btn btn-light mb-3" onClick={Crear}>Crear</button>
                    </div>
                </center>
            </form>

        </>
    )
}