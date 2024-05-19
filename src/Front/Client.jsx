import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Client = () => {
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [responseInfo, setResponseInfo] = useState('');
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleSubmit = async () => {
        try {
            const response = await axios.post('http://localhost:5000/api/login', { phone, password });
            const responseData = response.data;
            setResponseInfo(responseData.responseInfo);

            if (responseData.responseInfo === true) {
                navigate('/movie')
            } else {
                setError('Неправильно введен номер телефона');
            }
        } catch (error) {
            console.error('There was an error!', error);
            setError('There was an error fetching data');
        }
    };

    return (
        <div className="App">
            <div className='form_login'>
                <input
                    className='phone'
                    placeholder="Phone"
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                />
                <input
                    className='password'
                    placeholder="Password"
                    type="tel"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button className='handleSubmit' onClick={handleSubmit}>send</button>
                <p>{error}</p>
            </div>

        </div>
    );
};

export default Client;
