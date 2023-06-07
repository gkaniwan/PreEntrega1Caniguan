import ItemListContainer from './componentes/ItemListContainer/ItemListContainer'
import NavBar from './componentes/NavBar/NavBar'

import './App.css'

function App() {
  return (
    <>
      <NavBar />
      <br />
      <ItemListContainer greeting={"Bienvenido a la tienda de Cafe"} />
    </>
  )
}

export default App


