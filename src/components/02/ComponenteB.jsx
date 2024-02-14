import '../../App.css'
import React from 'react';

const ComponenteB = ({ textoBtn, onClick }) => {
  
    return (
        <button className='btn btn-primary' onClick={()=>{onClick("👍")}}>{textoBtn}</button>
    );
}

export default ComponenteB;