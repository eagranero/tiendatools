import CartWidget from "./CartWidget"


const NavBar = (props) => {
    return(
        <>
        <div className="bg-base-100">
        <div className="px-20 navbar  items-center">
            <div className="flex-none">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabindex="0" className="btn btn-outline btn-secondary btn-circle mx-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                        </label>
                        <ul tabindex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li>Herramientas Manuales</li>
                            <li>Herramientas Electricas</li>
                            <li>Herramientas Neumaticas</li>
                            <li>Arma tu Taller</li>
                            <li>Accesorios</li>
                            <li>Ilumiancion</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="flex-1">
                <label className="font-bold normal-case text-xl">Categorias</label>
            </div>
            <div className="flex-none">
                <div className="dropdown dropdown-end">
                    <CartWidget/>
                </div>
                <div className="dropdown dropdown-end">
                    <label tabindex="0" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img src="https://api.lorem.space/image/face?hash=33791" />
                        </div>
                    </label>
                    <ul tabindex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li>
                            <a className="justify-between">
                             Profile
                            <span className="badge">New</span>
                            </a>
                        </li>
                        <li><a>Settings</a></li>
                        <li><a>Logout</a></li>
                    </ul>
                </div>
            </div>
        </div>
        </div>
        </>
    )
}

export default NavBar


