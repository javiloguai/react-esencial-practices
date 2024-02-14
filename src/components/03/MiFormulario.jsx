import '../../App.css'
import React, { useState } from 'react'

const MiFormulario = () => {

  const [formData, setFormData] = useState({
    username: 'default',
    email: 'ejemplo@ejemplo.com',
    password: 'default',
  })

  const [formErrors, setFormErrors] = useState({
    username: '',
    email: '',
    password: '',
  });


  const procesarCambio = (evento) => {
    const { name, value } = evento.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }))

    setFormErrors((prevFormErrors) => ({
      ...prevFormErrors,
      [name]: '',
    }));

  }

  const procesarSubmit = (evento) => {
    evento.preventDefault();
    console.log(formData);

    const newFormErrors = {};

    if(formData.username.trim() === ''){
      newFormErrors.username = 'El usuario es requerido.';
    }

    if (formData.email.trim() === '') {
      newFormErrors.email = 'El email es requerido.';
    }
    
    if (formData.password.trim() === '') {
      newFormErrors.password = 'La contraseña es requerida.';
    }

    if (Object.keys(newFormErrors).length > 0) {
      setFormErrors(newFormErrors);
    } else {
      console.log('Formulario válido. Datos:', formData);
    }
  };


  return (
    <div className='container'>
      <form autoComplete="off" onSubmit={procesarSubmit} >
        <div>
          <label className='form-label' htmlFor="username" >Usuario:</label>
          <input className='form-control'
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={procesarCambio}
          />

        {formErrors.username && <span className="error">{formErrors.username}</span>}
        
        </div>
        <div>
          <label className='form-label' htmlFor="email">Email:</label>
          <input className='form-control'
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={procesarCambio}
          />
          {formErrors.email && <span className="error">{formErrors.email}</span>}
        </div>
        <div>
          <label className='form-label' htmlFor="password" >Contraseña:</label>
          <input className='form-control'
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={procesarCambio}
          />
         {formErrors.password && <span className="error">{formErrors.password}</span>}
        </div>
        <button className='btn btn-primary' type="submit">Enviar</button>
      </form>
    </div>
  );
};



export default MiFormulario;



