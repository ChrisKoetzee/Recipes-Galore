import React, { useState } from 'react';
import { jwtDecode } from 'jwt-decode'; // Use named import
import { GoogleOAuthProvider, GoogleLogin, googleLogout } from '@react-oauth/google';

// Component for handling authentication with Google
const AuthButton = () => {
  // Retrieve Google OAuth client ID from environment variables
  const clientId = process.env.REACT_APP_GOOGLE_OAUTH_CLIENT_ID;

  // State variable to track authentication status and user data
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null); // Correctly defined the user state

  // Function to handle successful login
  const loginSuccessHandler = (credentialResponse) => {    
    console.log("Login response: ", credentialResponse);
    if (credentialResponse.credential) {
      const decodedUser = jwtDecode(credentialResponse.credential); // Decode the JWT to get user info
      console.log("Login successful, Current user: ", decodedUser);
      setUser(decodedUser);
      setIsAuthenticated(true); // Update authentication status to true
    }
  };

  // Function to handle successful logout
  const logoutSuccessHandler = () => {
    console.log("Logout successful");
    setUser(null);
    setIsAuthenticated(false); // Update authentication status to false
  };

  // Function to handle login failure
  const loginFailureHandler = (error) => {
    console.error("Login failed, error: ", error);
  };

  return (
    <GoogleOAuthProvider clientId={clientId}>
      <div className='auth-button-container'>
        {isAuthenticated ? (
          <button
            onClick={() => {
              console.log('user details', user);
              googleLogout(); // Log the user out
              logoutSuccessHandler(); // Handle the logout success
            }}
          >
            Logout
          </button>
        ) : (
          <GoogleLogin
            onSuccess={loginSuccessHandler}
            onError={loginFailureHandler}
            scope="profile email"
          />
        )}
      </div>
    </GoogleOAuthProvider>
  );
};

export default AuthButton;
