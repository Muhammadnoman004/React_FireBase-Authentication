import React from 'react';
import './Form.css';
import { Button, Checkbox, Form, Input } from 'antd';
import { Link } from 'react-router-dom';

const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
};
const App = ({ SupFunc }) => (
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
            remember: false,
        }}
        onFinish={SupFunc}
        onFinishFailed={onFinishFailed}
        autoComplete="off"

        className='main'>
        <h1 id='head'>Sign Up</h1>

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
            name="email"
            rules={[
                {
                    required: true,
                    message: 'Please input your email!',
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
            wrapperCol={{
                offset: 8,
                span: 16,
            }}
        >
            <Button id='button' htmlType="submit">
                SignUp
            </Button>
        </Form.Item>
        <p id='para'>Already have an account ? <Link id='link' to={'/login'}>Login</Link></p>
    </Form>
);
export default App;