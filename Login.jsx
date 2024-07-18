import { Link } from "react-router-dom";
import { useState } from "react";
import '../App.css'
const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handSubmit = (e) => {
        e.preventDefault();
        if (username === "nassra" && password === '123') {
            console.log('success');
           
            window.location.href = '/dashboard';
        } else {
            console.error("error");
        }
    };

    return (
        <div className="wrapper">
            <div className="form-box Login">
                <form onSubmit={handSubmit}>
                    <h1>STUDENT LEAVE MANAGEMENT SYSTEM</h1>
                    <h2>Login_Page</h2>
                    <div className="input-box">
                        <input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            placeholder="Username"
                            required
                        />
                    </div>
                    <div className="input-box">
                        <input
                            type="password" 
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Password"
                            required
                        />
                    </div>
                    <button type="submit">Login</button>
                    <div className="register-link">
                        <p>Create Account. <Link to="/register">register</Link></p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
