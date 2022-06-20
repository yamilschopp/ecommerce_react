import './Card.css';

function Card({product, price, img}) {
  return (
    <div className='card'>
       <img src={img} />
       <p>{product}</p>
       <h3>{price}</h3>
    </div>
  );
}

export default Card;