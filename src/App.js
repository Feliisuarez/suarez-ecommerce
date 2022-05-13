import './App.css';
import Navbar from './components/navbar/Navbar.js';
import ItemListContainer from './components/ItemListContainer.js';

const App = () => {
  return (
    <div className="App">
      <Navbar></Navbar>
      <ItemListContainer greeting='Hola Mundo ItemListContainer'></ItemListContainer>
    </div>
  );
}

export default App;
