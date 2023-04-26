import './App.css';
import Navbar from './components/NavBar';
import Cards from './components/Cards';
import Cabecera from './components/Cabecera';
import ItemListContainer from './components/ItemListContainer';
import Carrousel from './components/Carrousel'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Cabecera />
        <Navbar />
        <ItemListContainer texto='Bienvenido a Tienda Airsoft' className="tituloAirsoft" />
        <Carrousel />
        <Cards  />
      </header>
    </div>
  );
}

export default App;
