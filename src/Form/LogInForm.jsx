import React from 'react';
import './Form.css'
import { Button, Checkbox, Form, Input } from 'antd';
import { Link } from 'react-router-dom';

const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
};
const App = ({ logFun }) => (
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
        onFinish={logFun}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        className='main'>
        <h1 id='head'>Login</h1>
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
                Login
            </Button>
        </Form.Item>
        <p id='para'>Don't have an account ? <Link id='link' to={'/'}>Signup</Link></p>
    </Form>
);
export default App;