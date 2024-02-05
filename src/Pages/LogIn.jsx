import React from 'react'
import Swal from 'sweetalert2'
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

                Swal.fire({
                    title: "Good job!",
                    text: "Signed in successfully",
                    icon: "success"
                });
                navigate("/profile")
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorMessage);

                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: errorMessage,
                });
            });
    }

    return (
        <div>
            <LogInForm logFun={LogFunc} />
        </div>
    )
}
