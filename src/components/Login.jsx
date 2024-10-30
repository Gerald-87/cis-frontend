import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
    const navigate = useNavigate();

    // Function to handle form submission and navigate to Dashboard
    const handleLogin = (event) => {
        event.preventDefault();
        // Add login validation logic here if needed
        navigate('/dashboard'); // Navigate to Dashboard on successful login
    };

    return (
        <div className="body">
            <div className="login-container">
                <div className="login-card">
                    <div className="logo-section">
                        <div className="logo-icon">
                            <i className="fas fa-shield-alt"></i>
                        </div>
                        <h1 className="title">CIS</h1>
                        <p className="subtitle">Secure Access Portal</p>
                    </div>

                    <form onSubmit={handleLogin}>
                        <div className="form-group">
                            <label className="form-label">Badge Number / Email</label>
                            <div className="input-group">
                                <i className="fas fa-user input-icon"></i>
                                <input
                                    type="text"
                                    className="form-input"
                                    placeholder="Enter your badge number or email"
                                    required
                                />
                            </div>
                        </div>

                        <div className="form-group">
                            <label className="form-label">Password</label>
                            <div className="input-group">
                                <i className="fas fa-lock input-icon"></i>
                                <input
                                    type="password"
                                    className="form-input"
                                    placeholder="Enter your password"
                                    required
                                />
                            </div>
                            <div className="error-message">Invalid credentials. Please try again.</div>
                        </div>

                        <div className="remember-section">
                            <label className="checkbox-label">
                                <input type="checkbox" />
                                <span>Remember me</span>
                            </label>
                            <button type="button" className="forgot-password" onClick={() => alert('Forgot password clicked')}>
                                Forgot password?
                            </button>
                        </div>

                        <button type="submit" className="btn btn-primary">Sign In</button>

                        <div className="divider">
                            <span>or</span>
                        </div>

                        <button type="button" className="btn btn-outline">
                            <i className="fas fa-fingerprint fingerprint-icon"></i>
                            Sign in with Internet Identity
                        </button>

                        <div className="form-footer">
                            <p>Technical issues? 
                                <button type="button" onClick={() => alert('Contact support clicked')}>
                                    Contact Support
                                </button>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
