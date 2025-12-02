import React,{useState} from 'react'
import data from '../context/Data.json'

function Card({index}) {

    const item = data.Items[index];

    const styles = {
        card: {
            cursor: 'pointer',
            width:'100%',
            backgroundColor: '#8e8e8e',
           
        },
        imgstyle: {
            width: '100%'
        },
        title: {
            fontFamily: 'sans-serif',
            fontSize: '80%',
            fontWeight: 500,
            width: '80%',
            paddingBottom: '10px',
            marginTop: '-20px'
        },
        bottom: {
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
        },
        price: {
            fontFamily: 'sans-serif',
            fontWeight: 500,
            fontSize: '90%'
        }

    }

  return (
    <>
        <div style={styles.card}>
            <div>
                <img src={item.image} style={styles.imgstyle}/>
            </div>
            <div style={styles.bottom}>
                <div style={styles.title}>{item.title}</div>
                <div style={styles.price}>Rs. {item.price}</div>
            </div>
        </div>
    </>
  )
}

export default Card
