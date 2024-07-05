import {Outlet} from 'react-router-dom'
import Header from '../components/Header'
import Modal from '../components/Modal'
import { useAppStore } from '../store/useAppStore'
import { useEffect } from 'react'
import Notification from '../components/Notification'
export default function Layout() {
  const loadFromStorage = useAppStore((state)=>state.loadFromStorage)

  //cuando cargue nuestra aplicacion ponemos en el state de fav lo que este en el localstorage
  useEffect(()=>{
    loadFromStorage()
  },[])
  return (
    <>
    {/* los componentes que esten aqui , se pasaran a sus rutas hijas */}
    <Header/>
         <main className='container mx-auto py-16'>
    <Outlet/>

    </main>

    <Modal/>
    <Notification/>
   
    </>

  )
}
