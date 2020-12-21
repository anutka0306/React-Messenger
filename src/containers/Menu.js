import React from 'react';
import {Link} from "react-router-dom";
import '../styles/styles.css';

export default class Menu extends React.Component{
    render() {
        return (
            <div className="menu">
                <Link to="/">Home</Link>
                <Link to="/profile/">Profile</Link>
            </div>
        );
    }
}