import '../../App.css'
import React, { useState } from 'react';


const ContadorClase = () => {

    const [conteo, setConteo] = useState(0);

    const incrementar = () => {
        setConteo((prevConteo) => prevConteo + 1);
    };

    const reducir = () => {
        setConteo((prevConteo) => prevConteo - 1);
    };


    return (
        <div className='box'>
            <h1>Contador de clicks</h1>
            <p>conteo:{conteo}</p>
            <button className='btn btn-primary' onClick={incrementar}> Sumar Click</button>
            &nbsp;
            <button className='btn btn-primary' onClick={reducir}> Restar Click </button>
        </div>
    );

}

export default ContadorClase;
