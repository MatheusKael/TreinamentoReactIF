import React, { Component } from 'react'
import './Header.css'
import { Link } from 'react-router-dom'

export default class Header extends Component {
    render() {
        return (
            <div className="header">
                <span id="titulo">{this.props.titulo}</span>
                <ul id="menu">
                   
                        <li>  <Link to="/">Inicio</Link>  </li>
                    
                   
                        <li>  <Link to="/sobre">Sobre</Link> </li>
                   
                        <li>  <Link to="/agenda">Agenda</Link> </li>
                 
                </ul> 
            </div>
        )
    }
}
