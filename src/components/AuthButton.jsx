import React, { useState } from 'react';
import { GoogleLogin, GoogleLogout } from 'react-google-login';

// Component for handling authentication with Google
const AuthButton = () => {
   // Retrieve Google OAuth client ID from environment variables
  const clientId = process.env.REACT_APP_GOOGLE_OAUTH_CLIENT_ID;

  // State variable to track authentication status
  const [isAuthenticated, setIsAuthenticated] = useState(false);

   // Function to handle successful login
  const loginSuccessHandler = (res) => {
    console.log("Login successful, Current user: ", res.profileObj);
    setIsAuthenticated(true);// Update authentication status to true
  };

  // Function to handle successful logout
  const logoutSuccessHandler = () => {
    console.log("Logout successful");
    setIsAuthenticated(false); // Update authentication status to false
  };

  // Function to handle login failure
  const loginFailureHandler = (res) => {
    console.log("Login failed, res: ", res);
  };

  // Render Google login button if not authenticated, otherwise render logout button
  return (
    <div className='auth-button-container'>
      {isAuthenticated ? (
        <GoogleLogout
          clientId={clientId} 
          buttonText="Logout"
          onLogoutSuccess={logoutSuccessHandler}
        />
      ) : (
        <GoogleLogin
          clientId={clientId}
          buttonText="Login with Google"
          onSuccess={loginSuccessHandler}
          onFailure={loginFailureHandler}
          cookiePolicy={"single_host_origin"}
          isSignedIn={true}
        />
      )}
    </div>
  );
};

export default AuthButton;
