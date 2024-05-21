import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Admin = () => {
    const [phone, setPhone] = useState([]);
    const [password, setPassword] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/admin');
                if (response.data && response.data.usersphone,response.data.userspassword) {
                    setPhone(response.data.usersphone);
                    setPassword(response.data.userspassword);
                } else {
                    console.error('Некорректные данные от сервера');
                }
            } catch (error) {
                console.error('Error fetching Admins:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className='App_Admin'>
            <div className='Admin_info'>
                <ul style={{ listStyleType: 'none', padding: 0 }}>
                    {phone.map((phone, index) => (
                        <li key={index}>{phone}</li>
                    ))}
                </ul>
            </div>
            <div className='Admin_info'>
                <ul style={{ listStyleType: 'none', padding: 0 }}>
                    {password.map((password, index) => (
                        <li key={index}>{password}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Admin;
