import { UserAuth } from "../context/AuthContext"
import {Link} from "react-router-dom";

const Navbar = () => {
  const { currentUser, logout } = UserAuth();

  const handleLogout = async () => {
    try {
      await logout();
    } catch(error) {
      console.log(error)
    }
  }

  return (
    <div className="navbar fixed z-10 backdrop-blur-xl bg-white/30 shadow-md">
      <div className="containerWrap flex justify-between">
        <a className="btn btn-ghost normal-case text-white text-xl">Homepage</a>
        <Link to="/Favourites" className="btn btn-ghost normal-case text-white text-xl">My Favourite Images</Link>
        {currentUser ? <button className="text-white text-bold" onClick={handleLogout}>Logout</button> : ""}
      </div>
    </div>
  )
}

export default Navbar