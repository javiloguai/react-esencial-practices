import React, {  useCallback,useState, useEffect, createContext } from 'react';
import { BrowserRouter, Link, NavLink, Route, Routes, useNavigate } from 'react-router-dom'
import './App.css'
import CustomButton from './components/01/CustomButton'
import ContadorClase from './components/02/ContadorClase'
import Componentes from './components/02/Componentes'
import MiFormulario from './components/03/MiFormulario'
import Catalog from './components/04/Catalog';
import ListaProductos from './components/05/ListaProductos';
import ListaCarrito from './components/05/ListaCarrito';
import { DataProvider } from './components/05/DataContext';
import Catalogo from './components/06/Catalogo/Catalogo';
import Home from './components/Home'
import About from './components/About'
import Producto from './components/Producto';

function App() {

  const miEmoji = "🛫";
  const miBoton = "Buscar Destino";

  const [mensaje, setMensaje] =  useState("Viajes Aventura")
  

  const handleButtonClick = () => {
    alert('Botón Click');
    setMensaje("Buscando")
  };

  const callback = useCallback(

    (data) => {
      alert('Botón Click2');
      setMensaje(data)
    },[mensaje]   

  );

  return (

    <BrowserRouter>


      <nav className='navbar navbar-expand navbar-light bg-light'>
        <ul className='navbar-nav'>
          <li className="nav-item">
            <NavLink to='/' className='nav-link' > Home </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to='/about' className='nav-link'> About </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to='/miBoton' className='nav-link'> Mi Botón </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to='/contadorClase' className='nav-link'> Contador </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to='/components' className='nav-link'> Componentes </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to='/form' className='nav-link'> Mi Formulario </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to='/catalog' className='nav-link'> Catálogo </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to='/dataProvider' className='nav-link'> Context Data Provider </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to='/interface' className='nav-link'> Interfaz usuario </NavLink>
          </li>
        </ul>
      </nav>


      <div className='container'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/producto/:nombreParam' element={<Producto />} />
          <Route path='/miBoton' element={<CustomButton text='Mybutton' />} />
          <Route path='/contadorClase' element={<ContadorClase/>} />
          <Route path='/components' element={<Componentes/>} />
          <Route path='/form' element={<MiFormulario/>} />
          <Route path='/catalog' element={<Catalog/>} />
          <Route path='/dataProvider' element={
               <div className='box'>
                  <DataProvider>
                    <ListaProductos  />
                    <ListaCarrito />
                  </DataProvider>
                </div>          
          } />
          <Route path='/interface' element={<Catalogo/>} />


        </Routes>
      </div>







    </BrowserRouter>
  )
}

export default App