
// Importing necessary modules from React and React Router DOM
import React from 'react'
import Home from './Home'
import {Route, Routes} from 'react-router-dom'
import Diet from './Diet'
import Recipe from './Recipe'
import SearchedRecipe from './SearchedRecipe'

// Defining a functional component called Pages
function Pages() {
  return (
    // Using the Routes component to define routes for different pages
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/diets/:type" element={<Diet />} />
        <Route path="/recipe/:name" element={<Recipe />} />
        <Route path="/searched/:search" element={<SearchedRecipe />}/>
    </Routes>
   
  )
}

export default Pages