import React from "react"
import Navadmi from "../Componentes/Nav_admi";
import Slider from "../Componentes/Slider";
import '../estilos/estadistica.css';
import arrow from '../imagenes/arrow.svg';
import LinesChart from "../Componentes/Barchar";
import Cebollla from '../imagenes/cebolla.jpg';
import Fresas from '../imagenes/fresas.jpg';
import Mangos from '../imagenes/mangos.jpg';
import Moras from '../imagenes/Moras.jpg';
import Pepinos from '../imagenes/pepinos.jpg';
import Piña from '../imagenes/piña.jpg';
import {useRef} from "react";


export const Estadistica = () => {

    var ref2023 = useRef();
    var ref2022 = useRef();
    var ref2021 = useRef();

    const Mostrar_estadistica = (e) =>{
        switch (e.target.id){
            case "option_2023":
                ref2023.current.classList.toggle('funciones_mostrar');
            break;
            case "option_2022":
                ref2022.current.classList.toggle('funciones_mostrar');
            break;
            case "option_2021":
                ref2021.current.classList.toggle('funciones_mostrar');
            break;
        }
    }


    let Mas_Vendidos = [
        {
            img: Cebollla,
            nombre: "Cebollla Larga",
            id: "Cebollla",
            Precio: "2600",
            color:"#a3ff7e",
            descripción: "La cebolla larga contiene altos niveles de vitamina C y la vitamina K, los cuales son esenciales para el funcionamiento de los huesos. La vitamina C ayuda en la síntesis de colágeno para huesos fuertes, mientras que la vitamina K juega un papel clave en el mantenimiento de la densidad ósea.",
        },
        {
            img: Moras,
            nombre: "Moras",
            id: "Moras",
            Precio: "8000 ",
            color:"#933e95",
            descripción: "",
        },
        {
            img: Piña,
            nombre: "Piña",
            id: "Piña",
            Precio: "2500",
            color:"#ffff00",
            descripción: "",
        },
        {
            img: Fresas,
            nombre: "Fresa",
            id: "Fresa",
            Precio: "8000 ",
            color:"#ff0000",
            descripción: "",
        },
        {
            img: Mangos,
            nombre: "Mangos",
            id: "Mangos",
            Precio: "2000 ",
            color:"#ffdf00",
            descripción: "",
        },
        {
            img: Pepinos,
            nombre: "Pepino",
            id: "Pepinos",
            Precio: "1900",
            color:"#3d642d",
            descripción: "El pepino aporta fibra, pequeñas cantidades de vitamina C, provitamina A y de vitamina E, y, en proporciones aún menores, vitaminas del grupo B tales como folatos, B1, B2 y B3. En su piel se encuentran pequeñas cantidades de beta-caroteno.",
        },
    ]

    return (
        <div>
            <Navadmi/>
            <Slider/>
            <div className="estadisticas_area">
                <h2 className="titu_esta">Estadistica Mensuales</h2><br></br>
                <section className="collag">
                    <div className="horario_location" id="option_2023" onClick={Mostrar_estadistica}>
                        <a className="Barra-lateral_link">Año 2023</a>
                        <img src={arrow} className="Barra-lateral_arrow"/>
                    </div>
                    <div className="estadis" id="estadisticas_noviembre" ref={ref2023}>
                        <div className="option_funtion">
                            <div className="grafica"><LinesChart/></div>
                        </div>
                        <h6 className="titu_masp">Productos mas vendidos</h6>
                        <div className="mas-vendidos">
                            {Mas_Vendidos.map((ventas, index) => {
                                return(
                                    <div className="ventas-contenedor" style={{backgroundColor: (ventas.color)}} key={index}>
                                        <div className="venta-texto">
                                            <img className="venta_img" src={ventas.img} alt="eli" />
                                            <h6>{ventas.nombre}</h6>
                                            <p>2150 Libras Vendidas: </p>
                                            <p>$4300000</p>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </section>
                <section className="collag">
                    <div className="horario_location" id="option_2022" onClick={Mostrar_estadistica}>
                        <a className="Barra-lateral_link">Año 2022</a>
                        <img src={arrow} className="Barra-lateral_arrow"/>
                    </div>
                    <div className="estadis" id="estadisticas_noviembre" ref={ref2022}>
                        <div className="option_funtion">
                            <div className="grafica"><LinesChart/></div>
                        </div>
                        <h6 className="titu_masp">Productos mas vendidos</h6>
                        <div className="mas-vendidos">
                            {Mas_Vendidos.map((ventas, index) => {
                                return(
                                    <div className="ventas-contenedor" style={{backgroundColor: (ventas.color)}} key={index}>
                                        <div className="venta-texto">
                                            <img className="venta_img" src={ventas.img} alt="eli" />
                                            <h6>{ventas.nombre}</h6>
                                            <p>2150 Libras Vendidas: </p>
                                            <p>$4300000</p>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </section>
                <section className="collag">
                    <div className="horario_location" id="option_2021" onClick={Mostrar_estadistica}>
                        <a className="Barra-lateral_link">Año 2021</a>
                        <img src={arrow} className="Barra-lateral_arrow"/>
                    </div>
                    <div className="estadis" id="estadisticas_noviembre" ref={ref2021}>
                        <div className="option_funtion">
                            <div className="grafica"><LinesChart/></div>
                        </div>
                        <h6 className="titu_masp">Productos mas vendidos</h6>
                        <div className="mas-vendidos">
                            {Mas_Vendidos.map((ventas, index) => {
                                return(
                                    <div className="ventas-contenedor" style={{backgroundColor: (ventas.color)}} key={index}>
                                        <div className="venta-texto">
                                            <img className="venta_img" src={ventas.img} alt="eli" />
                                            <h6>{ventas.nombre}</h6>
                                            <p>2150 Libras Vendidas: </p>
                                            <p>$4300000</p>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}
export default Estadistica