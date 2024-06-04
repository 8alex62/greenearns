import React, { Component } from 'react';
import { MenuItems } from './MenuItems';
import { Button } from '../Button';
import './Navbar.css';


class Navbar extends Component {
    state = {clicked: false}

     handleCLick = () => {
        this.setState({clicked: !this.state.clicked})
     }

    render() {
        return (
            <nav className='NavbarItems'>
                <div className='navbar-logo'>
                    <img className='logo' src={require("./logo.png")} alt="logo de notre entreprise" ></img>
                </div>
                <div className='menu-icon' onClick={this.handleCLick}>
                    <i className={this.state.clicked ? 'fas fa-times'  :  'fas fa-bars'}></i>
                </div>
                <ul className= {this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    {MenuItems.map((item, index) => {
                        return (
                            <li key={index}>
                                <a className={item.cName} href={item.url}>
                                    {item.title}
                                </a>
                            </li>
                        )
                    })}

                </ul>
                <Button>Compte</Button>
            </nav>
        )
    }
}

export default Navbar