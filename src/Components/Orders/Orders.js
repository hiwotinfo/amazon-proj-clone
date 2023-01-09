import React, { useEffect, useState } from 'react'
import { db } from '../firebase/firebase';
import Order from '../Order/Order';
import '../Orders/Orders.css'
import { useStateValue } from '../StateProvider/StateProvider';


function Orders() {
const [{baskt, user}, dispatch] = useStateValue();

    const[orders, setOrders] = useState([]);

    useEffect(() =>{
        if (user){
            db.collection('users')
            .doc(user?.uid)
            .collection('orders')
            .orderBy('created', 'desc')//dessending//
            .onSnapshot((snapshot) =>// from a db photo
                setOrders(
                snapshot.docs.map((doc) =>({
                    id: doc.id,
                    data: doc.data(),
                
                }))
                )
            );
        } else 
        {
            setOrders([]);
        }
        
    }, [user]);
  return (
    <div className='orders'>
    <h1>Orders Page</h1>
    <div className='orders__orser'>
     {orders?.map((order) => (
        <Order order={order} />
    ))}
    </div>
    </div>
  )
}

export default Orders