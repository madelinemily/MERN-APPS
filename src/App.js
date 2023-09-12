import logo from './logo.svg';
import data from "./data";
import './App.css';

function App() {
  return (
    <div>
      <header>
        <a href="/">shoppee</a>
      </header>
      <main>
        <h1>Featured Products</h1>
        {
          data.products.map(product => (<div>
            <img src={product.image} alt={product.name} />
            <p>
              {product.name}
            </p>
            <p>
              {product.price}
            </p>
            </div>
          )) 
        }
      </main>
    </div>
  );
}

export default App;
