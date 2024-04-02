import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Admin from './pages/Admin'; // Import the Admin component
import Home from './pages/Home';
import About from './pages/About';
import Login from './pages/Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Footer from './pages/Footer/Footer';
import Contact from './pages/Contact';
import Jobs from './pages/Jobs';
import CompanyShowcase from './pages/CompanyShowcase';

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false); // State to track login status
    const [userType, setUserType] = useState('');

    // Function to handle login
    const handleLogin = (userType) => {
        setIsLoggedIn(true);
        setUserType(userType);
    };

    // Function to handle logout
    const handleLogout = () => {
        setIsLoggedIn(false);
        setUserType('');
        localStorage.removeItem('userType'); // Clear userType from localStorage
    };

    return (
        <div className="App">
            <Router>
                {!isLoggedIn && <Login onLogin={handleLogin} />}
                {isLoggedIn && (
                    <>
                        <Navbar bg="primary" variant="dark">
                            <Container>
                                <Navbar.Brand href="/">Job website</Navbar.Brand>
                                <Nav className="me-auto">
                                    <Nav.Link href="/">Home</Nav.Link>
                                    <Nav.Link onClick={handleLogout}>Logout</Nav.Link>
                                    <Nav.Link href="/about">About</Nav.Link>
                                    <Nav.Link href="/contact">Contact</Nav.Link>
                                    <Nav.Link href="/jobs">Jobs</Nav.Link>
                                    <Nav.Link href="/companies">Company Showcase</Nav.Link>
                                </Nav>
                            </Container>
                        </Navbar>
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/about" element={<About />} />
                            <Route path="/contact" element={<Contact />} />
                            <Route path="/jobs" element={<Jobs />} />
                            <Route path="/companies" element={<CompanyShowcase />} />
                            {userType === 'admin' && (
                                <Route path="/admin" element={<Admin />} />
                            )}
                            <Route path="*" element={<Navigate to="/" />} />
                        </Routes>
                        <hr />
                        <Footer />
                    </>
                )}
            </Router>
        </div>
    );
}

export default App;
