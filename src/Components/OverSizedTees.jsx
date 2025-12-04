import React from 'react'
import TeesCollection from './TeesCollection'

function OverSizedTees() {

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
      backgroundColor: "#8e8e8e",
      paddingBottom: "15%"
    }
  }

  return (
    <div style={styles.total}>
       <header style={styles.headingStyle}> Over-Sized Tees </header>
       <TeesCollection/>
    </div>
  )
}

export default OverSizedTees
