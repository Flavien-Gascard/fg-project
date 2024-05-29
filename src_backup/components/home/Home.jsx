import React, { useState } from 'react'
import './Home.css'

const Home = () => {
    const [name, setName] = useState('Home')
    const [age, setAge] = useState(52)

    const handleClick = (name, age) => {
     setName = name
     setAge = age
    }

    
  return (
    <div className=".fgproject__home-container" id="home">
      <h1>My Home Page</h1>
      <button onClick={() => handleClick()}>Click Me!</button>
      <p>{name} is {age} years old </p>
    </div>
  )
}

export default Home
