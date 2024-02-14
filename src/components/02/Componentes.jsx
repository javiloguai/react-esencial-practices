import React, {  useCallback,useState } from 'react';
import '../../App.css'
import ComponenteA from './ComponenteA'
import ComponenteB from './ComponenteB'


function Componentes() {

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
    <>

      <div className='box'>
        <ComponenteA 
        emoji={miEmoji}
        titulo={mensaje}
        />
        <ComponenteB 
        textoBtn ={miBoton}
        onClick={handleButtonClick}
          />&nbsp;
           <ComponenteB
          textoBtn="Callback"
          onClick={callback}
        />
      </div>



    </>



          



  )
}

export default Componentes