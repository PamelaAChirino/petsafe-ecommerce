import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer/ItemDetailContainer";
import NotFound from "./components/NotFound/NotFound";
import Cart from "./components/Cart/Cart";
import { CartProvider } from "./context/CartContext";
import Checkout from "./components/Checkout/Checkout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="container-app">
      <BrowserRouter>
        <CartProvider>
          <NavBar />
          <ToastContainer theme="dark" />

          <Routes className="container-app">
            <Route path="/" element={<ItemListContainer />} />
            <Route
              path="/category/:idCategory"
              element={<ItemListContainer />}
            />
            <Route
              path="/detail/:idProduct"
              element={<ItemDetailContainer />}
            />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            {/* Ruta 404 */}
            // <Route path="*" element={<NotFound />} />
          </Routes>
        </CartProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
