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
      alignItems: "center"
    }
  }

  return (
    <div style={styles.total}>
       <heading style={styles.headingStyle}> Sweat Pants </heading>
       <PantsCollection/>
    </div>
  )
}

export default SweatPants
