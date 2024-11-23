import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import NavbarComponent from './components/NavbarComponent'
import ItemListContainer from './components/ItemListContainer'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import ItemDetailContainer from './components/ItemDetailContainer'

function App() {
  return (
    <BrowserRouter>
    <NavbarComponent/>
    <Routes>
        <Route path='/' element={<ItemListContainer greeting='Bienvenido a Virtual zone'/>}/> 
        <Route path='/product/:category' element={<ItemListContainer greeting='Bienvenido a Virtual zone'/>}/>
        <Route path='/item/:id' element={<ItemDetailContainer/>}/> 
        {/* con lo : se creo una ruta dinamica */}
    </Routes>
</BrowserRouter>
  )
}

export default App
