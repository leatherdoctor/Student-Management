import './App.css'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import DashboardPage from './components/DashboardPage';
import StudentForm from './components/StudentForm';
import { useAuth } from './context/AuthContext';

function PrivateRoute({ children }) {
  const { isAuthenticated } = useAuth();
  console.log('Auth state:', isAuthenticated); // Debug log
  return isAuthenticated ? children : <Navigate to="/" />;
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <DashboardPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/student/add"
          element={
            <PrivateRoute>
              <StudentForm />
            </PrivateRoute>
          }
        />
        <Route
          path="/student/edit/:id"
          element={
            <PrivateRoute>
              <StudentForm />
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
