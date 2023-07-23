import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import { AuthProvider } from "./context/AuthContext";
import Landingpage from "./pages/Landingpage";
import Login from "./pages/Login";
import { PrivateRoute } from "./Routes/PrivateRoute";
import Favourites from './components/Favourites';
import Modal from './components/Modal';
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
    <Route path="/search/photos/:id" element={<Modal />} />
        <Route path="/" element={<PrivateRoute><Favourites /></PrivateRoute>} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
