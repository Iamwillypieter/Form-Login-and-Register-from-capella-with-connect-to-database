import axios from "axios";
import React from "react";
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3000/home', { email: 'capella@gmail.com' })
            .then(result => {
                console.log(result);
                navigate('/');
            })
            .catch(err => console.log(err));
    }

    return (
        <button onClick={handleSubmit}>Logout</button>
    );
}

export default Home;
