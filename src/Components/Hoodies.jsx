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
      alignItems: "center"
    }
  }

  return (
    <div style={styles.total}>
       <heading style={styles.headingStyle}> HOODIES </heading>

       <HoodiesCollection/>
    </div>
  )
}

export default Hoodies
