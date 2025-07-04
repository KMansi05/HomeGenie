
import { Link,useNavigate } from "react-router-dom";
import SearchBar from "../searchbar/SearchBar";



const Navbar = () => {
    // get user from localStorage 
    const user = JSON.parse(localStorage.getItem('users'));

    // navigate 
    const navigate = useNavigate();

    // logout function 
    const logout = () => {
        localStorage.clear('users');
        navigate("/login")
    }
  // navList Data
  const navList = (
    <ul className="flex space-x-3 text-white font-medium text-md px-5 ">
      {/* Home */}
      <li>
        <Link to={'/'}>Home</Link>
      </li>

      {/* All Product */}
      <li>
        <Link to={'/allproduct'}>Services</Link>
      </li>

       {/* ContactUs */}
       <li>
       
        <Link to={'/contactUs'}>Contact Us</Link>
                
        </li>
      {/* Signup */}
      {!user ? <li>
                <Link to={'/signup'}>Signup</Link>
            </li> : ""}
      {/* Signup */}
      {!user ? <li>
                <Link to={'/login'}>Login</Link>
            </li> : ""}
      {/* User */}

      {user?.role === "user" && <li>
                <Link to={'/user-dashboard'}>User</Link>
            </li>}

             {/* Cart */}
       <li>
                <Link to={'/cart'}>
                    Cart(0)
                </Link>
            </li>
     {/* Admin */}
     {user?.role === "admin" && <li>
                <Link to={'/admin-dashboard'}>Admin</Link>
            </li>}
      {/* logout */}
      {user && <li className=" cursor-pointer" onClick={logout}>
                logout
            </li>}
    </ul>
  )
  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80" >
      {/* main  */}
      <div className="lg:flex lg:justify-between items-center py-3 lg:px-3 ">
        {/* left  */}
        <div className="left py-3 lg:py-0">
          <Link to={'/'}>
            <h2 className=" font-bold text-orange-700 text-2xl text-center">HomeGenie</h2>
          </Link>
        </div>

        {/* right  */}
        <div className="right flex justify-center mb-4 lg:mb-0 ">
          {navList}
        </div>

        {/* Search Bar  */}
        <SearchBar />
      </div>
    </nav>
  );
}

export default Navbar;

