import imagen from "../Imagenes/Logo.jpg";
import React from 'react'
import { Link } from "react-router-dom";

export const Header = () => {
    return (
        <>
            <section class="my-4">
                <nav class="navbar navbar-expand-lg navbar-light bg-white rounded-3">
                    <div class="container px-5">
                        <img class="" src={imagen} width="100" />
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav me-auto mb-2 mb-lg-0 mx-auto">
                                <li class="nav-item">
                                    <Link to="/" className="nav-link">Home</Link>
                                </li>
                                <li class="nav-item">
                                    <Link to="/servicios" className="nav-link">Servicios</Link>
                                </li>
                                <li class="nav-item">
                                    <Link to="/agenda" className="nav-link">Agenda</Link>
                                </li>
                                <li class="nav-item">
                                    <Link to="/login" className="nav-link">Login</Link>
                                </li>
                                <li class="nav-item">
                                    <Link to="/registro" className="nav-link">Registro</Link>
                                </li>
                            </ul>
                            <form class="d-flex m-0">
                                <input class="form-control me-2" type="search" placeholder="Buscar" aria-label="Search" />
                                <button type="button" class="btn btn-dark">Buscar</button>                
                            </form>
                        </div>
                    </div>
                </nav>
            </section>
        </>
    )
}
