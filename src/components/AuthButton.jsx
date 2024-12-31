import React, { useState } from 'react';
import { jwtDecode } from 'jwt-decode';
import { GoogleOAuthProvider, GoogleLogin, googleLogout } from '@react-oauth/google';

const AuthButton = () => {
  const clientId = process.env.REACT_APP_GOOGLE_OAUTH_CLIENT_ID;

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  const loginSuccessHandler = (credentialResponse) => {
    if (credentialResponse.credential) {
      const decodedUser = jwtDecode(credentialResponse.credential);
      console.log("Login successful, Current user:", decodedUser);
      setUser(decodedUser);
      setIsAuthenticated(true);
      console.log(decodedUser)
    }
  };

  const logoutHandler = () => {
    googleLogout();
    console.log("Logout successful");
    setUser(null);
    setIsAuthenticated(false);
  };

  const loginFailureHandler = (error) => {
    console.error("Login failed, error:", error);
  };

  return (
    <GoogleOAuthProvider clientId={clientId}>
      <div className="auth-button-container">
        {isAuthenticated ? (
          <div>
            <p>Welcome, {user?.name}!</p> {/* Display user's name */}
            <img
              src={user?.picture}
              alt="User Profile"
              style={{ width: '50px', borderRadius: '50%' }} // Display user's profile picture
            />
            <button onClick={logoutHandler} style={{padding: "1em"}}>Logout</button>
          </div>
        ) : (
          <GoogleLogin
            onSuccess={loginSuccessHandler}
            onError={loginFailureHandler}
          />
        )}
      </div>
    </GoogleOAuthProvider>
  );
};

export default AuthButton;
