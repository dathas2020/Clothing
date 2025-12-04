import React from 'react'
import Hoodies from './Hoodies'
import SweatPants from './SweatPants'
import OverSizedTees from './OverSizedTees'

function Home() {

  const styles = {
    home: {
      display: "flex",
      flexDirection: "column",
      gap: "1px"
    }
  }

  return (
    <>
      <div style={styles.home}>
          <img src='../assets/Banner.jpeg'/>
          <Hoodies/>
          <SweatPants/>
          <OverSizedTees/>
      </div>
    </>
    
  )
}

export default Home
