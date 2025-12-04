import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Item() {
  const { id } = useParams(); 
  const [item, setItem] = useState(null); 
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("M");
  const sizes = ["XS", "S", "M", "L", "XL", "2XL"];
  const [displayImage, setDisplayImage] = useState("");

  useEffect(() => {
    fetch(`http://localhost:3001/Items/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setItem(data);
        setDisplayImage(data.image);
      })
      .catch((err) => console.error("Error fetching item:", err));
  }, [id]);

  if (!item) return <div style={{ padding: "50px", textAlign: "center" }}>Loading...</div>;

  const styles = {
    container: {
      display: "flex",
      justifyContent: "center",
      padding: "40px",
      fontFamily: "Arial, sans-serif",
      backgroundColor: "#8E8E8E",
    },
    leftSection: {
      width: "55%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      paddingLeft: "10%",
    },
    mainImage: {
      width: "80%",
      borderRadius: "8px",
    },
    thumbnails: {
      display: "flex",
      gap: "10px",
      marginTop: "20px",
    },
    thumb: {
      width: "90px",
      height: "90px",
      objectFit: "cover",
      borderRadius: "6px",
      border: "2px solid black",
      cursor: "pointer",
    },
    rightSection: {
      width: "45%",
      paddingLeft: "50px",
      paddingRight: "10%",
    },
    title: {
      fontSize: "34px",
      fontWeight: "400",
      marginBottom: "10px",
    },
    rating: {
      fontSize: "14px",
      color: "#444",
      marginBottom: "15px",
    },
    price: {
      fontWeight: "bold",
      color: "black",
    },
    sizeRow: {
      marginTop: "30px",
      marginBottom: "5px",
      fontSize: "16px",
      fontWeight: "bold",
    },
    sizeButtons: {
      display: "flex",
      gap: "12px",
      marginBottom: "20px",
    },
    sizeBtn: {
      border: "1px solid #000000",
      padding: "10px 16px",
      borderRadius: "30px",
      cursor: "pointer",
      backgroundColor: "white",
    },
    sizeBtnActive: {
      backgroundColor: "black",
      color: "white",
      padding: "10px 16px",
      borderRadius: "30px",
      cursor: "pointer",
    },
    quantityBox: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      width: "140px",
      padding: "12px 18px",
      border: "1px solid black",
      borderRadius: "12px",
      backgroundColor: "#f6f6f6",
      userSelect: "none",
    },
    qtyBtn: {
      fontSize: "22px",
      fontWeight: "bold",
      cursor: "pointer",
      width: "30px",
      textAlign: "center",
    },
    qtyNumber: {
      fontSize: "20px",
      fontWeight: "700",
      width: "30px",
      textAlign: "center",
    },
    addToCartBtn: {
      width: "100%",
      padding: "14px",
      backgroundColor: "black",
      color: "white",
      fontSize: "16px",
      marginBottom: "12px",
      borderRadius: "6px",
      cursor: "pointer",
    },
  };

  const decrease = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const increase = () => {
    setQuantity(quantity + 1);
  };

  const addToCart = () => {
  const cartItem = {
    productId: item.id,
    title: item.title,
    price: item.price,
    image: item.image,
    size: selectedSize,
    quantity: quantity
  };

  fetch("http://localhost:3001/cart", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(cartItem)
  })
    .then(() => {
      alert("Added to cart!");
    })
    .catch(err => console.error("Error adding to cart:", err));
};


  return (
    <>
      <div style={styles.container}>

        {/* LEFT SIDE — IMAGES */}
        <div style={styles.leftSection}>
          <img src={displayImage} alt={item.title} style={styles.mainImage} />

          <div style={styles.thumbnails}>
            <img
              src={item.image}
              style={styles.thumb}
              onClick={() => setDisplayImage(item.image)}
            />
            <img
              src={item.alt}
              style={styles.thumb}
              onClick={() => setDisplayImage(item.alt)}
            />
          </div>
        </div>

        {/* RIGHT SIDE — DETAILS */}
        <div style={styles.rightSection}>
          <div style={styles.title}>{item.title}</div>

          <span style={styles.price}>Rs. {item.price}</span>

          {/* SIZE */}
          <div style={styles.sizeRow}>Size</div>
          <div style={styles.sizeButtons}>
            {sizes.map((size) => (
              <div
                key={size}
                onClick={() => setSelectedSize(size)}
                style={selectedSize === size ? styles.sizeBtnActive : styles.sizeBtn}
              >
                {size}
              </div>
            ))}
          </div>

          {/* QUANTITY */}
          <div style={styles.quantityBox}>
            <div style={styles.qtyBtn} onClick={decrease}>−</div>
            <div style={styles.qtyNumber}>{quantity}</div>
            <div style={styles.qtyBtn} onClick={increase}>+</div>
          </div>

          {/* ADD TO CART */}
          <br />
          <button style={styles.addToCartBtn} onClick={addToCart}>Add to cart</button>
        </div>

      </div>
    </>
  );
}

export default Item;
