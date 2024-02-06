import React from 'react'
import Swal from 'sweetalert2';
import { getAuth, signOut } from '../Confiq/Confiq';
import { useNavigate } from 'react-router-dom';

export default function Profile() {
  const navigate = useNavigate()
  function logbtn() {

    const auth = getAuth();
    signOut(auth).then(() => {
      Swal.fire({
        title: "Logout successfully",
        icon: "success"
      });
      navigate('/')
    }).catch((error) => {
      console.log(error);
    });
  }

  return (
    <div style={{ background: "white", width: "55%", margin: "auto", marginTop: "10vh", padding: "5px", borderRadius: "10px", boxShadow: "0px 0px 10px black" }}>
      <h1 style={{ fontWeight: "800" }}>WelCome</h1>
      <button onClick={logbtn} style={{ background: "#009578", color: "white", border: "none", width: "50%", height: "30px", borderRadius: "5px", fontWeight: "bold", marginBottom: "20px", cursor: "pointer" }}>LogOut</button>
    </div>
  )
}
