import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import { AuthProvider } from "./context/AuthContext";
import Landingpage from "./pages/Landingpage";
import Login from "./pages/Login";
import { PrivateRoute } from "./Routes/PrivateRoute";
import Details from "./components/Details";
import Favourites from './components/Favourites';

function App() {
  return (
    <AuthProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/Landingpage"
          element={
            <PrivateRoute>
              <Landingpage />
            </PrivateRoute>
          }
        />
        <Route path="/items/:id" element={<Details />} />
        <Route path="/Favourites" element={<Favourites />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
