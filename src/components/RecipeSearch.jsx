import styled from 'styled-components';
import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import {useNavigate} from 'react-router-dom'

function RecipeSearch() {

  const [input, setInput] = useState("");
const navigate = useNavigate();

const submitHandler = (e => {
  e.preventDefault();
  navigate('/searched/'+input)
})

  return (
    <FormStyle onSubmit={submitHandler}>
     
      <div>
      <FaSearch />
      <input onChange={(e) => setInput(e.target.value)} type='text' value={input} />
      </div>
    </FormStyle>
  )
}

const FormStyle = styled.form`
margin: 0rem 20rem;

div{
  position: relative;
  width: 100%;
  margin: 1rem;
}
input{
  border: none;
  background: linear-gradient(90deg, rgba(11,28,55,1) 0%, rgba(3,6,84,1) 0%, rgba(26,176,172,1) 48%, rgba(7,9,70,1) 100%);
  font-size: 1.5rem;
  color: white;
  padding: 1rem 3rem;
  border-radius: 1rem;
  outline: none;
  width: 100%;
}
svg{
  position: absolute;
  top: 50%;
  left: 0%;
  transform: translate(100%, -50%);
  color: white;
}
`

export default RecipeSearch