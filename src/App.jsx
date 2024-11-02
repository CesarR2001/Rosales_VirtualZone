import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import NavbarComponent from './components/NavbarComponent'
import ItemListContainer from './components/ItemListContainer'


function App() {
  return (
    <div>
          <NavbarComponent/>
          <ItemListContainer greeting = 'Bienvenido a Virtual zone'/>
    </div>
  )
}

export default App
