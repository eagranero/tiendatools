import CartWidget from "./CartWidget"


const NavBar = (props) => {
    return(
        <>
        <div class="bg-base-100">
        <div class="px-20 navbar  items-center">
            <div class="flex-none">
                <div class="navbar-start">
                    <div class="dropdown">
                        <label tabindex="0" class="btn btn-outline btn-secondary btn-circle mx-2">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                        </label>
                        <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
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
            <div class="flex-1">
                <label class="font-bold normal-case text-xl">Categorias</label>
            </div>
            <div class="flex-none">
                <div class="dropdown dropdown-end">
                    <CartWidget/>
                </div>
                <div class="dropdown dropdown-end">
                    <label tabindex="0" class="btn btn-ghost btn-circle avatar">
                        <div class="w-10 rounded-full">
                            <img src="https://api.lorem.space/image/face?hash=33791" />
                        </div>
                    </label>
                    <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li>
                            <a class="justify-between">
                             Profile
                            <span class="badge">New</span>
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


