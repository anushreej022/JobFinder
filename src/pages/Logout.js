import axios from 'axios';
import Cookies from 'js-cookie'; // Import js-cookie for cookie management

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

export default LogoutButton;
