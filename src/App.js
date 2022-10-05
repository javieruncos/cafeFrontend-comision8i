import {BrowserRouter , Routes, Route} from 'react-router-dom'
import Footer from './components/common/Footer';
import Menu from './components/common/Menu';
import Administrador from './components/views/Administrador';
import Error404 from './components/views/Error404';
import Inicio from './components/views/Inicio';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div className="App">
     <BrowserRouter>
       <Menu></Menu>
       <Routes>
        {/*las rutas son siempre nombre de dominio + path */}
        <Route exact path='/' element={<Inicio></Inicio>}></Route>
        <Route exact path='/administrador' element={<Administrador/>}></Route>
        <Route exact path='*' element={<Error404/>}></Route>
       </Routes>
       <Footer></Footer>
     </BrowserRouter>
    </div>
  );
}

export default App;
