
import data from "./data";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from "./screens/ProductScreen";

function App() {
  return (
    <BrowserRouter>
    <div>
      <header>
        <a href="/">shoppee</a>
      </header>
      <main>
        <Routes>
          <Route path="/product/:slug" element={<ProductScreen />} />
          <Route path="/" element={<HomeScreen />} />
        </Routes>
        
      </main>
    </div>
    </BrowserRouter>
  );
}

export default App;
