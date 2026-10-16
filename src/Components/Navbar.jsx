import { NavLink } from "react-router-dom";

function Navbar(){

  return(
    <div className="bg-gray-900 text-white p-4">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <NavLink to="/" className="text-2xl font-bold">
        Hamnava App 
        </NavLink>

        <div className="flex items-center gap-6">

          <NavLink to="/about" className={({ isActive }) => `${isActive ? `text-blue-500` : `hover:text-gray-300`}`}>
          About us
          </NavLink>

          <NavLink to="/services" className={({ isActive }) => `${isActive ? `text-blue-500` : `hover:text-gray-300`}`}>
          Services
          </NavLink>



         <NavLink to="/users" className={({ isActive }) => `${isActive ? `text-blue-500` : `hover:text-gray-300`}`}>
          Users
          </NavLink>




        </div>
      </div>
    </div>

  )
}

export default Navbar;