
import './App.css'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Vacaciones from './componentes/Vacaciones/Vacaciones'
import DatosEmpresa from './componentes/DatosEmpresa/DatosEmpresa'
import Departamentos from './componentes/Departamentos/Departamentos'
import HistoricoPagos from './componentes/HistoricoPagos/HistoricoPagos'
import InicioAdmin from './componentes/InicioAdmin/InicioAdmin'
import ListaAsignaciones from './componentes/ListaAsignaciones/ListaAsignaciones'
import ListaDeducciones from './componentes/ListaDeducciones/ListaDeducciones'
import ListaEmpleados from './componentes/ListaEmpleados/ListaEmpleados'
import MenuLateralNav from './componentes/MenuLateralNav/MenuLateralNav'
// import Asignaciones from './componentes/Asignaciones/Asignaciones'
// import Deducciones from './componentes/Deducciones/Deducciones'
// import EditarEmpleado from './componentes/EditarEmpleado/EditarEmpleado'
// import InformacionPerfil from './componentes/InformacionPerfil/InformacionPerfil'
// import InicioUsuario from './componentes/InicioUsuario/InicioUsuario'
// import IniciarSesion from './componentes/Login/IniciarSesion'
// import OcultarEmpleado from './componentes/OcultarEmpleado/OcultarEmpleado'
// import RegistrarEmpleado from './componentes/RegistrarEmpleado/RegistrarEmpleado'
// import RegistrarPago from './componentes/RegistrarPago/RegistrarPago'
// import RegistrarVacaciones from './componentes/RegistrarVacaciones/RegistrarVacaciones'

function App() {

  return (
    <Router>
     <MenuLateralNav/>
     <Routes>
      {/* path="/dashboard-admin */}
      <Route path="/" element={ <InicioAdmin/>} />
      <Route path="/datos-empresa" element={<DatosEmpresa/>} />
      <Route path="/lista-empleados" element={<ListaEmpleados/>} />
      <Route path="/departamentos" element={<Departamentos/>} />
      <Route path="/lista-asignaciones" element={<ListaAsignaciones/>} />
      <Route path="/lista-deducciones" element={<ListaDeducciones/>} />
      <Route path="/vacaciones" element={<Vacaciones/>} />
      <Route path="/pagos" element={<HistoricoPagos/>} />
     </Routes>
     {/* <RegistrarVacaciones/> */}
     {/* <Vacaciones/> */}
     {/* <RegistrarPago/> */}
     {/* <Departamentos/> */}
     {/* <OcultarEmpleado/> */}
     {/* <EditarEmpleado/> */}
     {/* <RegistrarEmpleado/> */}
     {/* <ListaDeducciones/> */}
     {/* <Deducciones/> */}
     {/* <Asignaciones/> */}
     {/* <InformacionPerfil/> */}
     {/* <DatosEmpresa/>  */}
     {/* <InicioUsuario/> */}
     {/* <IniciarSesion/> */}
    </Router>
  )
}

export default App
