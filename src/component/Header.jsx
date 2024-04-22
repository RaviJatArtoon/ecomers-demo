import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom'
import { notificatio, setProducts, setRecipes } from '../redux/Action';
import Cookies from 'js-cookie';


const Header = () => {
  const dispatch = useDispatch();
  const navigate =  useNavigate();
  const { CartCount } = useSelector((state) => state.todos);
  const [cart, setCart] = useState([])
  const [countCard, setCountCard] = useState(0)
  const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  const [serchtext, setSerchText] = useState()

  const Notification = () => {
    setCountCard(cartItems.length);
    dispatch(notificatio(cart));
  }
  useEffect(() => {
    dispatch(notificatio(cart));
  }, [countCard]);


  const serchHandle = (event) => {
    setSerchText(event.target.value)

  }



  let API = `https://dummyjson.com/products/search?q=${serchtext}`;
  let recipeserch = `https://dummyjson.com/recipes/search?q=${serchtext}`;

  const fatchsearchdata = async () => {
    try {
      const res = await fetch(API);
      const data = await res.json();
      dispatch(setProducts(data?.products));
    } catch (error) {
      console.error(error)
    }
  };
  const fatchsearchrecipe = async () => {
    try {
      const res = await fetch(recipeserch);
      const data = await res.json();  
      dispatch(setRecipes(data?.recipes));
    } catch (error) {
      console.error(error)
    }
  };
  
  const handlelogOut = (key) => {
    Cookies.remove('authset');
    navigate('/login');
  }

  useEffect(() => {
    fatchsearchdata()
    fatchsearchrecipe()
  }, [serchtext])


  return (
    <div className='header '>
      <div className='container'>
        <div className='navbar'>

          <ul>
            <li>
              <div className='form_group'>
                <input type="text" name='' className='form_control' onChange={serchHandle} />
              </div>
            </li>


            <li><Link to="/products"> All Products</Link> </li>
            <li><Link to="/recipes"> Recipes</Link> </li>
            <li>
              <Link to="/cart">
                <div className='notification'>
                  <span>Cart</span>
                  <span className='Count'>{cartItems?.length}</span>
                </div>
              </Link>
            </li>
            <li><Link to="/products/product" className='btn'>Add</Link> </li>
            <li><Link  className='btn' onClick={handlelogOut}>logOut</Link> </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Header
