import React from 'react'
import { Button, Checkbox, Form, Input, Dropdown, Space, Typography} from 'antd';
import Cookies from 'js-cookie';
import { useNavigate } from "react-router-dom";
import { toast } from 'sonner';
import { DownOutlined } from '@ant-design/icons';

const items = [
  {
    key: 'Admin',
    label: 'Admin',
  },
  {
    key: 'Users',
    label: 'Users',
  },
]

const Login = () => {
  const navigate = useNavigate();
  const onFinish = async (values) => {
    // console.log('Success:', values);
    const username = 'kminchelle'
    const password = '0lelplR'
    if (values.username === username && values.password === password) {
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
        toast.success('Event has been created')
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    } else {
      console.log('user not found')
      toast.error('Event has not been created')

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

          <Dropdown
            menu={{
              items,
              selectable: true,
              defaultSelectedKeys: ['3'],
            }}
          >
            <Typography.Link>
              <Space>
                Selectable
                <DownOutlined />
              </Space>
            </Typography.Link>
          </Dropdown>

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
