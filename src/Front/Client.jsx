import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Client = () => {
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [responsePhone, setResponsePhone] = useState('');
    const [responsePassword, setResponsePassword] = useState('');
    const [responseAdmin, setResponseAdmin] = useState('');
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleSubmit = async () => {
        try {
            const response = await axios.post('http://localhost:5000/api/login', { phone, password });
            const responseData = response.data;

            setResponsePhone(responseData.responsePhone);
            setResponsePassword(responseData.responsePassword);
            setResponseAdmin(responseData.responseAdmin);
            
            if (responseData.responsePhone && responseData.responsePassword === true) {
                navigate('/movie')
            } else if (responseData.responseAdmin === true) {
                navigate('/admin')
            } else {
                setError('Неправильно введены поля');
            }
        } catch (error) {
            console.error('There was an error!', error);
            setError('There was an error fetching data');
        }
    };

    return (
        <div className="App">
            <div className='form_login'>
                <div className='input_login'>
                    <input
                        autocomplete="off"
                        className='phone'
                        placeholder="Phone"
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                    />
                    <input
                        autocomplete="off"
                        className='password'
                        placeholder="Password"
                        type="tel"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button className='handleSubmit' onClick={handleSubmit}>send</button>
                <p className='error'>{error}</p>
            </div>

        </div>
    );
};

export default Client;