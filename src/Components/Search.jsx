import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Search() {
  const [query, setQuery] = useState("");
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/Items")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);

  const styles = {
    container: {
      padding: 40,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },

    input: {
      width: "60%",
      padding: 12,
      marginBottom: 20,
      fontSize: 16,
    },

    results: {
      width: "60%",
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
      gap: 20,
    },

    card: {
      background: "#8e8e8e",
      borderRadius: 6,
      paddingBottom: 10,
      cursor: "pointer",
      textDecoration: "none",
      color: "inherit",
    },

    img: {
      width: "100%",
      borderRadius: 6,
    },

    title: {
      textAlign: "center",
      fontWeight: 600,
      marginTop: 8,
    },

    price: {
      textAlign: "center",
      marginTop: 4,
    },
  };

  const filtered = items.filter((item) =>
    item.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div style={styles.container}>
      {/* Search Box */}
      <input
        type="text"
        style={styles.input}
        placeholder="Search products..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      {/* Results */}
      <div style={styles.results}>
        {filtered.map((item) => (
          <Link
            key={item.id}
            to={`/item/${item.id}`}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <div style={styles.card}>
              <img
                src={item.image}
                alt={item.title}
                style={styles.img}
              />
              <div style={styles.title}>{item.title}</div>
              <div style={styles.price}>Rs. {item.price}</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Search;
