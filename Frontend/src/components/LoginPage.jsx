import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../services/api';
import { useAuth } from '../context/AuthContext';
import './styles.css';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleLogin = async (e) => {
    console.log('Login attempt...'); // Debug log
    e.preventDefault();
    setError('');
    try {
      const response = await loginUser({ username, password });
      if (response.token) {
        console.log('Login successful, token:', response.token); // Debug log
        login(response.token);
        console.log('Auth state updated, navigating...'); // Debug log
        navigate('/dashboard');
      } else {
        setError('Invalid response from server');
      }
    } catch (err) {
      setError(err.response?.data?.message || 'Invalid username or password');
      console.error('Login error:', err);
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={handleLogin}>
        <h2 className="login-title">Login</h2>
        {error && <div className="error-message">{error}</div>}
        <div className="form-group">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="form-input"
            required
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="form-input"
            required
          />
        </div>
        <button type="submit" className="login-btn">
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
