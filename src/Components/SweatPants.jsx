import React from 'react'
import PantsCollection from './PantsCollection'

function SweatPants() {

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
      gap: "30px",
      backgroundColor: "#8e8e8e",
      paddingBottom: "15%"
    }
  }

  return (
    <div style={styles.total}>
       <header style={styles.headingStyle}> Sweat Pants </header>
       <PantsCollection/>
    </div>
  )
}

export default SweatPants
