import React, { useState, useEffect } from "react";

export default function Checkout() {
  const user = JSON.parse(localStorage.getItem("loggedInUser"));

  const [cart, setCart] = useState([]);
  const [orderPlaced, setOrderPlaced] = useState(false);

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    address: "",
    apartment: "",
    city: "",
    state: "",
    pin: "",
    phone: "",
  });

  const updateForm = (field, value) =>
    setForm((prev) => ({ ...prev, [field]: value }));

  useEffect(() => {
    fetch("http://localhost:3001/cart")
      .then((res) => res.json())
      .then((data) => setCart(data));
  }, []);

  if (!user) {
    return (
      <div style={{ padding: 40, textAlign: "center" }}>
        <h2>You must be logged in to checkout.</h2>
        <a href="/login">Go to Login →</a>
      </div>
    );
  }

  const styles = {
    container: {
      display: "flex",
      gap: "40px",
      padding: "40px",
      fontFamily: "Arial",
      backgroundColor: "#8e8e8e"
    },
    left: { 
        width: "55%" 
    },
    right: { 
        width: "35%", 
        borderLeft: "1px solid #ccc", 
        paddingLeft: 20 
    },
    input: {
      width: "100%",
      padding: 15,
      marginBottom: 15,
      border: "1px solid #ccc",
      fontSize: 16,
    },
    row: { 
        display: "flex", 
        gap: 10 
    },
    cod: { 
        border: "1px solid #ccc", 
        padding: 15, 
        marginTop: 20 
    },
    finishBtn: {
      width: "100%",
      padding: 18,
      background: "black",
      color: "white",
      fontSize: 20,
      border: "none",
      cursor: "pointer",
      marginTop: 30,
    },
    summaryRow: {
      display: "flex",
      justifyContent: "space-between",
      marginBottom: 15,
      fontSize: 16,
    },
  };

  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const finishOrder = async () => {
    const newOrder = {
      id: Date.now(),
      userEmail: user.email,
      address: form,
      items: cart,
      total: subtotal,
      paymentMethod: "Cash on Delivery",
      status: "Pending",
    };

    try {
      await fetch("http://localhost:3001/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newOrder),
      });

      setOrderPlaced(true);
    } catch {
      alert("Order failed. Try again.");
    }
  };

  if (orderPlaced) {
    return (
      <div style={{ padding: 40, textAlign: "center" }}>
        <h1>Order Placed!</h1>
        <p>Your order has been saved.</p>
        <a href="/">Return Home →</a>
      </div>
    );
  }

  return (
    <div style={styles.container}>
      
      <div style={styles.left}>
        <h2>Delivery Details</h2>

        <div style={styles.row}>
          <input
            style={styles.input}
            placeholder="First name"
            onChange={(e) => updateForm("firstName", e.target.value)}
          />
          <input
            style={styles.input}
            placeholder="Last name"
            onChange={(e) => updateForm("lastName", e.target.value)}
          />
        </div>

        <input
          style={styles.input}
          placeholder="Address"
          onChange={(e) => updateForm("address", e.target.value)}
        />

        <input
          style={styles.input}
          placeholder="Apartment (optional)"
          onChange={(e) => updateForm("apartment", e.target.value)}
        />

        <div style={styles.row}>
          <input
            style={styles.input}
            placeholder="City"
            onChange={(e) => updateForm("city", e.target.value)}
          />
          <input
            style={styles.input}
            placeholder="State"
            onChange={(e) => updateForm("state", e.target.value)}
          />
          <input
            style={styles.input}
            placeholder="PIN"
            onChange={(e) => updateForm("pin", e.target.value)}
          />
        </div>

        <input
          style={styles.input}
          placeholder="Phone"
          onChange={(e) => updateForm("phone", e.target.value)}
        />

        <h3>Payment</h3>
        <div style={styles.cod}>
          <input type="radio" checked readOnly /> Cash on Delivery
        </div>

        <button style={styles.finishBtn} onClick={finishOrder}>
          Finish Order
        </button>
      </div>

      <div style={styles.right}>
        <h3>Order Summary</h3>

        {cart.map((item) => (
          <div key={item.id} style={styles.summaryRow}>
            <span>
              {item.title} (x{item.quantity})
            </span>
            <span>₹{item.price * item.quantity}</span>
          </div>
        ))}

        <hr />

        <div style={{ marginTop: 20 }}>
          <div style={styles.summaryRow}>
            <span>Subtotal</span>
            <span>₹{subtotal}</span>
          </div>

          <div style={styles.summaryRow}>
            <span>Shipping</span>
            <span>FREE</span>
          </div>

          <div style={{ ...styles.summaryRow, fontWeight: "bold" }}>
            <span>Total</span>
            <span>₹{subtotal}</span>
          </div>
        </div>
      </div>

    </div>
  );
}
