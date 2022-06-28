import './Cartwidget.css';
import imgCart from "../imagenes/carrito.png"

function Cartwidget() {
  return (
    <div className='cart'>
        <img src={imgCart} alt="Foto del carrito" />
        {/* <a className='carro' src="{imgCart}"> */}  
        {/* </a> */}
    </div>   
  );
}

export default Cartwidget;