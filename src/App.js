// import logo from './logo.svg';
import './App.css';
import ItemListContainer from './components/ItemListContainer';
import Navbar from './components/Navbar';
import Contador from './components/Contador';

function App() {
  return (
    <div>
      <Contador stock={6}/>
      {/* <Navbar /> */}
      {/* <ItemListContainer /> */}
    </div>
  );
}

export default App;
