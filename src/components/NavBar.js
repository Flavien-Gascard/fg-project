import React from 'react';


function NavBar() {



  
  return (
    <nav className ="nav">
      <a href="/" className ="site-title">F.G.Project</a>
      <ul>
        <li>
        <a href="/projects" className="active">Projects</a>
        </li>
        <li>
        <a href="/about">About Me</a>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar
