import React from 'react'
import { useNavigate } from 'react-router-dom'
import SignUpForm from '../Form/SignUpForm'
import { auth, createUserWithEmailAndPassword } from '../Confiq/Confiq'


export default function SignUp() {
    const navigate = useNavigate()

    const SUpFunction = (data) => {
        createUserWithEmailAndPassword(auth, data.email, data.password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user);
                navigate("/login")
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorMessage);
            });
    }

    return (
        <div>
            <h1>Sign Up</h1>
            <SignUpForm SupFunc={SUpFunction} />

        </div>
    )
}
