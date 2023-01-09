import React from 'react'
import '../CheckoutProduct/CheckoutProduct.css'
import { useStateValue } from '../StateProvider/StateProvider'

const CheckoutProduct = ({id, title, image, price, rating, hidenButton}) => {
  const [{basket}, dispatch] = useStateValue();
    const RemoveFromBasket = () =>{
dispatch({
    type:'REMOVE_FROM_BASKET',
    id: id,
});
  };
    return (
    <div className='chekoutProduct'>
        <img className='checkoutProduct__image' src={image}/>
   <div className='checkoutProduct__info'>
    <p className='checkoutProduct__title'>
        {title}
    </p>
    <p className="checkoutProduct__price">
        <small>$</small>
        <strong>{price}</strong>
    </p>
    <div className='checkoutProduct__rating'rom Bsket>
    {Array(rating)
            .fill()
                .map(() =>(
                    <p>⭐</p>  
        ))}
    </div>
    {!hidenButton && (//this hidenbuttun is to hide RemoveFormatBasket from after order products
    <button onClick={RemoveFromBasket} className="chekoutProduct__remove">Remove from Basket</button>
    )} {''}
   </div>
    </div>
  )
}

export default CheckoutProduct