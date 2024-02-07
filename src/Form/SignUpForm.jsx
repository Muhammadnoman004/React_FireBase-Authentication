import React from 'react';
import Swal from 'sweetalert2';
import './Form.css';
import { Button, Checkbox, Form, Input } from 'antd';
import { Link } from 'react-router-dom';
import { auth, GoogleAuthProvider, signInWithPopup } from '../Confiq/Confiq'
import { addDoc, collection, db } from '../Confiq/Confiq';


const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
};

function googlebtn() {

    const provider = new GoogleAuthProvider();

    signInWithPopup(auth, provider)
        .then(async (result) => {

            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;

            const user = result.user;
            Swal.fire({
                title: "Good job!",
                text: "Signed in successfully",
                icon: "success"
            });

            try {
                const docRef = await addDoc(collection(db, "users"), {
                    Name: user.displayName,
                    Email: user.email,
                    Time: new Date().toLocaleString()
                });
                console.log("Document written with ID: ", docRef.id);
            } catch (e) {
                console.error("Error adding document: ", e);
            }

        }).catch((error) => {

            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorMessage)
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: errorCode,
            });

            const email = error.customData.email;

            const credential = GoogleAuthProvider.credentialFromError(error);

        });

}

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
            <Button id="Google" onClick={googlebtn}>Sign in with Google</Button>
        </Form.Item>
        <p id='para'>Already have an account ? <Link id='link' to={'/login'}>Login</Link></p>
    </Form>
);
export default App;