
import { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import React from 'react'


// React component for displaying recipe details
function Recipe() {

  // Extracting parameters from the URL
  let params = useParams();

  // State variables to hold recipe details and active tab
  const [details, setDetails] = useState({});
  const [activeTab, setActiveTab] = useState('instructions');

  // Fetch recipe details when component mounts or when params change
  useEffect(() => {
    const fetchDetails = async () => {
      const data = await fetch(
        `https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY}`
      );
      const detailData = await data.json();
      setDetails(detailData);
    };

    fetchDetails();
  }, [params.name]); // Include params.name in the dependency array if it's used inside fetchDetails



  // Render the recipe details
  return (
    <RecipeWrapper>
      <div>
        {/* Display recipe title and image */}
        <h2>{details.title}</h2>
        <img src={details.image} alt="" />
      </div>
      {/* Display tabs for switching between instructions and ingredients */}
      <Info>
        <Button active={activeTab === 'instructions'} onClick={() => setActiveTab("instructions")}>Instructions</Button>
        <Button active={activeTab === 'ingredients'} onClick={() => setActiveTab("ingredients")}>Ingredients</Button>

        {/* Display instructions if activeTab is 'instructions' */}
        {activeTab === "instructions" && (
          <div>
            <h3 dangerouslySetInnerHTML={{ __html: details.summary }}></h3>
            <h3 dangerouslySetInnerHTML={{ __html: details.instructions }}></h3>
          </div>
        )}


      {/* Display ingredients if activeTab is 'ingredients' */}

        {activeTab === "ingredients" && (
          <ul>
            {details.extendedIngredients && details.extendedIngredients.map((ingredient) =>
              <li key={ingredient.id}>{ingredient.original}</li>
            )}
          </ul>
        )}

      </Info>

    </RecipeWrapper>
  )
};


// Styled components for styling the recipe component
const RecipeWrapper = styled.div`
  margin-top: 10rem;
  margin-bottom: 5rem;
  display: flex;
`;

const Button = styled.button`
  padding: 1rem 2rem;
  color: ${props => props.active ? 'white' : '#313131'};
  background: ${props => props.active ? 'linear-gradient(35deg, #030654, #030654)' : 'white'};
  border: 2px solid black;
  margin-right: 2rem;
  font-weight: 600;
`;


const Info = styled.div`
  margin-left: 10rem;

  ul{
    padding: 2rem;
  }
`;

export default Recipe;