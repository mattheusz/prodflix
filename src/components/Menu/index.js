import React from 'react';
import Logo from '../../assets/img/Logo.png'
import './Menu.css'
import { Link } from "react-router-dom";
//import ButtonLink from './components/ButtonLink';
import Button from '../Button'

/*
    Link: o cara que dá o comportamento do link para SPA
    - ao invés de usar a[href], usa-se Link[to]
*/


function Menu() {
    return (
        <nav className="Menu">
            <Link to="/">
                <img className="Logo" src={Logo} alt="ProdFlix Logo"/>
            </Link>
            <Button as={Link} className="ButtonLink" to="/cadastro/video">
                Novo Vídeo
            </Button>
        
        </nav>
    )
}

export default Menu;