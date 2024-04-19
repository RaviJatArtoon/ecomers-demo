import React from 'react'
import { Button, Checkbox, Form, Input } from 'antd';
import Cookies from 'js-cookie';
import { useNavigate } from "react-router-dom";



const Login = () => {
  const navigate = useNavigate();
  const onFinish = async (values) => {
    // console.log('Success:', values);
    const username = 'kminchelle'
    if (values.username === username) {
      const creattoken = 'https://dummyjson.com/auth/login';
      const postData = { username: values.username, password: values.password, expiresInMins: 30, };
      try {
        const res = await fetch(creattoken, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(postData),
        });
        const tokendata = await res.json();
        const getingtoken = tokendata.token
        const settoken = Cookies.set('authset', getingtoken)
        navigate('/dashbord')

      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }else{
      console.log('user not found')
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div className='loginPage'>
      <div className='container'>
        <Form
          name="basic"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
          style={{
            maxWidth: 600,
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[
              {
                required: true,
                message: 'Please input your username!',
              },
            ]}
          >
            <Input value={''} />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: 'Please input your password!',
              },
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  )
}

export default Login
