import './App.css';
import Navbar from './components/NavBar';
import Cabecera from './components/Cabecera';
import ItemListContainer from './components/ItemListContainer';
import Carrousel from './components/Carrousel'
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter ,Routes, Route } from 'react-router-dom';
import Cart from './components/Cart';
import Galeria from './pages/Galeria';
import QueEsAirsoft from './pages/queEsAirsoft';
import Footer from './components/Footer';




function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
        <Cabecera />
        <Navbar />
        <Carrousel />
        <Routes>
        <Route path='/' element= { <QueEsAirsoft /> } ></Route>
          <Route path='/categoria/:categoriaId' element= { <ItemListContainer texto='Estos son nuestros productos' className="tituloAirsoft" /> } ></Route>
          <Route path='/galeria' element= {<Galeria /> } ></Route>
          <Route path='/detalle/:detalleId' element= {<ItemDetailContainer />  } ></Route>
          <Route path='/cart' element= {<Cart />  } ></Route>
        </Routes>
        </BrowserRouter>
        <Footer />
      </header>
    </div>
  );
}

export default App;
