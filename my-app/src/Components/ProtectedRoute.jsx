import { Navigate } from 'react-router-dom';

// Protects routes — redirects to login if not logged in
function ProtectedRoute({ children }) {
    const session = JSON.parse(localStorage.getItem('session') || '{}');
    return session.isLoggedIn ? children : <Navigate to="/login" replace />;
}

export default ProtectedRoute;
