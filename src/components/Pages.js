import React from 'react'


const Pages = ({ anterior, siguiente }) => {
    

    const handleAnt = ()=>{
        anterior(); 
    }

    const handleSig = ()=>{
        siguiente();
    }

  return (
    <nav className='container'>
        <ul className='pagination justify-content-center mt-4 gap-5'>
            
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
