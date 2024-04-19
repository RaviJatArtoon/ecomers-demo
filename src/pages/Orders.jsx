import React, { useEffect, useState } from 'react';
import { useNavigate, useParams, } from 'react-router-dom';

const Orders = () => {
    const [orderList, setOrderList] = useState([]);
    // const { id } = useParams();
    // console.log(id,'fffffffffffffff')
    const navigate = useNavigate();

    const ordermenu = () => {
        const orderShow = JSON.parse(localStorage.getItem('orders')) || [];
        setOrderList(orderShow);
    };

    const orderDetails = (productId) => {
        console.log(productId.id,'111111111111111')
        navigate(`/order/orders/${productId.id}`)
        // navigate(`/orders`)
        // console.log('navigation')
    }

    useEffect(() => {
        ordermenu();
    }, []);

    return (
        <div className='ordersPage'>
           <div className='allOrder'>
                {orderList.map((product, index) => (
                    <div key={index} className='orderCard' onClick={() => orderDetails(product)}>
                        <h4>Id : <span>{product.id}</span></h4>
                    </div>
                ))}
            </div>
            {/* {id && <div className='orderdetails'> 
               <div className=''>
                <h4>Show data</h4>
               </div>
            </div>
            } */}
        </div>
    );
};

export default Orders;
