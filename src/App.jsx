import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import NavbarComponent from './components/NavbarComponent'
import ItemListContainer from './components/ItemListContainer'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import ItemDetailContainer from './components/ItemDetailContainer'
import { CartProvider } from './context/CartContext'
import CartView from './components/CartView'
import Checkout from './components/Checkout'


function App() {
  return (
    <CartProvider>
              <BrowserRouter>
          <NavbarComponent/>
          <Routes>
              <Route path='/' element={<ItemListContainer greeting='Bienvenido a Virtual zone'/>}/> 
              <Route path='/product/:category' element={<ItemListContainer greeting='Bienvenido a Virtual zone'/>}/>
              <Route path='/item/:id' element={<ItemDetailContainer/>}/> 
              <Route path='/cart' element={<CartView/>}/>
              <Route path='/checkout' element={<Checkout/>}/>
              {/* con lo : se creo una ruta dinamica */}
          </Routes>
      </BrowserRouter>
      </CartProvider>
  )
}

export default App
