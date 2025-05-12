import {BrowserRouter,Route,Routes} from 'react-router-dom'
import IndexPage from './views/IndexPage'
import FavoritosPage from './views/FavoritosPage'
import Layout from './layout/Layout'
<<<<<<< HEAD
import GenerateAI from './views/GenerateIA'
=======
>>>>>>> 5d4a34a43f783bc6dbc6c79871fa51a3946c0a26
export default function AppRouter() {
  return (
    <BrowserRouter>
    <Routes>
        {/* en el layout esta el header y al ser padre de estas rutas, estas heredan lo que este en layout */}
        <Route element={<Layout/>}>      
      {/* aqui iran las rutas de nuestra aplicacion */}
        <Route path='/' element={<IndexPage/>}/>
        <Route path='/favoritos' element={<FavoritosPage/>}/>
<<<<<<< HEAD
        <Route path='/generate' element={<GenerateAI/>}/>
=======
>>>>>>> 5d4a34a43f783bc6dbc6c79871fa51a3946c0a26
        </Route>

    </Routes>
    </BrowserRouter>
  )
}
