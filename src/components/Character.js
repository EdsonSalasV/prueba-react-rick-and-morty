import React, {useState} from 'react'

const Character = ({ character, search}) => {
    let results = []
    if (!search) {
        results = character
    } else {
        results = character.filter((item) => item.name.toLowerCase().includes(search.toLowerCase()) ||
            item.status.toLowerCase().includes(search.toLowerCase()))/* || 
            info.filter((info)=> info.count.toLowerCase().includes(search.toLowerCase()))
    } */
    }
    const [orden, setOrden] = useState ('')

    const menor = (data) =>{
        results = data.sort((a, b)=> a.name.localeCompare(b.name))
    }
    const mayor = (data) =>{
        results = data.sort((a, b)=> b.name.localeCompare(a.name))
    }
    const alive = (data) =>{
        results = data.sort((a, b)=> a.status.localeCompare(b.status))
    }
    const dead = (data) =>{
        results = data.sort((a, b)=> b.status.localeCompare(a.status))
    }


    orden == 'menor' && menor(results)
    orden == 'mayor' && mayor(results)
    orden == 'alive' && alive(results)
    orden == 'dead' && dead(results)



    return (

        <div className='row'>

            <select className='form-select mb-3' onChange={e => setOrden(e.target.value)}>

                <option value='' disabled  >ordenar por</option>
                <option value='menor'>Nombre A - Z</option>
                <option value='mayor'>Nombre Z - A</option>
                <option value='alive'>Vivo</option>
                <option value='dead'>Muerto o Desconocido</option>

            </select>
            {
                results.length > 0 ? (results.map((item, id) => (
                    <div key={id} className='col'>
                        <div className='card mb-3'>
                            <img src={item.image} alt='personaje' />
                            <div className='cardbody'>
                                <h5 className='card-title'>{item.name}</h5>
                                <p>Estado: {item.status}</p>
                            </div>
                        </div>
                    </div>
                ))) : (<p>No hay resultados</p>)
            }
        </div>
    )
}

export default Character
