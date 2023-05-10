import './App.css';
import Navbar from './components/NavBar';
import Cabecera from './components/Cabecera';
import ItemListContainer from './components/ItemListContainer';
import Carrousel from './components/Carrousel'
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter ,Routes, Route } from 'react-router-dom';
import Cart from './components/Cart';
import QueEsArisoft from './components/QueEsAirsoft';
import Galeria from './components/Galeria';




function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
        <Cabecera />
        <Navbar />
        <Routes>
        <Route path='/' element= { <QueEsArisoft /> } ></Route>
          <Route path='/categoria/:categoriaId' element= { <ItemListContainer texto='Bienvenido a Tienda Airsoft' className="tituloAirsoft" /> } ></Route>
          <Route path='/galeria' element= {<Galeria /> } ></Route>
          <Route path='/detalle' element= {<ItemDetailContainer />  } ></Route>
          <Route path='/cart' element= {<Cart />  } ></Route>
        </Routes>
        <Carrousel />
        </BrowserRouter>
        
      </header>
    </div>
  );
}

export default App;
