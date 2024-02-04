import React from 'react'
import { useNavigate } from 'react-router-dom'
import LogInForm from '../Form/LogInForm'
import { auth, signInWithEmailAndPassword } from '../Confiq/Confiq'
export default function LogIn() {
    const navigate = useNavigate()

    const LogFunc = (data) => {
        signInWithEmailAndPassword(auth, data.email, data.password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user);
                navigate("/profile")
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorMessage);
            });
    }

    return (
        <div>
            <LogInForm logFun={LogFunc} />
        </div>
    )
}
