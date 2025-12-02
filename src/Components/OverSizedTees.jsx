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
      alignItems: "center"
    }
  }

  return (
    <div style={styles.total}>
       <heading style={styles.headingStyle}> Over-Sized Tees </heading>
       <TeesCollection/>
    </div>
  )
}

export default OverSizedTees
