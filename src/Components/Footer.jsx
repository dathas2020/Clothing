import React from 'react'
import { FaInstagram, FaYoutube, FaPinterest } from "react-icons/fa";

function Footer() {
  const styles = {
    footerContainer: {
      background: "#000",
      color: "#fff",
      padding: "13% 8%",
      fontFamily: "Arial, sans-serif"
    },
    footerTop: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "wrap",
      marginBottom: "40px",
    },
    contactHeader: {
      fontSize: "24px",
      marginBottom: "10px",
    },
    socialIcons: {
      display: "flex",
      gap: "20px",
    },
    icon: {
      fontSize: "30px",
      cursor: "pointer",
      transition: "opacity 0.3s",
    },
    subscribeSection: {
      textAlign: "center",
      marginBottom: "40px",
    },
    subscribeHeader: {
      fontSize: "24px",
      marginBottom: "20px",
    },
    emailWrapper: {
      display: "flex",
      justifyContent: "center",
      maxWidth: "600px",
      margin: "auto",
      border: "1px solid #555",
    },
    input: {
      flex: 1,
      padding: "15px",
      background: "transparent",
      border: "none",
      color: "#fff",
      fontSize: "16px",
      outline: "none",
    },
    button: {
      padding: "0 20px",
      background: "transparent",
      border: "none",
      color: "#fff",
      fontSize: "22px",
      cursor: "pointer",
    },
    footerBottom: {
      textAlign: "center",
      borderTop: "1px solid #333",
      paddingTop: "20px",
    },
    links: {
      display: "flex",
      justifyContent: "center",
      flexWrap: "wrap",
      marginTop: "10px",
      gap: "15px",
    },
    link: {
      color: "#aaa",
      textDecoration: "none",
      fontSize: "14px",
      transition: "opacity 0.3s",
    },
  };

  return (
    <footer style={styles.footerContainer}>
      <div style={styles.footerTop}>
        <div className="contact-section">
          <h2 style={styles.contactHeader}>Contact us</h2>
          <p>clothing.contact@gmail.com</p>
        </div>

        <div style={styles.socialIcons}>
          <FaInstagram style={styles.icon} />
          <FaYoutube style={styles.icon} />
          <FaPinterest style={styles.icon} />
        </div>
      </div>

      <div style={styles.subscribeSection}>
        <h2 style={styles.subscribeHeader}>Subscribe to our emails</h2>
        <div style={styles.emailWrapper}>
          <input type="email" placeholder="Email" style={styles.input} />
          <button style={styles.button}>&rarr;</button>
        </div>
      </div>

      <div style={styles.footerBottom}>
        <p>© 2025, Clothing Brand</p>
        <div style={styles.links}>
          <a href="#" style={styles.link}>Privacy policy</a>
          <a href="#" style={styles.link}>Shipping policy</a>
          <a href="#" style={styles.link}>Refund policy</a>
          <a href="#" style={styles.link}>Terms of service</a>
          <a href="#" style={styles.link}>Contact information</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer
