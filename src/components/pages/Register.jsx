import React, { useState } from "react";
import Navbar from "../navbar/Navbar";
import Content from "../content/Content";
import Footer from "../footer/footer";
import Input from "../form/Input";
import { Link } from "react-router-dom";

const Register = () => {
    return (
        <>
            <Navbar>
                <h2>Registrasi & Aktivasi akun melalui email</h2>
                {/* Menggunakan Link untuk merouting ke halaman Login */}
                <Link to={'/'}><button>Login</button></Link>
            </Navbar>
            <Content>
                <div className="box">
                    <h2>Register</h2>
                    <p>Daftarkan akun anda menggunakan Gmail anda.</p>
                    <Input />
                </div>
            </Content>
            <Footer />
        </>
    )
}

export default Register;