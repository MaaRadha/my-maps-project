import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/map.jpg";
import { useAuth0 } from "@auth0/auth0-react";
const Navbar = () => {
  const { isAuthenticated, isLoading } = useAuth0();
  const { logout } = useAuth0();
  const { loginWithRedirect } = useAuth0();

  if (isLoading) return <div className="text-2xl">Loading...</div>;

  return (
    <header className="bg-white/10 backdrop-blur-lg border-b border-white/20 text-white p-4 shadow-lg">
      <div className="container mx-auto max-w-7xl flex justify-between items-center">
        <div className="mx-4">
          <img className="w-full max-w-[80px] p-2" src={logo} alt="Logo" />
        </div>
        <nav className="container mx-auto max-w-7xl">
          <ul className="flex space-x-6">
            {isAuthenticated ? (
              <li>
                <NavLink
                  to="/profile"
                  className="text-md font-bold transition-colors duration-200 text-[#52b9e0] hover:text-200"
                >
                  Profile
                </NavLink>
              </li>
            ) : (
              <li>
                <NavLink
                  to="/"
                  className="text-md font-bold transition-colors duration-200 text-[#52b9e0] hover:text-200"
                >
                  Home
                </NavLink>
              </li>
            )}
          </ul>
        </nav>
        {isAuthenticated ? (
          <button
            onClick={() => logout({ returnTo: window.location.origin })}
            className="px-6 py-2 rounded-lg ring hover:ring-red-500 text-white font-semibold bg-white/10 border border-white/30 backdrop-blur-md transition-all duration-300 hover:bg-red-500 hover:shadow-lg hover:-translate-y-1"
          >
            Logout
          </button>
        ) : (
          <button
            onClick={() => loginWithRedirect()}
            className="px-6 py-2 rounded-lg ring hover:ring-blue-500 text-white font-semibold bg-white/10 border border-white/30 backdrop-blur-md transition-all duration-300 hover:bg-blue-500 hover:shadow-lg hover:-translate-y-1"
          >
            Login
          </button>
        )}
      </div>
    </header>
  );
};

export default Navbar;
