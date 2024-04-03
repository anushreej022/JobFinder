import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Admin from './pages/Admin';
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
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  return (
    <div className="App">
      <Router>
        {isLoggedIn && (
          <Navbar bg="primary" variant="dark">
            <Container>
              <Navbar.Brand href="/">Job website</Navbar.Brand>
              <Nav className="me-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/about">About</Nav.Link>
                <Nav.Link href="/contact">Contact</Nav.Link>
                <Nav.Link href="/jobs">Jobs</Nav.Link>
                <Nav.Link href="/companies">Company Showcase</Nav.Link>
                <Nav.Link href="/admin">Admin</Nav.Link>
              </Nav>
            </Container>
          </Navbar>
        )}
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/companies" element={<CompanyShowcase />} />
          <Route path="/admin" element={<Admin />} />
          {!isLoggedIn && <Route path="*" element={<Navigate to="/" />} />}
          <Route path="*" element={<Navigate to="/admin" />} />
        </Routes>
        {isLoggedIn && <hr />}
        {isLoggedIn && <Footer />}
      </Router>
    </div>
  );
}

export default App;
