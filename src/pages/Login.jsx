import React, { useState } from 'react'
import { Button, Form, Input, Select } from 'antd';
import Cookies from 'js-cookie';
import { useNavigate } from "react-router-dom";
import { toast } from 'sonner';
import { DownOutlined } from '@ant-design/icons';
import { Option } from 'antd/es/mentions';

const Login = () => {
  const navigate = useNavigate();
  const [validUser, setValidUser] = useState({})

  const userdetails = localStorage.getItem('UserData')
  const userdata = userdetails ? JSON.parse(userdetails) : null;
  const uservalid = userdata ? userdata.map(user => ({ email: user.Email, password: user.password, roleOfType: user.roleOfType })) : null;
  // const validData = uservalid.map(user => user.email )
  // console.log(uservalid)


  const orderdetails = localStorage.getItem('orders')
  // console.log(orderdetails, 'orderdetails')


  const onFinish = async (values) => {
    console.log('Success:', values);

    // if (values.username === username && values.password === password) {
    const creattoken = 'https://dummyjson.com/auth/login';
    const postData = {

      username: 'kminchelle',
      password: '0lelplR',
      expiresInMins: 30, // optional, defaults to 60
    };
    // console.log(postData, 'postData')
    try {
      const res = await fetch(creattoken, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(postData),
      });
      const tokendata = await res.json();

      // let oldUserData = JSON.parse(localStorage.getItem("Users")) || [];
      // let combinedUserData =  values;
      // localStorage.setItem("Users", JSON.stringify(combinedUserData));


      const matchvlues = userdata.find(
        (UserData) =>
          UserData.Email === values.Email &&
          UserData.password === values.password
      );
      if (matchvlues) {
        console.log('value match')
        const getingtoken = tokendata.token
        Cookies.set('authset', getingtoken)
        // console.log(matchvlues, "--------------------")
        Cookies.set('userDetails', JSON.stringify(matchvlues));
        toast.success('Event has been created')
        navigate('/dashbord');

      } else {
        console.log('value not match')
        toast.error('Invalid email or password');
      }


      // const getingtoken = tokendata.token
      // const settoken = Cookies.set('authset', getingtoken)
      // navigate('/dashbord')
      // toast.success('Event has been created')

    } catch (error) {
      console.error('Error fetching data:', error);
      toast.error('Invalid email or password');
    }
    // localStorage.setItem('rolebas', JSON.stringify(values))
    // } else {
    //   console.log('user not found')
    //   toast.error('Event has not been created')

    // }

  };


  // const onFinishFailed = (errorInfo) => {
  //   console.log('Failed:', errorInfo);
  // };

  return (
    <div className='loginPage'>
      <div className='container'>
        <h2 className='text_center'>Login</h2>
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
          // onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Email"
            name="Email"
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

          {/* <Form.Item
              name="roleOfType"
              label="RoleBase"
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
              <Option value="Admin">Admin</Option>
              <Option value="Users">Users</Option>
            </Select>
          </Form.Item> */}

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
