import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
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
    const userType = localStorage.getItem('userType');

    return (
        <div className="App">
            <Router>
                <Navbar bg="primary" variant="dark">
                    <Container>
                        <Navbar.Brand href="/">Job website</Navbar.Brand>
                        <Nav className="me-auto">
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/login">Login</Nav.Link>
                            <Nav.Link href="/about">About</Nav.Link>
                            <Nav.Link href="/contact">Contact</Nav.Link>
                            <Nav.Link href="/jobs">Jobs</Nav.Link>
                            <Nav.Link href="/companies">Company Showcase</Nav.Link>
                        </Nav>
                    </Container>
                </Navbar>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/jobs" element={<Jobs />} />
                    <Route path="/companies" element={<CompanyShowcase />} />
                    {userType === 'admin' && <Route path="/admin" element={<Admin />} />} {/* Restrict access to Admin page */}
                    <Route path="*" element={<Navigate to="/" />} /> {/* Redirect to Home for any other route */}
                </Routes>
                <hr />
                <Footer />
            </Router>
        </div>
    );
}

export default App;
