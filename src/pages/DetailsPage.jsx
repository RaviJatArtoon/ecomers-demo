import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { Spin } from 'antd';

const DetailsPage = () => {

  let pathId = useParams();
  const [detailsProduct, setDetailsProduct] = useState({})
  const [loader, setLoader] = useState(false);

  let API = `https://dummyjson.com/products/${pathId.id}`;
  const fatchSingleData = async () => {
    try {
      const res = await fetch(API);
      const data = await res.json();
      setDetailsProduct(data);
      setLoader(true)
    } catch (error) {
      console.error(error)
    }
  };

  useEffect(() => {
    fatchSingleData();
  }, []);


  return (
    <div className='LandingPage'>
      <div className='AllProduct'>
        {loader ? <div className='productDetails'>
          <div className='product'>
            <div className='proImg'>
              <span className='thamImg'><img src={detailsProduct.thumbnail} alt="" /></span>
              <div className='d_flex_center gap_20'>
                {detailsProduct?.images?.map((images, imgIndex) => (
                  <span key={imgIndex} className='childImag '> <img src={images} alt="" /></span>
                ))}
              </div>
            </div>

            <div className="proContent">
              <h4>{detailsProduct.title}</h4>
              <h4>{detailsProduct.description}</h4>
              <h4>rating:   {detailsProduct.rating}</h4>
              <h4>Percentage: {detailsProduct.discountPercentage}</h4>
              <h4>brand: {detailsProduct.brand}</h4>
              <h4>price: {detailsProduct.price}</h4>
              <h4>Stock: {detailsProduct.stock}</h4>
              <h4>category: {detailsProduct.category}</h4>
            </div>
          </div>
        </div>
          :
          <div className='loder'>
            <Spin />
          </div>
        }
      </div>
    </div>
  )
}

export default DetailsPage
