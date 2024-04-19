import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { Spin } from 'antd';

const Order = () => {
    const [blog, setBlog] = useState(null);
    const [loader, setLoader] = useState(false);

    const { id } = useParams();
    console.log(id, 'blogblogblogblogblogblogblogblog')

    const showblog = () => {
        const suborders = JSON.parse(localStorage.getItem('orders')) || [];
        const foundBlog = suborders.find((order) => order.id === id);
        // console.log(foundBlog.data, 'ffffffffffffffffffff')
        if (foundBlog) {
            setBlog(foundBlog);
        }
        setLoader(true)
    }

    // console.log(blog?.data, 'fffffffffffffffffffffff')

    useEffect(() => {
        showblog()
    }, [id]);

    return (
        <div className='orderPage'>
         {  loader ? <div className='allorderCard'>
                {blog?.data.map((data, index) => (
                    <div key={index} className='orderCard'>
                        <div className='proImg'>
                            <span className='thamImg'><img src={data.thumbnail} alt="" /></span>
                        </div>
                        <h4>quantity <span> {data.quantity}</span></h4>
                        <h4>{data.title}</h4>
                        <h4 className='describ'>{data.description}</h4>
                        <h4>{data.rating}</h4>
                        <h4>{data.discountPercentage}</h4>
                        <h4>{data.brand}</h4>
                        <h4>{data.price}</h4>
                        <h4>{data.stock}</h4>
                        <h4>{data.category}</h4>
                    </div>
                ))}
            </div>
            :
            <div className='loder'>
              <Spin />
            </div>}
        </div>
    )
}

export default Order
