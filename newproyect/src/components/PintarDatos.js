import Swal from 'sweetalert2'
import { useEffect, useState } from "react"
import Personajes from './Personajes'


const PIntarDatos = ({nombrePersonaje}) => {

    const [personajes,setPersonajes]=useState([])

    useEffect(()=>{
        consumirApi(nombrePersonaje)
    },[nombrePersonaje])

    const consumirApi = async(nombre) => {
        try {
            const res = await fetch(`https://rickandmortyapi.com/api/character/?name=${nombre}&status=alive`)

            if(!res.ok){
                return  Swal.fire({
                    title: 'Error!',
                    text: 'Personaje no valido',
                    icon: 'error',
                  })
            }

            const datos = await res.json()
            console.log(datos.results)
            setPersonajes(datos.results)

        } catch (error) {
            console.log(error)
        }finally{

        }
    }

    return(
        <div className='row'>
            {
                personajes.map(item => (
                    <Personajes key={item.id} personaje={item} />
                ))
            }
        </div>
    )
}

export default PIntarDatos;