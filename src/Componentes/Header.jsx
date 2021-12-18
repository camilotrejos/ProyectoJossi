import imagen from "../Imagenes/Logo.jpg";
import React from 'react'
import { Link } from "react-router-dom";

export const Header = () => {
    return (
        <>
            <section className="my-4">
                <nav className="navbar navbar-expand-lg navbar-light bg-white rounded-3">
                    <div className="container px-5">
                        <img alt="" src={imagen} width="100" />
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-auto">
                                <li className="nav-item">
                                    <Link to="/" className="nav-link">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/servicios" className="nav-link">Servicios</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/agenda" className="nav-link">Agenda</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/login" className="nav-link">Login</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/registro" className="nav-link">Registro</Link>
                                </li>
                            </ul>
                            <form className="d-flex m-0">
                                <input className="form-control me-2" type="search" placeholder="Buscar" aria-label="Search" />
                                <button type="button" className="btn btn-dark">Buscar</button>                
                            </form>
                        </div>
                    </div>
                </nav>
            </section>
        </>
    )
}
