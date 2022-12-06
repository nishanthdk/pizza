import React,{useState} from 'react';
import Logo from "../assets/pizzaLogo.png";
import {Link} from "react-router-dom";
import ReorderIcon from '@mui/icons-material/Reorder';
import "../styles/Navbar.css";

const Navbar=()=>{
    const [openLinks,setopenLinks]=useState(false);
    const toggleNavbar=()=>{
        setopenLinks(!openLinks)
    }
    return(
        <div className='navbar'>
            <div className='leftSide' id={openLinks ? "open" : "close"}>
            <img src={Logo} alt="Logoimg"></img>
            <div className='hiddenLinks'>
            <Link to="/">Home</Link>
                <Link to="/menu">menu</Link>
                <Link to="/about">about</Link>
                <Link to="/contact">contact</Link>
            </div>
            </div>
            <div className='rightSide'>
                <Link to="/">Home</Link>
                <Link to="/menu">menu</Link>
                <Link to="/about">about</Link>
                <Link to="/contact">contact</Link>
                <button onClick={toggleNavbar}>
                <ReorderIcon/>
                </button>
            </div>
        </div>
    )
}
export default Navbar;