import React from 'react'
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

                try {
                    const docRef = await addDoc(collection(db, "users"), {
                        UserName: data.username,
                        Email: data.email,
                        PassWord: data.password,

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
            });


    }

    return (
        <div>
            <h1>Sign Up</h1>
            <SignUpForm SupFunc={SUpFunction} />

        </div>
    )
}
