import React, {useState} from 'react'
import Card from './Card'
import data from '../Context/Data.json'

function PantsCollection() {

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
            item.type === 'Pant' && <Card key={i} index={i}/>
          ))
         }
       </div>
         
        
    </>
  )
}

export default PantsCollection
