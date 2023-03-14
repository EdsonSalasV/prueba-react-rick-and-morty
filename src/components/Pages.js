import React from 'react'


const Pages = (props) => {
    
    const { anterior, siguiente, prev, next } = props

    const handleAnt = ()=>{
        anterior(); 
    }

    const handleSig = ()=>{
        siguiente();
    }

  return (
    <nav className='container'>
        <ul className='pagination justify-content-center mt-4 gap-5'>
            {
                prev != null ? 
                <li className='page-item'>
                    <button className='page-link' onClick={handleAnt}>
                        Anterior
                    </button>
                </li> : ""
            }
            


            {
                next != null ? 
                <li className='page-item'>
                    <button className='page-link' onClick={handleSig}>
                        Siguiente
                    </button>
                </li> : ""
            }
        </ul>
    </nav>
  )
}

export default Pages
