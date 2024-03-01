import React, {useEffect,  useState } from 'react';// Importing necessary hooks from React
import styled from 'styled-components';// Importing styled-components for styling
import { useParams } from 'react-router-dom';// Importing useParams to access URL parameters
import { Link } from 'react-router-dom';// Importing Link component for routing

function Diet() {

     // State to hold recipes based on selected diet
    const [diet, setDiet] = useState([]);

    // Accessing URL parameters
    let params = useParams();

    // Function to fetch recipes based on diet type
    const getDiet = async (name) => {
        const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&diet=${name}`)
        const recipes = await data.json();
        setDiet(recipes.results);

    };

     // Fetch recipes based on diet type when component mounts or URL parameter changes
    useEffect(() => {
        getDiet(params.type)// Fetching recipes based on diet type from URL parameter
        console.log(params.type)// Logging the current diet type
    }, [params.type])

    return (
        <Grid>
            {diet.map((item) => {
                return(
                    <Card key={item.id}>
                        <Link to={"/recipe/" + item.id}>
                        <img src={item.image} alt="" />
                        <h4>{item.title}</h4>
                        </Link>
                    </Card>
                )
            })}
        </Grid>
    )
}

// Styled components for styling
const Grid = styled.div`
display: grid;
grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
grid-gap: 3rem;
`;

const Card = styled.div`
img{
    width: 100%;
    border-radius:2rem;
}
a{
    text-decoration: none;
}
h4 {
    text-align: center;
    padding: 1rem;
}
`;

export default Diet