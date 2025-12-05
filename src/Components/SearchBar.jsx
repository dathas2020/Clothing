import React from "react";
import { BsSearch, BsPerson } from "react-icons/bs";
import { TbBrandReactNative } from "react-icons/tb";
import { LuShoppingCart } from "react-icons/lu";
import { Link } from "react-router-dom";

function SearchBar() {
  const user = JSON.parse(localStorage.getItem("loggedInUser"));

  const styles = {
    nav: {
      backgroundColor: "black",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "10px 20px",
    },
    left: {
      display: "flex",
      gap: "20px",
      alignItems: "center",
    },
    right: {
      display: "flex",
      gap: "20px",
      alignItems: "center",
    },
    logoutBtn: {
      background: "transparent",
      border: "none",
      color: "white",
      cursor: "pointer",
      fontSize: "14px",
    },
  };

  const handleLogout = () => {
    localStorage.removeItem("loggedInUser");
    window.location.reload();
  };

  return (
    <nav style={styles.nav}>

      <div style={styles.left}>
        <Link to="/search">
          <BsSearch size={25} color="white" />
        </Link>

        <Link to="/">
          <TbBrandReactNative size={45} color="red" />
        </Link>
      </div>

      <div style={styles.right}>

        {/* ICON */}
        <Link to={user ? "/profile" : "/login"}>
          <BsPerson size={30} color={user ? "lime" : "white"} />
        </Link>

        {/* CART */}
        <Link to="/cart">
          <LuShoppingCart size={30} color="white" />
        </Link>

        {user && (
          <button style={styles.logoutBtn} onClick={handleLogout}>
            Logout
          </button>
        )}
      </div>

    </nav>
  );
}

export default SearchBar;
