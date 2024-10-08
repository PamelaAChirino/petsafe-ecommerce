import { useState } from 'react'
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <NavBar></NavBar>
      <ItemListContainer title="Bienvenidos a petsafe, insumos de salud y productos de mascotas" />
      <ItemListContainer title="Bienvenidos a petsafe, insumos de salud y productos de mascotas" />
      

    </div>
    
  )
}

export default App
