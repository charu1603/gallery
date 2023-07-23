import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

const Login = () => {
  const navigate = useNavigate();
  const { currentUser, signinWithGoogle } = UserAuth();

  const handleLogin = async () => {
    try {
      await signinWithGoogle();
    } catch(error) {
      console.log(error)
    }
  }

  useEffect(() => {
    if(currentUser) {
      navigate("/Landingpage")
    }
  }, [currentUser]);

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w">
        
          <h1 className="py-5 text-7xl font-bold">
         Discover over 2000,000 <br></br> free stock images
          </h1>
          <button  onClick={handleLogin} className="btn bg-slate-600">Login With Google</button>
        </div>
      </div>
    </div>
  );
};

export default Login;