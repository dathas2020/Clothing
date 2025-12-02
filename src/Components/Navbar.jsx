import React from 'react'
import {Link} from 'react-router-dom'

function Navbar() {

  const styles = {
    navStyle: {
      backgroundColor: "black",
      display: "flex",
      justifyContent: "space-around",
      padding: "10px"
    },
    linkStyle: {
      textDecoration: "underline",
      color: "#8e8e8e",
      fontFamily: "sans-serif"
    }
  };

  return (
    <>
        <nav style={styles.navStyle}>
          <Link to="/" style={styles.linkStyle}>Home</Link>
          <Link to="/hoodies" style={styles.linkStyle}>Hoodies</Link>
          <Link to="/oversizedtees" style={styles.linkStyle}>Over-Sized Tees</Link>
          <Link to="/sweatpants" style={styles.linkStyle}>Sweat Pants</Link>
          <Link to="/aboutus" style={styles.linkStyle}>About Us</Link>
        </nav>
    </>
  )
}

export default Navbar
