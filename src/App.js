import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux'; // Import useSelector
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
  const isLoggedIn = useSelector((state) => state.auth.user !== null);
  const userType = useSelector((state) => state.auth.user?.userType);

  return (
    <div className="App">
      <Router>
        {isLoggedIn && (
          <Navbar bg="primary" variant="dark">
            <Container>
              <Navbar.Brand href="/">Job website</Navbar.Brand>
              <Nav className="me-auto">
                {userType === 'admin' && <Nav.Link href="/admin">Admin</Nav.Link>}
                {userType === 'employee' && <Nav.Link href="/home">Home</Nav.Link>}
              </Nav>
            </Container>
          </Navbar>
        )}
        <Routes>
          {/* Redirect to login page if not logged in */}
          <Route
            path="/"
            element={isLoggedIn ? <Navigate to={userType === 'admin' ? '/admin' : '/home'} replace /> : <Login />}
          />
          <Route path="/admin" element={isLoggedIn && userType === 'admin' ? <Admin /> : <Navigate to="/" replace />} />
          <Route path="/home" element={isLoggedIn && userType === 'employee' ? <Home /> : <Navigate to="/" replace />} />
          <Route path="/about" element={isLoggedIn ? <About /> : <Navigate to="/" replace />} />
          <Route path="/contact" element={isLoggedIn ? <Contact /> : <Navigate to="/" replace />} />
          <Route path="/jobs" element={isLoggedIn ? <Jobs /> : <Navigate to="/" replace />} />
          <Route path="/companies" element={isLoggedIn ? <CompanyShowcase /> : <Navigate to="/" replace />} />
        </Routes>
        {isLoggedIn && <hr />}
        {isLoggedIn && <Footer />}
      </Router>
    </div>
  );
}

export default App;
