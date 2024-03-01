import { useEffect, useState } from "react";// Importing necessary hooks from React
import styled from "styled-components";// Importing styled-components for styling
import { Splide, SplideSlide } from "@splidejs/react-splide";// Importing Splide carousel components
import '@splidejs/react-splide/css';// Importing Splide CSS
import { Link } from "react-router-dom";// Importing Link component for routing




function Popular() {

      // State to hold popular recipes
    const [popular, setPopular] = useState([]);

    // Fetching popular recipes when component mounts
    useEffect(() => {
        getPopular();
    }, []);

      // Function to fetch popular recipes
    const getPopular = async () => {

          // Checking if popular recipes exist in local storage
        const check = localStorage.getItem('popular');

        if (check && check !== "[object JSON]") {
          // Valid JSON data exists in local storage, setting state with it
          setPopular(JSON.parse(check));
        } else {
          // Fetch new data from API
          const api = await fetch(
            `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=8`
          );
          const data = await api.json();
        
          // Store valid JSON data in local storage
          localStorage.setItem('popular', JSON.stringify(data.recipes));
          setPopular(data.recipes);
        }

       
        
       
    }


    return (
        <div>
            <Wrapper>
                <h3>Trending Recipes</h3>
                <Splide
                options={{
                    perPage: 5,
                    arrows: true,
                    pagination: false,
                    drag: "free",
                    gap: "5rem",
                }}
                >

                    {popular.map((recipe) => {
                        return (
                            <SplideSlide key={recipe.id}>

                                <Card>
                                    <Link to={"/recipe/" + recipe.id}>
                                    <p>{recipe.title}</p>
                                    <img src={recipe.image} alt={recipe.title} />
                                    <Gradient />
                                    </Link>
                                </Card>
                            </SplideSlide>
                        );
                    })}
                </Splide>
            </Wrapper>
        </div>
    )
}

// Styled components for styling
const Wrapper = styled.div` 
margin: 2rem 2rem;
h3{
    color: #030654;
}
`;
const Card = styled.div`
min-height: 25rem;
border-radius: 2rem;
overflow: hidden;
position: relative;
border-style: solid;
border-color: #d9e3eb;

img{
    border-radius: 2rem;
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
}

p{
    position: absolute;
    z-index: 10;
    left: 50%;
    bottom: 0%;
    transform: translate(-50%, 0%);
    color: white;
    width: 100%;
    text-align: center;
    font-weight: 600;
    font-size: 1rem;
    height: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
    
}

`;

const Gradient = styled.div`
z-index: 3;
position: absolute;
width: 100%;
height: 100%;
background: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.5));
`;

export default Popular



