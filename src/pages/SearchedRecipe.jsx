// import React from 'react';
// import { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import styled from 'styled-components';
// import { Link } from "react-router-dom";// Importing Link component for routing

// function SearchedRecipe() {

//     const [searched, setSearched] = useState([]);
//     let params = useParams();

//     const getSearched = async (name) => {
//         const data = await fetch(
//             `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${name}`
//         );

//         const recipes = await data.json();
//         setSearched(recipes.results)
//     }

//     useEffect(() => {
//         getSearched(params.search)
//     }, [params.search])

//     return (
//         <Grid>
//             {searched.map((item) => {
//                 return (
//                     <Card key={item.id}>
//                           <Link to={"/recipe/" + item.id}>
//                         <img src={item.image} alt="" />
//                         <h4>{item.title}</h4>
//                         </Link>
//                     </Card>
//                 )
//             })}
//         </Grid>
//     )
// }

// // Styled components for styling
// const Grid = styled.div`
// display: grid;
// grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
// grid-gap: 3rem;
// `;

// const Card = styled.div`
// img{
//     width: 100%;
//     border-radius:2rem;
// }
// a{
//     text-decoration: none;
// }
// h4 {
//     text-align: center;
//     padding: 1rem;
// }
// `;
// export default SearchedRecipe

import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import styled from 'styled-components';

function SearchedRecipe() {
    // State to hold recipes based on search query
    const [searched, setSearched] = useState([]);

    // State to handle loading and error
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Accessing URL parameters
    let params = useParams();

    // Function to fetch recipes based on search query
    const getSearched = async (name) => {
        try {
            // Reset error and loading states before fetching
            setError(null);
            setLoading(true);

            const response = await fetch(
                `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${name}`
            );
            const data = await response.json();

            if (data && data.results) {
                // Check if results exist before setting state
                setSearched(data.results);
            } else {
                setSearched([]); // Set empty array if no results
                setError('No recipes found for this search.');
            }
        } catch (err) {
            // Handle fetch errors
            setError('Failed to fetch search results.');
        } finally {
            // Set loading to false after fetching
            setLoading(false);
        }
    };

    // Fetch recipes based on search query when component mounts or URL parameter changes
    useEffect(() => {
        getSearched(params.search); // Fetching recipes based on search query from URL parameter
    }, [params.search]);

    if (loading) {
        return <p>Loading...</p>; // Display loading message while fetching data
    }

    if (error) {
        return <p>{error}</p>; // Display error message if fetching fails
    }

    return (
        <Grid>
            {searched.length > 0 ? (
                searched.map((item) => (
                    <Card key={item.id}>
                        <Link to={`/recipe/${item.id}`}>
                            <img src={item.image} alt={item.title} />
                            <h4>{item.title}</h4>
                        </Link>
                    </Card>
                ))
            ) : (
                <p>No recipes found for your search.</p>
            )}
        </Grid>
    );
}

// Styled components for styling
const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
    grid-gap: 3rem;
`;

const Card = styled.div`
    img {
        width: 100%;
        border-radius: 2rem;
    }
    a {
        text-decoration: none;
    }
    h4 {
        text-align: center;
        padding: 1rem;
    }
`;

export default SearchedRecipe;
