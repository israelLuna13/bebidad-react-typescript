import { ChangeEvent, useEffect, useMemo,useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { useAppStore } from "../store/useAppStore";
export default function Header() {
//state local , sera un objeto
  const [searchFiltres,setSearchFilters]=useState({
    ingredient:'',
    category:''
  })
  //obtenemos la ruta actual
  const { pathname } = useLocation();
  //validamos si si la ruta acutal es home
  const isHome = useMemo(() => pathname === "/", [pathname]);
  //accion 
  const fetchCategories = useAppStore((state)=>state.fetchCategories)
  const categorias =useAppStore((state)=>state.categories)
  const searchRecipies =useAppStore((state)=>state.searchRecipies)
  const showNotificacion =useAppStore((state)=>state.showNotification)

  useEffect(() => {
    fetchCategories();
}, []); // solo se llama una vez al montar el componente


//validamos los campos del formulario
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault()
    //validar 
    if(Object.values(searchFiltres).includes(''))
    {
      //mostramos la notificacion
      showNotificacion({
        text:'Todos los campos son obligatorios',
        error:true
      })
      return
    }
    //consultar las recetas y le pasamos nuestro state
    searchRecipies(searchFiltres)
  }

  //escribimos en el state cuado se escriba algo en los inputs
  const handleChange =(e:ChangeEvent<HTMLInputElement>| ChangeEvent<HTMLSelectElement>)=>{
    setSearchFilters({
      ...searchFiltres,
      [e.target.name]:e.target.value
    })
  }
  return (
    <header className={isHome ? 'bg-header bg-center bg-cover' : 'bg-slate-800'}>
      <div className="mx-auto container px-5 py-16">
        <div className="flex justify-between items-center">
          <div>
            <img src="/logo.svg" alt="logotipo" className="w-32" />
          </div>

          <nav className="flex gap-4">
            {/* con navLink detectamos cual vista esta activa  */}
            <NavLink  to="/" className={({ isActive }) => isActive ? "text-orange-500 uppercase font-bold" : " text-white uppercase font-bold"} >  Inicio </NavLink>
            <NavLink to="/favoritos"  className={({ isActive }) => isActive ? "text-orange-700 uppercase font-bold" : "text-white uppercase font-bold" }> Favoritos </NavLink>
<<<<<<< HEAD
             <NavLink to="/generate"  className={({ isActive }) => isActive ? "text-orange-700 uppercase font-bold" : "text-white uppercase font-bold" }> Generar con IA </NavLink>
=======
>>>>>>> 5d4a34a43f783bc6dbc6c79871fa51a3946c0a26
          </nav>
        </div>

        {isHome && (
          <form className="md:w-1/2 2xl:w-1/3 bg-orange-400 my-32 p-10 rounded-lg shadow space-y-6" onSubmit={handleSubmit}>
            <div className="space-y-4">
              <label
                htmlFor="ingredient"
                className="block text-white uppercase font-extrabold text-lg"
              >
                Nombre o ingredientes
              </label>

              <input
                type="text"
                id="ingredient"
                name="ingredient"
                className="p-3 w-full rounded-lg focus:outline-none"
                placeholder="Nombre o ingrediante. Ej. Vodka. Tequila"
                onChange={handleChange}
                value={searchFiltres.ingredient}
              />
            </div>

            <div className="space-y-4">
              <label
                htmlFor="category"
                className="block text-white uppercase font-extrabold text-lg"
              >
                Categoria
              </label>

              <select
                id="category"
                name="category"
                className="p-3 w-full rounded-lg focus:outline-none"
                onChange={handleChange}
                value={searchFiltres.category}
              >
                <option value="">--Seleccione--</option>
                {categorias.drinks.map(cat=>(
                  <option value={cat.strCategory} key={cat.strCategory}>
                    {cat.strCategory}
                  </option>
                ))}
              </select>
            </div>
            <input
              type="submit"
              value="Buscar recetas"
              className="cursor-pointer bg-orange-800 hover:bg-orange-900 text-white font-extrabold w-full p-2 rounded-lg uppercase"
            />
          </form>
        )}
      </div>
    </header>
  );
}
