import { useState, useEffect } from "react";
import Swal from 'sweetalert2'

function Contador ({ stock }){
    const [num, setNum] = useState(0);
    
    useEffect(()=>{
        if(num == stock - 2){
            Swal.fire({
                title: 'Atención!',
                text: 'Quedan pocas unidades',
                icon: 'warning',
                timer: 2000
              })
        }
    },[num])


    const sumar = () => {
        if(num < stock){
            setNum(num + 1)
        } else{
            Swal.fire({
                title: 'Atención!',
                text: 'Ya ha llegado al stock disponible del producto',
                icon: 'warning',
                timer: 2000
              })
        }
        
    }

    const restar = () => {
        if(num>0){
            setNum(num - 1)
        }
    }
    
    const reiniciar = () => {
        setNum(0)
    }

    const confirmar = () => {
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: `Se agregó ${num} unidades al carrito`,
            showConfirmButton: false,
            timer: 1500
          })
    }
    
    return(
        <>
           <div>
             <p>{num}</p>
             <p> { stock> 1 ? `${stock} unidades disponibles`: `${stock} unidad disponible` } </p>
             <button onClick={sumar}>Agregar</button>
             <button onClick={restar}>sacar</button>
             <button onClick={reiniciar}>Reiniciar</button>
           </div>
           <div>
             <button onClick={confirmar}>{ num> 0 ? `Agregar al carrito`: `Elija su cantidad` } </button>
           </div>

        </>
    )
}

export default Contador;