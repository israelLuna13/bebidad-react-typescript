import {BrowserRouter,Route,Routes} from 'react-router-dom'
import IndexPage from './views/IndexPage'
import FavoritosPage from './views/FavoritosPage'
import Layout from './layout/Layout'
export default function AppRouter() {
  return (
    <BrowserRouter>
    <Routes>
        {/* en el layout esta el header y al ser padre de estas rutas, estas heredan lo que este en layout */}
        <Route element={<Layout/>}>      
      {/* aqui iran las rutas de nuestra aplicacion */}
        <Route path='/' element={<IndexPage/>}/>
        <Route path='/favoritos' element={<FavoritosPage/>}/>
        </Route>

    </Routes>
    </BrowserRouter>
  )
}
