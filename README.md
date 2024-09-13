# Recipes Galore

## Overview

Are you tired of the difficulty in finding recipes that meet your dietary needs in one place? Do you find yourself having to search for cooking videos separately, only to discover they don't always align with the accompanying recipes? Say goodbye to these frustrations with Recipes Galore!

Recipes Galore is a web application designed to simplify your cooking experience by providing a centralized platform for discovering recipes that align with your dietary preferences. With integrated cooking videos and step-by-step instructions, you can now explore, learn, and cook with confidence.

## Installation

### Prerequisites

Before installing Recipes Galore, ensure you have the following prerequisites installed:

- **Node.js:** v16.20.2
- **npm:** 8.19.4

### Getting Started

1. Clone this repository to your local machine.
2. Navigate to the project directory.
3. [Start the application or any other necessary steps.]

### Installing Dependencies

To install project dependencies, run the following commands in the project directory:

```bash
npm install react-dom@latest --legacy-peer-deps  'if it does not work then' npm install react-dom@latest --force  
npm install react@18.3.1 react-dom@18.3.1 --legacy-peer-deps   'and then'  npm install framer-motion react-icons react-router-dom styled-components --legacy-peer-deps
npm install @react-oauth/google    "and then "      npm install @splidejs/react-splide --legacy-peer-deps
npm install dotenv --legacy-peer-deps
npm install express --save
npm install react-script --save
npm install gapi-script
npm install react-bootstrap
npm install react-google-login --legacy-peer-deps
npm install mdb-react-ui-kit --legacy-peer-deps

### Setting up all the API Key and Google oauth credentials

1. Create a .env file in the root folder
2. Insert you api key in the .env file and make the that the renaming is the same as where you use it in the code
3. Insert your google oauth credentials in the .env file and make sure that the renaming of the credentials are the same as where you use it in the code
