import React from "react"
import {Link } from "react-router-dom"
import '../estilos/inicio.css';

export const Login = () => {
    return (
        <div className="fondo">
            <form className="form_l">
                <h1 className="ingre">Ingreso</h1>
                <label htmlFor="usuario" className="labeles">Ingrese su usuario</label>
                <input type="text" className="inputs_l"/>
                <label htmlFor="password" className="labeles">Ingrese su contraseña</label>
                <input type="password" className="inputs_l"/> 
                <li className="btn btni"><Link to="/productos">Ingreso</Link></li><br></br>
                <li className="btn btnr"><Link to="/Registro">Registrarse</Link></li>
            </form>
        </div>
            
    
    )
}

export default Login