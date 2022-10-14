import {BrowserRouter , Routes, Route} from 'react-router-dom'
import Footer from './components/common/Footer';
import Menu from './components/common/Menu';
import Administrador from './components/views/Administrador';
import Error404 from './components/views/Error404';
import Inicio from './components/views/Inicio';
import 'bootstrap/dist/css/bootstrap.min.css'
import DetalleProducto from './components/views/productos/DetalleProducto';
import CrearProducto from './components/views/productos/CrearProducto';
import EditarProducto from './components/views/productos/EditarProducto';
import './App.css'
import Login from './components/views/productos/Login';
import Registrarse from './components/views/productos/Registrarse';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
       <Menu></Menu>
       <Routes>
        {/*las rutas son siempre nombre de dominio + path */}
        <Route exact path='/' element={<Inicio></Inicio>}></Route>
        <Route exact path='/administrador' element={<Administrador/>}></Route>
        <Route exact path='/detalleProducto' element={<DetalleProducto/>}></Route>
        <Route exact path='/crearProducto' element={<CrearProducto/>}></Route>
        <Route exact path='/editarProducto' element={<EditarProducto/>}></Route>
        <Route exact path='/login' element={<Login/>}></Route>
        <Route exact path='/registrarse' element={<Registrarse/>}></Route>
        <Route exact path='*' element={<Error404/>}></Route>
       </Routes>
       <Footer></Footer>
     </BrowserRouter>
    </div>
  );
}

export default App;
