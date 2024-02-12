import axios from "axios";
import React, { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import '../App.css'

const initialUsers = [
    { id: 1, email: 'user1@example.com', name: 'User 1', dob: '1990-01-01', status: 'Aktif' },
];  

const UserList = () => {
    const [users, setUsers] = useState(initialUsers);

    const activateUser = (id) => {
        const updatedUsers = users.map(user => {
            if (user.id === id) {
                return { ...user, status: 'Aktif' };
            }
            return user;
        });
        setUsers(updatedUsers);
    };

    const disableUser = (id) => {
        const updatedUsers = users.map(user => {
            if (user.id === id) {
                return { ...user, status: 'Non-Aktif' };
            }
            return user;
        });
        setUsers(updatedUsers);
    };

    return (
        <div className="user-list">
            <h2>List Aktivasi User</h2>
            <table>
                <thead>
                    <tr>
                        <th>Email</th>
                        <th>Fullname</th>
                        <th>DOB</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => (
                        <tr key={user.id}>
                            <td>{user.email}</td>
                            <td>{user.name}</td>
                            <td>{user.dob}</td>
                            <td>{user.status}</td>
                            <td>
                                {user.status === 'Non-Aktif' && (
                                    <button className="activate-btn" onClick={() => activateUser(user.id)}>Aktivasi</button>
                                )}
                                {user.status === 'Aktif' && (
                                    <button className="disable-btn" onClick={() => disableUser(user.id)}>Disable</button>
                                )}
                                <button className="edit-btn">Edit</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

const Home = () => {
    const [email, setEmail] = useState()
    const navigate = useNavigate();
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        function simulateNetworkRequest() {
            return new Promise((resolve) => setTimeout(resolve, 2000));
        }
        if (isLoading) {
            simulateNetworkRequest().then(() => {
                setLoading(false);
            });
        }
    }, [isLoading]);

    const handleClick = () => setLoading(true);

    const handleSubmit = (e) => {
        e.preventDefault();
        handleClick();
        console.log(isLoading)
        axios.post('http://localhost:3000/home', { email: 'capella@gmail.com' })
            .then(result => {
                console.log(result);
                alert("You Have been logout")
                navigate('/');
                localStorage.setItem('isLogout', false);
            })
            .catch(err => console.log(err));
    }

    return (
        <div>
            <UserList />
            <Button variant="primary" disabled={isLoading} onClick={handleSubmit}>
                Logout
            </Button>
        </div>
    );
}

export default Home;
