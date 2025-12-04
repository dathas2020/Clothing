import React, { useState } from "react";
import data from "../Context/Data.json";
import { useNavigate } from "react-router-dom";

function Search() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const styles = {
    container: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      padding: "40px",
      fontFamily: "sans-serif",
    },
    input: {
      width: "60%",
      padding: "12px 18px",
      fontSize: "18px",
      borderRadius: "8px",
      border: "1px solid #aaa",
      marginBottom: "20px",
    },
    results: {
      width: "60%",
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
      gap: "20px",
    },
    card: {
      cursor: "pointer",
      backgroundColor: "#cfcfcf",
      paddingBottom: "10px",
      borderRadius: "6px",
    },
    img: {
      width: "100%",
      borderRadius: "6px",
    },
    title: {
      fontSize: "80%",
      fontWeight: 600,
      marginTop: "10px",
      textAlign: "center",
    },
    price: {
      fontSize: "85%",
      textAlign: "center",
    },
  };

  const filtered = data.Items.filter((item) =>
    item.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div style={styles.container}>
      <input
        type="text"
        style={styles.input}
        placeholder="Search for products..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      <div style={styles.results}>
        {filtered.map((item, i) => (
          <div
            key={i}
            style={styles.card}
            onClick={() => navigate(`/item/${i}`)}
          >
            <img src={item.image} style={styles.img} />
            <div style={styles.title}>{item.title}</div>
            <div style={styles.price}>Rs. {item.price}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Search;
