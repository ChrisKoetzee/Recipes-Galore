import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useParams, Link } from 'react-router-dom';

function Diet() {
    // State to hold recipes based on selected diet
    const [diet, setDiet] = useState([]);

    // State to handle loading and error
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Accessing URL parameters
    let params = useParams();

    // Function to fetch recipes based on diet type
    const getDiet = async (name) => {
        try {
            // Reset error and loading states before fetching
            setError(null);
            setLoading(true);

            const response = await fetch(
                `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&diet=${name}`
            );
            const data = await response.json();

            if (data && data.results) {
                // Check if results exist before setting state
                setDiet(data.results);
            } else {
                setDiet([]); // Set empty array if no results
                setError('No recipes found for this diet.');
            }
        } catch (err) {
            // Handle fetch errors
            setError('Failed to fetch diet recipes.');
        } finally {
            // Set loading to false after fetching
            setLoading(false);
        }
    };

    // Fetch recipes based on diet type when component mounts or URL parameter changes
    useEffect(() => {
        getDiet(params.type); // Fetching recipes based on diet type from URL parameter
        console.log(params.type); // Logging the current diet type
    }, [params.type]);

    if (loading) {
        return <p>Loading...</p>; // Display loading message while fetching data
    }

    if (error) {
        return <p>{error}</p>; // Display error message if fetching fails
    }

    return (
        <Grid>
            {diet.length > 0 ? (
                diet.map((item) => (
                    <Card key={item.id}>
                        <Link to={`/recipe/${item.id}`}>
                            <img src={item.image} alt={item.title} />
                            <h4>{item.title}</h4>
                        </Link>
                    </Card>
                ))
            ) : (
                <p>No diet recipes found.</p>
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

export default Diet;
