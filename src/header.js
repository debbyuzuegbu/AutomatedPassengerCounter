import React from "react"
import Logo from "./images/logo192.png"

export default function Header() {
    return (
        <header>
            <nav className="nav">
                <img src={Logo} className="nav--logo" />
                <h3 className="nav--logo_text">ReactFacts</h3>
                <h4 className="nav--title">React Course - Project 1</h4>
            </nav>
        </header>
    )
}
