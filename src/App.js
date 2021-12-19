import './App.css';
import { Header } from './Componentes/Header';
import { Footer } from './Componentes/Footer';
import { Agenda } from './Componentes/Agenda';
import { Home } from './Componentes/Home';
import { ServiciosTodos } from './Componentes/ServiciosTodos';
import { Login } from './Componentes/Login';
import { Registro } from './Componentes/Registro';
import { Crearempleado } from './Componentes/Crearempleado';
import { Crearservicio } from './Componentes/Crearservicio';
import { Perfilusuario } from './Componentes/Perfilusuario';
import { Dashboard } from './Componentes/Dashboard';
import { ServiciosDetalle } from './Componentes/ServiciosDetalle';

import React from 'react';
import { Routes, Route } from "react-router-dom";



function App() {
  return (
    <>
      <section className="bg-dark text-light">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <Header />
            </div>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/agenda" element={<Agenda />} />
              <Route path="/servicios" element={<ServiciosTodos />} />
              <Route path="/login" element={<Login />} />
              <Route path='/registro' element={<Registro />} />
              <Route path="/crearempleado" element={<Crearempleado />}></Route>
              <Route path="/crearservicio" element={<Crearservicio />}></Route>
              <Route path='/perfilusuario' element={<Perfilusuario />} />
              <Route path='/dashboard' element={<Dashboard />} />
              <Route path='/servicio/:id_servicio' element={<ServiciosDetalle name="1"/>} />
            </Routes>
            <div className="col-sm-12">
              <Footer />
            </div>
          </div>
        </div>
      </section>
    </>

  );
}

export default App;
