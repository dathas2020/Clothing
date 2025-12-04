import React, { useState } from "react";

function Input() {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const [img, setImg] = useState("");
  const [alt, setAlt] = useState("https://www.istockphoto.com/photos/placeholder-image");

  const handleSelectChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newItem = {
      id: crypto.randomUUID(),          
      type: selectedOption || "Tee",    
      title: title,
      price: price,
      image: img,
      alt: alt
    };

    try {
      const res = await fetch("http://localhost:3001/Items", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newItem),
      });

      if (!res.ok) {
        throw new Error("Failed to save");
      }

      const saved = await res.json();
      console.log("Saved to JSON:", saved);

      setTitle("");
      setPrice("");
      setSelectedOption("");
      setImg("");
      setAlt("https://www.istockphoto.com/photos/placeholder-image");
      alert("Item saved to JSON file!");

    } catch (error) {
      console.error(error);
      alert("Failed to save item.");
    }
  };

  const styles = {
    container: {
      background: "#000",
      color: "white",
      padding: "60px 0",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      fontFamily: "Arial, sans-serif",
      height: "100vh",
    },

    form: {
      width: "60%",
      display: "flex",
      flexDirection: "column",
      gap: "20px",
    },

    row: {
      display: "flex",
      gap: "20px",
    },

    input: {
      flex: 1,
      background: "transparent",
      border: "1px solid #555",
      padding: "15px",
      color: "white",
      fontSize: "16px",
    },

    select: {
      background: "transparent",
      border: "1px solid #555",
      padding: "15px",
      color: "white",
      fontSize: "16px",
    },

    button: {
      width: "120px",
      padding: "12px",
      fontSize: "16px",
      color: "white",
      background: "#333",
      border: "none",
      cursor: "pointer",
      transition: "0.2s ease",
    },

    option: {
        color: "black"
    }
  };

  return (
    <>
      <div style={styles.container}>
        <form onSubmit={handleSubmit} style={styles.form}>

          {/* Title + Price */}
          <div style={styles.row}>
            <input
              type="text"
              placeholder="Enter title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              style={styles.input}
            />

            <input
              type="number"
              placeholder="Enter price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              style={styles.input}
            />
          </div>

          {/* Category */}
          <select
            value={selectedOption}
            onChange={handleSelectChange}
            style={styles.select}
          >
            <option style={styles.option} value="">--Please choose an option--</option>
            <option style={styles.option} value="Tee">Oversized-Tees</option>
            <option style={styles.option} value="Hoodie">Hoodies</option>
            <option style={styles.option} value="Pant">Sweat Pants</option>
          </select>

          {/* URL */}
          <input
            type="url"
            placeholder="Main Image URL"
            value={img}
            onChange={(e) => setImg(e.target.value)}
            required
            style={styles.input}
          />

          <input
            type="url"
            placeholder="Alt Image URL"
            value={alt}
            onChange={(e) => setAlt(e.target.value)}
            style={styles.input}
          />

          {/* Submit */}
          <button type="submit" style={styles.button}>
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default Input;
