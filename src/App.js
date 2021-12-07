import './App.css';
import { Header } from './Componentes/Header';
import { Footer } from './Componentes/Footer';
import { Agenda } from './Componentes/Agenda';
import { Home } from './Componentes/Home';
import { Servicios } from './Componentes/Servicios';
import { Login } from './Componentes/Login';
import { Registro } from './Componentes/Registro';
import { Crearempleado } from './Componentes/Crearempleado';
import { Crearservicio } from './Componentes/Crearservicio';
import { Perfilusuario } from './Componentes/Perfilusuario';
import { Dashboard } from './Componentes/Dashboard';

import React from 'react';
import { Routes, Route, Link, BrowserRouter } from "react-router-dom";


function App() {
  return (
    <>
      <section class="bg-dark text-light">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <Header />
            </div>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/agenda" element={<Agenda />} />
              <Route path="/servicios" element={<Servicios />} />
              <Route path="/login" element={<Login />} />
              <Route path='/registro' element={<Registro />} />
              <Route path="/crearempleado" element={<Crearempleado />}></Route>
              <Route path="/crearservicio" element={<Crearservicio />}></Route>
              <Route path='/perfilusuario' element={<Perfilusuario />} />
              <Route path='/dashboard' element={<Dashboard />} />
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
