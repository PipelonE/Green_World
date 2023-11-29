import React from "react"
import { Link } from "react-router-dom";
import '../estilos/navbar.css';
import {useRef, useState, useEffect} from "react";
import Logo from '../imagenes/Logo_grenn_world.png';
import foto_perfil from '../imagenes/foto_perfil.png';


export const Navbar = () => {
    const [background, setbackground] = useState("transparent")
    const refheader = useRef();

    useEffect(() => {
        const scrollchange =(e) =>{
            var scroll = window.scrollY
            if(scroll>10){
                var backgroundcolor = '#121212'
            }else{
                var backgroundcolor = 'transparent'
            }
            setbackground(backgroundcolor);
        }

        window.addEventListener('scroll', scrollchange);
        return () => {
            window.removeEventListener('scroll', scrollchange);
        }
    })

    return (
        <header className="cabecera" id="cabecera" ref={refheader} style={{backgroundColor: background}}>
            <div className="iden_per">
                <img src={Logo} className="menu-icono" alt=""/>
                <div>
                    <li className="item">
                        <a>
                            <Link to="/Perfil">
                                <img src={foto_perfil} className="foto_per"/>
                                <p className="nombre_user">Daniel Español</p>
                            </Link>
                        </a>
                    </li>
                </div>
            </div>
            <ul class="menu">
                <li className="item"><a href="/quienes_somos"><Link to="/quienes_somos">Conocenos</Link></a></li>
                <li className="item"><a href="/productos"><Link to="/productos">Productos</Link></a></li>
                <li className="item"><a href="/carrito"><Link to="/Carrito">Carrito</Link></a></li>
                <li className="btn_login"><a href="."><Link to="/">Login</Link></a></li>
            </ul>
        </header>
    )
}
export default Navbar