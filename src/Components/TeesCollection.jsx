import React, { useEffect, useState } from 'react';
import Card from './Card';

function TeesCollection() {
  const [items, setItems] = useState([]);

  const styles = {
    container: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: '2%',
      width: '75%',
    },
  };

  useEffect(() => {
    fetch('http://localhost:3001/Items')
      .then((res) => res.json())
      .then((data) => setItems(data))
      .catch((err) => console.error('Error fetching tees:', err));
  }, []);

  return (
    <>
      <div style={styles.container}>
        {items
          .filter((item) => item.type === 'Tee') 
          .map((item) => (
            <Card key={item.id} item={item} /> 
          ))}
      </div>
    </>
  );
}

export default TeesCollection;
