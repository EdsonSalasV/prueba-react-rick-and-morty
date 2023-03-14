import React, { useState } from 'react'


const Pages = ({pageNumber, anterior, siguiente}) => {

const [botonActivo, setBotonActivo]=useState(false)

    const handleAnt = ()=>{ 
        if(pageNumber === 1){
            setBotonActivo(false);
        }else{
            setBotonActivo(true);
        }       
        anterior(); 
    }

    const handleSig = ()=>{        
        siguiente();
    }

    /* if(pageNumber === 1) return; 
        let prev = () => {
            setPageNumber ((x) => x-1)
        };
    
        let next = () => {
            setPageNumber((x)=> x+1)
        }; */

  return (
    <nav>
        <ul className='pagination justify-content-center mt-4'>
            
            <li className='page-item'>
                <button className='page-link' disabled={!botonActivo} onClick={handleAnt}>
                    Anterior
                </button>
            </li>


            <li className='page-item'>
                <button className='page-link' onClick={handleSig}>
                    Siguiente
                </button>
            </li>
        </ul>
    </nav>
  )
}

export default Pages
