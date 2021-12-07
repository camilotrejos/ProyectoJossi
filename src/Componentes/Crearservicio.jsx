import { useRef, useState } from "react";

export function Crearservicio() {
    const nom_servicio = useRef();
    const descrip_servicio = useRef();
    const cost_servicio = useRef();
    const dur_servicio = useRef();

    //creamos un array para guardar los datos
    let array = [];
    const [alerta, setAlerta] = useState(false);
    function Crear() {
        const nombre_servicio = nom_servicio.current.value;
        const descripcion_servicio = descrip_servicio.current.value;
        const costo_servicio = cost_servicio.current.value;
        const duracion_servicio = dur_servicio.current.value;

        const m = { nombre: nombre_servicio, descripcion: descripcion_servicio, costo: costo_servicio, duracion: duracion_servicio };

        array = JSON.parse(localStorage.getItem("array")) || [];
        console.log = (m);

        // añadimos al array m los datos
        array.push(m);
        // guardamos en el localStorage
        localStorage.setItem("array", JSON.stringify(array));

        nom_servicio.current.value = "";
        descrip_servicio.current.value = "";
        cost_servicio.current.value = "";
        dur_servicio.current.value = "";

        setAlerta(true);
        setTimeout(() => setAlerta(false), 3000)
    }

    return (
        <>
            {alerta && <div class="alert alert-primary" role="alert">
                "Servicio {nom_servicio.current.value} creado con éxito"
            </div>}
            <h1><center>Crear servicio</center></h1>
            <p></p>
            <form>
                <center>
                    <div class="d-grid gap-2 col-6 mx-auto">
                        <input type="text" className="form-control" placeholder="Nombre servicio" ref={nom_servicio} />
                    </div>
                    <p></p>
                    <div class="d-grid gap-2 col-6 mx-auto">
                        <input type="text" className="form-control" placeholder="urlimagen" src="https://www.google.com/url?sa=i&url=https%3A%2F%2Felpais.com%2Feconomia%2F2019%2F09%2F26%2Fnuevos_tiempos%2F1569487254_374693.html&psig=AOvVaw0QeJgYYoOAXFtBTmDW3EyS&ust=1638890167422000&source=images&cd=vfe&ved=0CAgQjRxqFwoTCLCujvC7z_QCFQAAAAAdAAAAABAD" />
                    </div>
                    <p></p>
                    <div class="d-grid gap-2 col-6 mx-auto">
                        <textarea class="form-control rounded-3" name="Descripción" id="descripcion" rows="8" placeholder="Descripción" ref={descrip_servicio}></textarea>
                    </div>
                    <p></p>
                    <div class="d-grid gap-2 col-6 mx-auto">
                        <input type="text" className="form-control" placeholder="Costo" ref={cost_servicio} />
                    </div>
                    <p></p>
                    <div class="d-grid gap-2 col-6 mx-auto">
                        <input type="text" className="form-control" placeholder="Duración" ref={dur_servicio} />
                    </div>
                    <p></p>
                    <div className="col-auto">
                        <button type="button" class="btn btn-light mb-3" onClick={Crear}>Crear</button>
                    </div>
                </center>
            </form>

        </>
    );
}