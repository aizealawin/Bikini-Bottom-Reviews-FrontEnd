import React from 'react'
import { Link } from 'react-router-dom'

const Nav = ({ authenticated, user, handleLogOut}) => {
  let authenticatedOptions
  if (user) {
    authenticatedOptions = (
      <nav className="navBar">
        <h2>Welcome {user?.email}!</h2>
        <Link to="/">Home</Link>
        <Link onClick={handleLogOut} to="/">
          Sign Out
        </Link>
      </nav>
    )
  }

  const openOptions = (
  <nav className="navBar">
      <Link to="/">
    <h3>Home</h3>
      </Link>
      <Link to="/login">
    <h3>Login</h3>
      </Link>
      <Link to="/register">
    <h3>Register</h3>
      </Link>
  </nav>
)

  return(
<header className="navBar">
  <Link to ="/">
      {/* <div>
        <img className="logo" 
        src="https://media4.giphy.com/media/QUXYcgCwvCm4cKcrI3/giphy.gif"
        alt="welcome banner"
        />
      </div> */}
    </Link>
      {authenticated && user ? authenticatedOptions : openOptions}
    </header>
  )
}

export default Nav