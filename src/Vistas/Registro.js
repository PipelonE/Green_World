import React from "react"
import {Link } from "react-router-dom"
import '../estilos/inicio.css';

export const Regis = () => {
    return (
        <div className="fondo_2">
            <div className="login-form">
                <h1 className="ingre">Registro</h1>
                <form className="Login-inputs" id="login" method="post" >
                    <div className="formulario_div" id="form_tipo">
                        <select id="tipo_doc" className="form_tdoc" name="tipo_doc" placeholder="Ingrese su tipo de documento">
                            <option value="CC">C.C</option>
                            <option value="CE">C.E</option>
                            <option value="TI">T.I</option>
                            <option value="PEP">PEP</option>
                        </select>
                    </div>
                    <div className="formulario_div" id="form_id">
                        <input type="text" id="iden" className="formulario_inputs" name="iden" placeholder="Ingrese su numero de documento"/>
                    </div>
                    <div className="formulario_div" id="form_nombre">
                        <input type="text" id="nombre" className="formulario_inputs" name="nombre" placeholder="Ingrese su primer nombre"/>
                    </div>
                    <div className="formulario_div" id="form_s_nombre">
                        <input type="text" id="segundo_nombre" className="formulario_inputs" name="segundo_nombre" placeholder="Ingrese su segundo nombre si lo tiene"/>
                    </div>
                    <div className="formulario_div" id="form_apellido">
                        <input type="text" id="apellido" className="formulario_inputs" name="apellido" placeholder="Ingrese su primer Apellido"/>
                    </div>
                    <div className="formulario_div" id="form_s_apellido">
                        <input type="text" id="segundo_apellido" className="formulario_inputs" name="segundo_apellido" placeholder="Ingrese su segundo Apellido si lo tiene"/>
                    </div>
                    <div className="formulario_div" id="form_id">
                        <input type="text" id="usu" className="formulario_inputs" name="usu" placeholder="Ingrese un nombre de usuario"/>
                    </div>
                    <div className="formulario_div" id="form_id">
                        <input type="text" id="confir_usu" className="formulario_inputs" name="confir_usu" placeholder="Confirme el nombre de usuario"/>
                    </div>
                    <div className="formulario_div" id="form_contraseña">
                        <input type="password" id="Contraseña" className="formulario_inputs" name="contraseña" placeholder="Ingrese su contraseña"/>
                    </div>
                    <div className="formulario_div" id="form_c_contraseña">
                        <input type="password" id="confir_c" className="formulario_inputs" name="confircontraseña" placeholder="Confirme su contraseña"/>
                    </div>
                    <div className="formulario_div" id="form_correo">
                        <input type="gmail" id="Correo" className="formulario_inputs" name="Correo" placeholder="Ingrese su correo electronico"/>
                    </div>
                    <div className="formulario_div" id="form_direccion">
                        <input type="adress" id="adress" className="formulario_inputs" name="adress" placeholder="ingrese su dirección"/>
                    </div>
                    <div className="formulario_div" id="form_celular">
                        <input type="text" id="celular" className="formulario_inputs" name="celular" placeholder="Ingrese su numero de celular"/>
                    </div>
                    <div className="formulario_div" id="form_nacimiento">
                        <input id="date_nacimiento" type="date" className="formulario_inputs" name="date_nacimiento"/>
                    </div>
                    <div className="block btnregis">
                        <li className="btn" style={{marginLeft: "88%"}}><Link to="/">Enviar</Link></li>
                    </div>
                </form>
            </div>
        </div>
        
    )
}

export default Regis