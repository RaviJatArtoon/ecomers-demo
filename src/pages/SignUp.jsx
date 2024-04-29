  import React, { useEffect, useState } from 'react'
  import { Button, Form, Input, Select } from 'antd';
  import { Option } from 'antd/es/mentions';
  import { useNavigate } from 'react-router-dom';
  import { v4 as uuidv4 } from 'uuid';

  export default function SignUp() {
    const navigate = useNavigate();
    const [form] = Form.useForm();

    const userId =  {id: uuidv4()}
    //  console.log(userId,'userId')


    const onFinish = async (values) => {
      form.resetFields();

      let oldUserData = JSON.parse(localStorage.getItem("UserData")) || [];
      let combinedUserData = [...oldUserData, values, userId ];
      localStorage.setItem("UserData", JSON.stringify(combinedUserData));
      navigate('/login')
      

      // let oldrole = JSON.parse(localStorage.getItem("rolebas")) || [];
      // let combinedRols = [...oldrole, values];
      // localStorage.setItem("rolebas", JSON.stringify(combinedRols));      

      // localStorage.setItem('rolebas', JSON.stringify(values))

    }




    // Custom validator function to check if the passwords match
    const validateConfirmPassword = ({ getFieldValue }) => ({
      validator(_, value) {
        if (!value || getFieldValue('password') === value) {
          return Promise.resolve();
        }
        return Promise.reject(new Error('The two passwords that you entered do not match!'));
      },
    });

    return (
      <div className='signUpPage loginPage'>
        <div className="container">
          <h2 className='text_center'>Sign Up</h2>
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
            autoComplete="off"
            form={form}
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
              <Input />
            </Form.Item>

            <Form.Item
              label="Email"
              name="Email"
              rules={[
                {
                  type: 'email',
                  required: true,
                  message: 'Enter a valid email address!',
                },
              ]}
            >
              <Input />
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
              label="Confirm Password"
              name="confirmPassword"
              dependencies={['password']} // Add dependencies to trigger validation when password changes
              rules={[
                {
                  required: true,
                  message: 'Please confirm your password!',
                },
                validateConfirmPassword, // Add custom validator
              ]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item
              name="roleOfType"
              label="RoleBase"
              rules={[
                {
                  required: true,
                  message: 'Please select a role!',
                },
              ]}
            >
              <Select
                placeholder="Select a option and change input text above"
                allowClear
              >
                <Option value="Admin">Admin</Option>
                <Option value="Users">Users</Option>
              </Select>
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
