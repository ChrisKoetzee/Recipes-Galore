// Importing necessary modules and components from libraries
import React, { useEffect } from "react";
import styled from "styled-components";
import { Form } from "react-bootstrap";
import { gapi } from "gapi-script";// Google API client library
import AuthButton from "./AuthButton";// Component for authentication button
import { GiKnifeFork } from "react-icons/gi" // Icon component for logo
import { Link } from "react-router-dom" // Component for routing


// Functional component for the header
const Header = () => {

   // Google API client ID for authentication
   const clientId = process.env.REACT_APP_GOOGLE_OAUTH_CLIENT_ID;

   // Effect hook to initialize Google API client on component mount
  useEffect(() => {
    const start = () => {
      gapi.client.init({
        clientId: clientId,
        scope: "" // Scope for authentication (empty for now)
      })
    }
    gapi.load("client:auth2", start);  // Load Google API client libraries
  });

  // JSX rendering of the header component
  return (
    <HeaderContainer>
      <Nav>
        <StyledGiKnifeFork />
        <Logo to={"/"}>Recipes Galore</Logo>
      </Nav>
      <div>
      <p>Search recipes from all over the world. <br></br>Create an account to
            save your favorite recipes. ✨<br></br></p>
      </div>
      
      <FormContainer>
        <Form className="signIn-container d-flex mx-5">
          <AuthButton />
        </Form>
      </FormContainer>
    </HeaderContainer>
  );
};

// Styled component for the logo
const Logo = styled(Link)`
text-decoration: none;
font-size: 1.5rem;
font-weight: 400;
font-family: 'Lobster Two', cursive;
color: white;
margin-right: 10rem;
`
// Styled component for the navigation section
const Nav = styled.div`
padding: 2rem;
margin: 2rem;
display: flex;

align-items: center;
svg{
  font-size: 2rem;
}
`
// Styled component for the header container
const HeaderContainer = styled.div`
  // width: 100%; 
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: rgb(11,28,55);
  background: linear-gradient(90deg, rgba(11,28,55,1) 0%, rgba(3,6,84,1) 0%, rgba(26,176,172,1) 48%, rgba(7,9,70,1) 100%);
  padding: 0.2rem;

  p{
   text-align: center;
   color: white;
   margin:4rem
  }
`;

// Styled component for the form container
const FormContainer = styled.div`
  margin-left: auto;
  padding: 1rem;
`;

// Styled component for the logo icon
const StyledGiKnifeFork = styled(GiKnifeFork)`
  font-size: 2rem;
  color: white; 
`;



export default Header;
