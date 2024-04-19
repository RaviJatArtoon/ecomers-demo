import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AddToCart, Delete, Editpro, notificatio, setProducts } from '../redux/Action';
import { useNavigate } from "react-router-dom";
import { Spin } from 'antd';
import Header from '../component/Header';

const LandingPage = () => {
  const [loader, setLoader] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { CartCount, products } = useSelector((state) => state.todos);
  // const [Products, setProductsAPI] = useState([]);
  const [cart, setCart] = useState([]);
  const [addCartProducts, setAddCartProducts] = useState([]);

  let API = 'https://dummyjson.com/products';

  const fatchApiData = async () => {
    try {
      const res = await fetch(API);
      const data = await res.json();
      dispatch(setProducts(data?.products));
      setAddCartProducts(new Array(data?.products.length));
      setLoader(true)
    } catch (error) {
      console.error(error)
    }
  };

  useEffect(() => {
    fatchApiData();
  }, []);

  const handleCard = (product) => {
    navigate(`/products/details/${product.id}`);
  };

  const handleEdit = (productId) => {
    navigate(`/products/product?id=${productId}`);
  };

  const handleDelete = (productId) => {
    console.log(productId, 'rrrrrrrrrrrrrrrrrrrrr');
    fetch(`https://dummyjson.com/products/${productId}`, {
      method: 'DELETE',
    })
      .then(res => res.json())
      .then(console.log);

    dispatch(Delete(productId));
    fatchApiData();
  };

  const handleAddCart = (product, index) => {
    const existingCart = JSON.parse(localStorage.getItem('cart')) || [];
    const updatedCart = [...existingCart, product];
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    setCart(updatedCart);


    // Update the addCartProducts array to mark this product as added to cart
    const updatedAddCartProducts = [...addCartProducts];
    updatedAddCartProducts[index] = true;
    setAddCartProducts(updatedAddCartProducts);
  };




  const handleGoCart = () => {
    navigate('/cart');
  };

  useEffect(() => {
    dispatch(notificatio(cart));
  }, [cart]);
  // console.log("products", products)
  return (
    <>
      <div className='LandingPage'>
        <Header/>
          <div className='container'>

            {loader ? <div className='AllProduct'>
              {
                products?.map((product, index) => (
                  <div className='productDetails' key={index}>
                    <div className='product' onClick={() => handleCard(product)}>
                      <div className='proImg'>
                        <span className='thamImg'><img src={product.thumbnail} alt="" /></span>
                        <div className='d_flex_center gap_20'>
                          {product.images.map((images, imgIndex) => (
                            <span key={imgIndex} className='childImag '> <img src={images} alt="" /></span>
                          ))}
                        </div>
                      </div>

                      <div className="proContent">
                        <h4>{product.title}</h4>
                        <h4>{product.description}</h4>
                        <h4>rating:   {product.rating}</h4>
                        <h4>Percentage: {product.discountPercentage}</h4>
                        <h4>brand: {product.brand}</h4>
                        <h4>price: {product.price}</h4>
                        <h4>Stock: {product.stock}</h4>
                        <h4>category: {product.category}</h4>
                      </div>
                    </div>

                    <div className='formGroup d_flex_center gap_20'>
                      {!addCartProducts[index] && <button className='btn delete' onClick={() => handleAddCart(product, index)}>Add Cart</button>}
                      {addCartProducts[index] && <button className='btn delete' onClick={() => handleGoCart(product)}>Go to Cart</button>}
                    </div>
                    <div className='formGroup d_flex_center gap_20'>
                      <button className='btn Edit' onClick={() => handleEdit(product.id)}>Edit</button>
                      <button className='btn delete' onClick={() => handleDelete(product.id)}>Delete</button>
                    </div>
                  </div>
                ))
              }
            </div>
              :
              <div className='loder'>
                <Spin />
              </div>
            }
          </div>
          {/* : <h2>no item found</h2>} */}
      </div >
    </>
  );
};

export default LandingPage;
