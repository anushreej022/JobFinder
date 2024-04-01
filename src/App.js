import './App.css';
import axios from 'axios';
import Cookies from 'js-cookie'; // Import js-cookie for cookie management
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ReactLogo from './logo.svg';
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
import Logout from './pages/Logout'; // Import the Logout component

const LogoutButton = () => {
  const handleLogout = () => {
      axios.post('http://localhost:8080/user/logout')
          .then(response => {
              // Clear user token from cookies
              Cookies.remove('token'); // Remove the cookie named 'token'
              // Redirect or perform any other action after successful logout
              window.location.href = '/'; // Redirect to login page
          })
          .catch(error => {
              console.error('Logout error:', error);
              // Handle logout error, if needed
          });
  };

  return (
      <button onClick={handleLogout}>Logout</button>
  );
};

function App() {
  return (
    <div className="App">


      <Router>
        <Navbar bg="primary" variant="dark">
          <Container>
            <Navbar.Brand href="/"><img
              src={ReactLogo}
              width="30"
              height="30"
            />Job website</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/login">Login</Nav.Link>
              <Nav.Link href="/about">About</Nav.Link>
              <Nav.Link href="/contact">Contact</Nav.Link>
              <Nav.Link href="/jobs">Jobs</Nav.Link>
              <Nav.Link href="/companies">Company Showcase</Nav.Link>
              <LogoutButton />

            </Nav>
          </Container>
        </Navbar>

        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/contact' element={<Contact />}></Route>
          <Route path='/jobs' element={<Jobs />}></Route>
          <Route path='/companies' element={<CompanyShowcase />}></Route>

        </Routes>
        <hr/>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
