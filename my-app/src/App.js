import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Enquiry from './Pages/Enquiry';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import ForgotPassword from './Pages/ForgotPassword';
import Terms from './Pages/Terms';
import Packages from './Pages/Packages';
import ProtectedRoute from './Components/ProtectedRoute';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/terms" element={<Terms />} />

        {/* Protected Routes */}
        <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>} />
        <Route path="/about" element={<ProtectedRoute><About /></ProtectedRoute>} />
        <Route path="/packages" element={<ProtectedRoute><Packages /></ProtectedRoute>} />
        <Route path="/enquiry" element={<ProtectedRoute><Enquiry /></ProtectedRoute>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
