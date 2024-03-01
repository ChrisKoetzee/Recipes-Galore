import styled from "styled-components";
import { NavLink } from 'react-router-dom';


// Component to display categories with links
function Category() {
    return (
        <List>
            <SLink to={'/diets/Pescetarian'}>
                <h4>Pescetarian</h4>
            </SLink>
            <SLink to={'/diets/Lacto Vegetarian'}>
                <h4>Lacto Vegetarian</h4>
            </SLink>
            <SLink to={'/diets/Ovo vegetarian'}>
                <h4>Ovo Vegetarian</h4>
            </SLink>
            <SLink to={'/diets/Vegan'}>
                <h4>Vegan</h4>
            </SLink>
            <SLink to={'/diets/Vegetarian'}>
                <h4>Vegetarian</h4>
            </SLink>
        </List>
    )
}

// List styling using styled-components
const List = styled.div`
display: flex;
justify-content: center;
margin: 2rem 0rem;

`
// Styled NavLink for category links
const SLink = styled(NavLink)`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
border-radius: 50%;
margin-right: 2rem;
text-decoration: none;
background: #030654;
width: 6rem;
height: 6rem;
cursor: pointer;
transform: scale(0.8);

// Styling for category text
h4{ 
    color: white;
    font-size: 0.8rem;
    padding: 2rem;
}

// Styling for category icon 
svg{
    color: white;
    font-size 1.5rem;
}

// Styling for active link
&.active{
    background: linear-gradient(to right, #0265a7, #0606e2);
    svg{
        color: white;
    }
    h4{
        color: white;
    }
}
`

export default Category