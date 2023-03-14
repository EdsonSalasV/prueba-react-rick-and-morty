import { isDisabled } from '@testing-library/user-event/dist/utils';
import React from 'react'


const Pages = ({pageNumber, setpageNumber, anterior, siguiente}) => {



    const handleAnt = ()=>{
        if(pageNumber === 1 ){
            handleAnt = 'disabled' ; 
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
                <button className='page-link' onClick={handleAnt}>
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
