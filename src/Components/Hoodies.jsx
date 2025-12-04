import React from 'react'
import HoodiesCollection from './HoodiesCollection'

function Hoodies() {

  const styles = {
    headingStyle: {
      color: "black",
      fontFamily: "sans-serif",
      fontSize: "250%",
    },
    total: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      gap: "10px",
      backgroundColor: "#8e8e8e",
      paddingBottom: "10%"
    }
  }

  return (
    <div style={styles.total}>
       <header style={styles.headingStyle}> HOODIES </header>

       <HoodiesCollection/>
    </div>
  )
}

export default Hoodies
