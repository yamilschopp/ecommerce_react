import Cartwidget from './Cartwidget';
import './Navbar.css';

function Navbar() {
  return (
    <header className="navbar">
      <h1>GOOD PASTAS</h1>
      <button>Home</button>
      <p>Nosotros</p>
      <a src="#">Tienda</a>
      <Cartwidget />
    </header>
  );
}

export default Navbar;