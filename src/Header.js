import React, { Component } from "react";
import './Header.css'
export default class Header extends Component {

    render() {
        return(
            <div className="headerLogo">
                <img className="mainLogo" src="http://www.pngnames.com/files/5/Pokemon-Logo-PNG-Free-Pic.png" alt="pokemon"/>
            </div>
        );
    }
}