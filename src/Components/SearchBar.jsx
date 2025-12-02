import React from "react";
import { BsSearch } from "react-icons/bs";
import { TbBrandReactNative } from "react-icons/tb";
import { BsPerson } from "react-icons/bs";
import { LuShoppingCart } from "react-icons/lu";
import {Link} from 'react-router-dom'


function SearchBar(){

    const styles = {
        iniSearch: {
            backgroundColor: "black",
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            padding: "10px"
        }
    };

    return(
        <>
            <nav style={styles.iniSearch}>
                <div>
                    <Link to="/search"><BsSearch size={25} color="white"/></Link> 
                </div>
                <div>
                    <Link to="/"><TbBrandReactNative size={50} color="red"/></Link>
                </div>
                <div>
                    <Link to="/login"><BsPerson size={30} color="white"/></Link>
                    <Link to="/cart"><LuShoppingCart size={30} color="white"/></Link>
                </div>
            </nav>
        </>
    )
}

export default SearchBar