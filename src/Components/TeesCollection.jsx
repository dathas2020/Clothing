import React, {useState} from 'react'
import Card from './Card'
import data from '../Context/Data.json'

function TeesCollection() {

    const styles = {
      container:{
        display: 'grid',
        gridTemplateColumns:'repeat(4,1fr)',
        gap:'2%',
        width: '75%'
      }

    }
  
    
  return (
    <>
       <div style={styles.container}>
         {
          data.Items.map((item,i)=>(
            item.type === 'Tee' && <Card key={i} index={i}/>
          ))
         }
       </div>
         
        
    </>
  )
}

export default TeesCollection
