import { Button } from 'antd';
import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';
import { useDispatch, useSelector } from 'react-redux';
import { notificatio } from '../redux/Action';
import { Spin } from 'antd';
import Header from '../component/Header';
import Cookies from 'js-cookie';

const CardPage = () => {
  const [availableCartProducts, setAvailableCartProducts] = useState(false);
  const [deletePro, setDeletePro] = useState(false);
  const [cartProducts, setCartProducts] = useState([]);
  const [orders, setOrders] = useState([]);
  const [itemTotal, setItemTotal] = useState(0);
  const navigate = useNavigate();
  const [loader, setLoader] = useState(false);

  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.todos);
  const [cart, setCart] = useState([])


  const cardProduct = () => {
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    setCartProducts(cartItems.map(item => ({ ...item, quantity: 1 })));
    setAvailableCartProducts(cartItems.length > 0);
    // console.log("cartItems", cartItems)
    setLoader(true)
  };

  const handlePlus = (productId) => {
    const updatedCart = cartProducts.map(item => {
      if (item.id === productId) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
    setCartProducts(updatedCart);
  };

  const handleMinus = (productId) => {
    const updatedCart = cartProducts.map(item => {
      if (item.id === productId && item.quantity > 1) {
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    });
    setCartProducts(updatedCart);
  };

  const handleDelete = (productId) => {
    const updatedCart = cartProducts.filter(item => item.id !== productId);
    setCartProducts(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    setDeletePro(true)

  };

  const subTotal = () => {
    const total = cartProducts.reduce((old, curr) => old + curr.price * curr.quantity, 0);
    setItemTotal(total);
  };

  const checkOut = (productId) => {
    // console.log('checkOut', productId)
    //  navigate(`/orders?id=${productId}`)

    // Get user details from localStorage
    const userdetails = localStorage.getItem('UserData');
    const userdata = userdetails ? JSON.parse(userdetails) : null;
    const validData = userdata ? userdata.map(user => user.Email) : [];

    // Get user details from cookie
    const userDetailsCookie = Cookies.get('userDetails');
    const cookiedata = userDetailsCookie ? JSON.parse(userDetailsCookie) : null;
    const matchemailName = cookiedata?.Email;



    navigate(`/orders`)
    const oldorder = JSON.parse(localStorage.getItem('orders')) || [];

    const orederDetail = { data: productId, id: uuidv4(), matchemailName }
    const updateorder = [...oldorder, orederDetail];
    localStorage.setItem('orders', JSON.stringify(updateorder));
    setOrders(updateorder);
    localStorage.removeItem('cart');
    dispatch(notificatio(cart));
    setLoader(true)




    // Check if both localStorage and cookie have data
    // if (validData.length > 0 && cookiedata) {
    //   // Find matching user based on email and password
    //   const matchValue = validData.find(userData =>
    //     userData.email === cookiedata.Email && userData.password === cookiedata.password
    //   );

    //   if (matchValue) {
    //     console.log('User from localStorage and cookie matched:', matchValue);
    //   } else {
    //     console.log('User from localStorage and cookie did not match.');
    //   }
    // } else {
    //   console.log('User data not found in localStorage or cookie.');
    // }


  }

  useEffect(() => {
    cardProduct();
  }, []);

  useEffect(() => {
    subTotal();
  }, [cartProducts]);

  // useEffect(() => {
  //   dispatch(notificatio(cart));
  // }, [cart])

  return (
    <div>
      {availableCartProducts ? (
        <div className='LandingPage OrderPage'>
          <Header />
          <div className='container'>
            {loader ? <div className='AllProduct'>
              {cartProducts.map((product) => (
                <div className='productDetails' key={product.id}>
                  <div className='product'>
                    <div className='proImg'>
                      <span className='thamImg'><img src={product.thumbnail} alt="" /></span>
                    </div>
                    <div className="proContent">
                      <h4>{product.title}</h4>
                      <h4>Price: <span className='price'>{product.price}</span></h4>
                    </div>
                  </div>
                  <div className='formGroup d_flex_center gap_20'>
                    <Button type="primary" onClick={() => handleMinus(product.id)}> - </Button>
                    <h4>{product.quantity}</h4>
                    <Button type="primary" onClick={() => handlePlus(product.id)}> + </Button>
                    <Button type="primary" onClick={() => handleDelete(product.id)} danger> Delete</Button>
                  </div>
                </div>
              ))}
            </div>
              :
              <div className='loder'>
                <Spin />
              </div>
            }
            <hr />
            <h2 className='subtotle'>Sub Total <span>{itemTotal}</span></h2>
            {!deletePro && <Button type="primary" onClick={() => checkOut(cartProducts)}> Check-Out </Button>}
          </div>
        </div>
      ) : (
        <div>
          <h2 className='d_flex_center'>Cart Is Empty</h2>
        </div>
      )}
    </div>
  );
};

export default CardPage;
