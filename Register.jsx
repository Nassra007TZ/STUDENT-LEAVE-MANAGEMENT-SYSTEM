import React, { useState } from "react";
import { Link } from "react-router-dom";
import '../App.css'
const Register = () => {
    const [username, setUsername] = useState('');
    const [registrationNo, setRegistrationNo] = useState('');
    const [password, setPassword] = useState('');
    const [registrationSuccess, setRegistrationSuccess] = useState(false);

    const handleRegister = (e) => {
        e.preventDefault();
        
        setRegistrationSuccess(true);
    };

    return (
        <div className="wrapper">
            <div className="form-box Login">
                <form onSubmit={handleRegister}>
                    <h1>REGISTRATION PAGE</h1>
                    <div className="input-box">
                        <input
                            type="text"
                            placeholder="Username"
                            required
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                    <div className="input-box">
                        <input
                            type="text"
                            placeholder="Registration No"
                            required
                            value={registrationNo}
                            onChange={(e) => setRegistrationNo(e.target.value)}
                        />
                    </div>
                    <div className="input-box">
                        <input
                            type="password"
                            placeholder="Password"
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <button type="submit">Register</button>
                    {registrationSuccess && (
                        <p style={{ color: 'green' }}>Registration successful!</p>
                    )}
                    <div className="register-link">
                        <p><Link to="/">GotoLogin_Page</Link></p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Register;
