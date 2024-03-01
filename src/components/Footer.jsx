import React from 'react';
import styled from 'styled-components';

// Footer component
const Footer = () => {
    // Get current year
    const currentYear = new Date().getFullYear();
    
    return (
        <StyledFooter>
            <div>
            <StyledSpan>&copy; {currentYear}</StyledSpan>
                <a href="#/" title="Created by C.T.C">
                    Created by C.T.C
                </a>
            </div>
        </StyledFooter>
    );
};

// Styled footer component
const StyledFooter = styled.footer`
    text-align: center;
    padding: 20px;
    background: rgb(11,28,55);
    background: linear-gradient(90deg, rgba(11,28,55,1) 0%, rgba(3,6,84,1) 0%, rgba(26,176,172,1) 48%, rgba(7,9,70,1) 100%);

    a{
      color: white;
    }
`;

// Styled span for copyright year
const StyledSpan = styled.span`
    color: white;
    padding: 0.5rem;
`;

export default Footer;



