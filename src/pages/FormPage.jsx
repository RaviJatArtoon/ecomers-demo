import React, { useEffect, useState } from 'react'
import { Button, Form, Input, Select } from "antd";
import TextArea from 'antd/es/input/TextArea';
import { useNavigate, useParams, useLocation, useSearchParams } from 'react-router-dom';
import axios from 'axios';
import { Spin } from 'antd';
import Header from '../component/Header';

const FormPage = () => {
  const { Option } = Select;
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const [loader, setLoader] = useState(false);

  const [searchParams,] = useSearchParams();

  const [editdata, setEditdata] = useState()
  // console.log(editdata,'editdataeditdataeditdataeditdataeditdata')
  // let history = useLocation();
  // const searchParams = new URLSearchParams(history.search);
  const id = searchParams.get('id');
  

  const initialValues = { title: `${editdata?.title}`, description: `${editdata?.description}`, price: `${editdata?.price}`, discountPercentage: `${editdata?.discountPercentage}`, rating: `${editdata?.rating}`, stock: `${editdata?.stock}`, brand: `${editdata?.brand}`, category: `${editdata?.category}` }
  // console.log(editdata?.title, 'initialValuesinitialValues')


  const onFinish = (values) => {
    if (values !== '' && !id) {
      let { title, description, price, discountPercentage, rating, stock, brand, category } = values
      form.resetFields();

      axios.post("https://dummyjson.com/products/add", {
        title, description, price, discountPercentage, rating, stock, brand, category
      })
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        })
      navigate('/products')
      
    } else {
      form.resetFields();
      EditUpdate(id, values)
      navigate('/products')
    }

  };

  const EditData = async (id) => {

    let EditProduct = (`https://dummyjson.com/products/${id}`)
    try {
      const res = await fetch(EditProduct);
      const SingleData = await res.json();
      setEditdata(SingleData)
      setLoader(true)
    } catch (error) {
      console.log('Error fetching data:', error)
    }
  }
  const EditUpdate = async (id, data) => {
    fetch(`https://dummyjson.com/products/${id}`, {
      method: 'PUT',
      body: JSON.stringify({
        ...data
      })
    })
      .then(res => res.json())
      .then(console.log);

  }

  useEffect(() => {
    if (id) {
      EditData(id);
    }
  }, [id])

  useEffect(() => {
    form.setFieldsValue({
      title: editdata?.title,
      description: editdata?.description,
      price: editdata?.price,
      discountPercentage: editdata?.discountPercentage,
      rating: editdata?.rating,
      stock: editdata?.stock,
      brand: editdata?.brand,
      category: editdata?.category
    });
     setLoader(true)

  }, [editdata])

  return (
    <div className='formPage'>
       <Header/>
      <div className='container'>
       {loader ? <div className='formArea'>
          <Form
            onFinish={onFinish}
            form={form}
            // onFinishFailed={onFinishFailed}
            initialValues={initialValues}
            // initialValues
            autoComplete="off"
          >

            <Form.Item
              label="title"
              name="title"
              defaultValue="mysite"
              rules={[
                {
                  required: true,
                  pattern: new RegExp("([a-zA-Z]{5,30}\\s*)+"),
                  message: "Please input your Product Name!",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Discripion"
              name="description"
              rules={[
                {
                  required: true,
                  message: "Please input your Discripion!",
                },
              ]}
            >
              <TextArea />
            </Form.Item>

            <Form.Item
              label="Price"
              name="price"
              rules={[
                {
                  required: true,
                  pattern: /^-?(0|[1-9][0-9]*)(\.[0-9]*)?$/,
                  message: "Please input your Price!",
                },
              ]}
            >
              <Input type="number" />
            </Form.Item>

            <Form.Item
              name="discountPercentage"
              label="discountPercentage"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Select
                placeholder="Select a option and change input text above"
                // onChange={onGenderChange}
                allowClear
              >
                <Option value="10%">10%</Option>
                <Option value="50%">50%</Option>
                <Option value="70%">70%</Option>
              </Select>
            </Form.Item>

            <Form.Item
              label="rating"
              name="rating"
              rules={[
                {
                  required: true,
                  pattern: /^-?(0|[1-9][0-9]*)(\.[0-9]*)?$/,
                  message: "Please input your rating!",
                },
              ]}
            >
              <Input type="number" />
            </Form.Item>

            <Form.Item
              label="stock"
              name="stock"
              rules={[
                {
                  required: true,
                  pattern: /^-?(0|[1-9][0-9]*)(\.[0-9]*)?$/,
                  message: "Please input your stock!",
                },
              ]}
            >
              <Input type="number" />
            </Form.Item>

            <Form.Item
              label="brand"
              name="brand"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Select
                placeholder="Select a option and change input text above"
                // onChange={onGenderChange}
                allowClear
              >
                <Option value="Apple">Apple</Option>
                <Option value="SamSung">SamSung</Option>
                <Option value="MacBook">MacBook</Option>
                <Option value="OPPO">OPPO</Option>
              </Select>
            </Form.Item>

            <Form.Item
              label="category"
              name="category"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Select
                placeholder="Select a option and change input text above"
                // onChange={onGenderChange}
                allowClear
              >
                <Option value="laptops">laptops</Option>
                <Option value="smartphones">smartphones</Option>
              </Select>
            </Form.Item>


            <Button type="primary" htmlType="submit" className="mt_10">
              {editdata ? "Save" : "Submit"}
            </Button>
          </Form>
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

export default FormPage
