import React from 'react'
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom'
import SignUpForm from '../Form/SignUpForm'
import { auth, createUserWithEmailAndPassword } from '../Confiq/Confiq'
import { addDoc, collection, db } from '../Confiq/Confiq';

export default function SignUp() {
    const navigate = useNavigate()

    const SUpFunction = (data) => {
        createUserWithEmailAndPassword(auth, data.email, data.password)
            .then(async (userCredential) => {
                const user = userCredential.user;
                console.log(user);

                Swal.fire({
                    title: "Good job!",
                    text: "Signed up successfully",
                    icon: "success"
                });

                try {
                    const docRef = await addDoc(collection(db, "users"), {
                        UserName: data.username,
                        Email: data.email,
                        PassWord: data.password,
                        Time: new Date().toLocaleString(),

                    });
                    console.log("Document written with ID: ", docRef.id);

                } catch (e) {
                    console.error("Error adding document: ", e);
                }
                navigate("/login")
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

            <SignUpForm SupFunc={SUpFunction} />

        </div>
    )
}
