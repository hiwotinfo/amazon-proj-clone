import React from 'react';
import CheckoutProduct from '../CheckoutProduct/CheckoutProduct';
import { useStateValue } from '../StateProvider/StateProvider';
import SubTotal from '../SubTotal/SubTotal';
import './Checkout.css';
import Img from '../Checkout/imges/checkout_img.jpg'



function Checkout() {
  const [{basket}, dispatch] = useStateValue();
  return (
    <div className='checkout'>
    <div className='checkout__left'>
      <img className='checkout__ad' src={Img} alt=''/>
 
    <h3>
      Hello
    </h3>
    <h2 className='checkout__title'>your shoppin Basket</h2>
{basket.map((item) =>(
  <CheckoutProduct
    id={item.id}
    title= {item.title}
    image={item.image}
    price={item.price}
    rating={item.rating}
    />
))}
    
    </div>
    <div className='checkout__right'>
<SubTotal />
    </div>
    </div>
  )
}

export default Checkout