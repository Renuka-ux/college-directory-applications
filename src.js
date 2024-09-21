import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import StudentDashboard from './pages/StudentDashboard';
// Import other pages

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/login" element={<LoginPage />} />
                <Route path="/student-dashboard" element={<StudentDashboard />} />
                {/* Define other routes */}
            </Routes>
        </Router>
    );
}

export default App;
