import { useSelector } from 'react-redux'
import { Outlet, Navigate } from "react-router-dom";
import Navbar from "../componentes/Navbar/Navbar"

const ProtectedRoutes = () => {
  const isUserLogged = useSelector(state => state.login.logeado)

  if (!isUserLogged) { // redirigir a pagina publica
    return <Navigate to="/login" />;
  }

  return ( // redirigir a paginas privadas
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default ProtectedRoutes;