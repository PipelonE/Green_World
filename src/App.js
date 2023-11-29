
import {Regis} from "./Vistas/Registro";
import Login from "./Vistas/Inicio";
import Productos from "./Vistas/Products";
import Carrito from "./Vistas/Carrito";
import Nosotros from "./Vistas/Nosotros";
import Perfil from "./Vistas/Perfil";
import Productsadmi from "./Vistas/Admiproducts";
import Estadistica from "./Vistas/Estadisticas";
import Roles from "./Vistas/Roles";
import Perfiladmi from "./Vistas/Perfiladmi";
import { Routes, Route } from "react-router-dom";


function App() {
  return (
    <header>
      <Routes>
        <Route path="/" element={<Login/>}></Route>
        <Route path="/Registro" element={<Regis/>}></Route>
        <Route path="/Productos" element={<Productos/>}></Route>
        <Route path="/Carrito" element={<Carrito/>}></Route>
        <Route path="/quienes_somos" element={<Nosotros/>}></Route>
        <Route path="/Perfil" element={<Perfil/>}></Route>
        <Route path="/admiproductos" element={<Productsadmi/>}></Route>
        <Route path="/estadisticas" element={<Estadistica/>}></Route>
        <Route path="/Perfiladmi" element={<Perfiladmi/>}></Route>
        <Route path="/roles" element={<Roles/>}></Route>
      </Routes>
    </header>
    
  )
}

export default App;