import React from 'react'
import { Link } from "react-router-dom"

function NavigationMenu(props) {
    return (
        <div>
            <div className="font-bold py-3">
                ReactApp
            </div>

            <ul>
                <li>
                    <Link 
                        className="text-blue-500 py-3 border-t border-b block" 
                        to="/" 
                        onClick={props.closeMenu}>Home
                    </Link>
                </li>
                <li>
                    <Link 
                        className="text-blue-500 py-3 border-b block" 
                        to="/about"
                        onClick={props.closeMenu}>About
                    </Link>
                </li>
                <li>
                    <Link 
                        className="text-blue-500 py-3 border-b block" 
                        to="/contact"
                        onClick={props.closeMenu}>Contact
                    </Link>
                </li>
                <li>
                    <Link 
                        className="text-blue-500 py-3 border-b block" 
                        to="/product"
                        onClick={props.closeMenu}>Product
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default NavigationMenu