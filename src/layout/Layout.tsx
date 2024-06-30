import {Outlet} from 'react-router-dom'
import Header from '../components/Header'
export default function Layout() {
  return (
    <>
    {/* los componentes que esten aqui , se pasaran a sus rutas hijas */}
    <Header/>
         <main className='container mx-auto py-16'>
    <Outlet/>

    </main>
   
    </>

  )
}
