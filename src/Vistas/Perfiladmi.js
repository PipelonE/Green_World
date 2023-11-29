import React from "react"
import img_perfil from "../imagenes/usuario-de-perfil.png";
import Navadmi from "../Componentes/Nav_admi";
import '../estilos/perfil.css';

export const Perfiladmi = () => {

    return (
        <div className="area_perfil">
            <Navadmi/><br></br>
            <div className="perfil_u">
                <h2 className="perfil_titu">Perfil De Usuario</h2><br></br>
                <div className="area_p">
                    <img src={img_perfil} className="perfil_img"/>
                    <div className="info_form">
                        <div className="opcion-block">
                            <label className="labels_info" form="tipo_doc">Tipo de Documento</label>
                            <select id="tipo_doc" className="inputs_info" name="tipo_doc" style={{width : "270px"}}>
                                <option value="CC">C.C</option>
                                <option value="CE">C.E</option>
                                <option value="TI">T.I</option>
                                <option value="PEP">PEP</option>
                            </select>
                        </div>
                        <div className="opcion-block">
                            <label className="labels_info" form="iden">Identificación</label>
                            <input type="text" id="iden" className="inputs_info" name="iden" value="1027290782"/>
                        </div>
                        <div className="opcion-block">
                            <label className="labels_info" form="nombre">Primer Nombre</label>
                            <input type="text" id="nombre" className="inputs_info" name="nombre" value="Daniel"/>
                        </div>
                        <div className="opcion-block">
                            <label className="labels_info" form="segundo_nombre">Segundo Nombre</label>
                            <input type="text" id="segundo_nombre" className="inputs_info" name="segundo_nombre" value="Felipe"/>
                        </div>
                        <div className="opcion-block">
                            <label className="labels_info" form="apellido">Primer Apellido</label>
                            <input type="text" id="apellido" className="inputs_info" name="apellido" value="Español"/>
                        </div>
                        <div className="opcion-block">
                            <label className="labels_info" form="segundo_apellido">Segundo Apellido</label>
                            <input type="text" id="segundo_apellido" className="inputs_info" name="segundo_apellido" value="Montenegro"/>
                        </div>
                        <div className="opcion-block">
                            <label className="labels_info" form="usu">Nombre de Usuario</label>
                            <input type="text" id="usu" className="inputs_info" name="usu" value="Pipelim04"/>
                        </div>
                        <div className="opcion-block">
                            <label className="labels_info" form="contraseña">Contraseña</label>
                            <input type="password" id="contraseña" className="inputs_info" name="contraseña" value="123654789"/>
                        </div>
                        <div className="opcion-block">
                            <label className="labels_info" form="Correo">Correo</label>
                            <input type="email" id="Correo" className="inputs_info" name="Correo" value="daniel@gmail.com"/>
                        </div>
                        <div className="opcion-block">
                            <label className="labels_info" form="Adress">Dirección</label>
                            <input type="text" id="Adress" className="inputs_info" name="Adress" value="Cr 95 bis a-45"/>
                        </div>
                        <div className="opcion-block">
                            <label className="labels_info" form="Tel">Numero De Celular</label>
                            <input type="text" id="Tel" className="inputs_info" name="Tel" value="3153129657"/>
                        </div>
                        <div className="opcion-block">
                            <label className="labels_info" form="date_nacimiento">Fecha De Nacimiento</label>
                            <input type="date" id="date_nacimiento" className="inputs_info" name="date_nacimiento" value="2004/08/19"/>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}
export default Perfiladmi