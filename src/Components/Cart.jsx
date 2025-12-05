import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Cart() {
  const navigate = useNavigate();
  const [cart, setCart] = useState([]);

  const user = JSON.parse(localStorage.getItem("loggedInUser"));

  const styles = {
    container: {
      padding: "40px 10%",
      backgroundColor: "black",
      color: "white",
      minHeight: "100vh",
      fontFamily: "Arial, sans-serif"
    },
    header: {
      fontSize: "40px",
      marginBottom: "40px"
    },
    itemRow: {
      display: "grid",
      gridTemplateColumns: "120px 1fr 200px 100px",
      padding: "20px 0",
      borderBottom: "1px solid #333",
      alignItems: "center"
    },
    productInfo: {
      marginLeft: "20px"
    },
    qtyBox: {
      display: "flex",
      border: "1px solid white",
      width: "120px",
      justifyContent: "space-between",
      padding: "10px 14px",
      cursor: "pointer"
    },
    deleteBtn: {
      fontSize: "20px",
      cursor: "pointer",
      marginLeft: "20px"
    },
    totalBox: {
      textAlign: "right",
      marginTop: "40px",
      fontSize: "24px"
    },
    checkoutBtn: {
      marginTop: "20px",
      width: "200px",
      padding: "14px",
      backgroundColor: "#222",
      border: "1px solid white",
      color: "white",
      cursor: "pointer",
      fontSize: "16px"
    }
  };

  useEffect(() => {
    fetch("http://localhost:3001/cart")
      .then(res => res.json())
      .then(data => setCart(data));
  }, []);

  const increase = (item) => {
    fetch(`http://localhost:3001/cart/${item.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ quantity: item.quantity + 1 })
    }).then(() => {
      setCart(prev =>
        prev.map(x => x.id === item.id ? { ...x, quantity: x.quantity + 1 } : x)
      );
    });
  };

  const decrease = (item) => {
    if (item.quantity === 1) return;
    fetch(`http://localhost:3001/cart/${item.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ quantity: item.quantity - 1 })
    }).then(() => {
      setCart(prev =>
        prev.map(x => x.id === item.id ? { ...x, quantity: x.quantity - 1 } : x)
      );
    });
  };

  const deleteItem = (item) => {
    fetch(`http://localhost:3001/cart/${item.id}`, {
      method: "DELETE"
    }).then(() => {
      setCart(prev => prev.filter(x => x.id !== item.id));
    });
  };

  const total = cart.reduce((sum, item) => sum + Number(item.price) * item.quantity, 0);

  const handleCheckout = () => {
    if (!user) {
      alert("Please login before checkout.");
      navigate("/login");
    } else {
      navigate("/checkout");
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>Your cart</div>

      {cart.map(item => (
        <div key={item.id} style={styles.itemRow}>
          <img src={item.image} width="100" alt="" />

          <div style={styles.productInfo}>
            <div>{item.title}</div>
            <div>Rs. {item.price}</div>
            <div>Size: {item.size}</div>
          </div>

          <div style={styles.qtyBox}>
            <div onClick={() => decrease(item)}>−</div>
            <div>{item.quantity}</div>
            <div onClick={() => increase(item)}>+</div>
          </div>

          <div style={styles.deleteBtn} onClick={() => deleteItem(item)}>
            🗑
          </div>
        </div>
      ))}

      <div style={styles.totalBox}>
        Estimated total: Rs. {total}
      </div>

      <button style={styles.checkoutBtn} onClick={handleCheckout}>
        Check out
      </button>
    </div>
  );
}

export default Cart;
