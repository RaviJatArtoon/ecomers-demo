import React, { useEffect, useState } from 'react';
import { useNavigate, useParams, } from 'react-router-dom';
import Header from '../component/Header';
import Cookies from 'js-cookie';

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
        navigate(`/order/orders/${productId.id}`)
        // navigate(`/orders`)
        // console.log('navigation')
    }

    const userDetailsCookie = Cookies.get('userDetails');
    const cookiedata = userDetailsCookie ? JSON.parse(userDetailsCookie) : null;
    const matchemailName = cookiedata?.Email;
    // console.log(matchemailName, 'matchemailName')

    const productEmail = orderList.map(email => email.matchemailName);
    // console.log(productEmail, 'mtchProductEmail')

    const filterOrderList = orderList.filter(email => email?.matchemailName === matchemailName);
    console.log(filterOrderList,'filterOrderList');

    useEffect(() => {
        ordermenu();
    }, []);

    return (
        <div className='ordersPage'>
            <Header />
            {filterOrderList.length > 0 ? <div className='allOrder'>
                {filterOrderList.map((product, index) => (
                    <div key={index} className='orderCard' onClick={() => orderDetails(product)}>
                        <h4>Id : <span>{product.id}</span></h4>
                    </div>
                ))}
            </div> :

                <div className='noOrder'>
                    <h2>Empty Order</h2>
                </div>

            }
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
