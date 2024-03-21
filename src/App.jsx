// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Asignaciones from './componentes/Asignaciones/Asignaciones'
import DatosEmpresa from './componentes/DatosEmpresa/DatosEmpresa'
import Deducciones from './componentes/Deducciones/Deducciones'
import Departamentos from './componentes/Departamentos/Departamentos'
import EditarEmpleado from './componentes/EditarEmpleado/EditarEmpleado'
import HistoricoPagos from './componentes/HistoricoPagos/HistoricoPagos'
import InformacionPerfil from './componentes/InformacionPerfil/InformacionPerfil'
import InicioAdmin from './componentes/InicioAdmin/InicioAdmin'
import InicioUsuario from './componentes/InicioUsuario/InicioUsuario'
import ListaAsignaciones from './componentes/ListaAsignaciones/ListaAsignaciones'
import ListaDeducciones from './componentes/ListaDeducciones/ListaDeducciones'
import ListaEmpleados from './componentes/ListaEmpleados/ListaEmpleados'
import IniciarSesion from './componentes/Login/IniciarSesion'
import MenuLateralNav from './componentes/MenuLateralNav/MenuLateralNav'
import OcultarEmpleado from './componentes/OcultarEmpleado/OcultarEmpleado'
import RegistrarEmpleado from './componentes/RegistrarEmpleado/RegistrarEmpleado'
import RegistrarPago from './componentes/RegistrarPago/RegistrarPago'
import RegistrarVacaciones from './componentes/RegistrarVacaciones/RegistrarVacaciones'
import Vacaciones from './componentes/Vacaciones/Vacaciones'

function App() {

  return (
    <>
     <MenuLateralNav/>
     <RegistrarVacaciones/>
     {/* <Vacaciones/> */}
     {/* <RegistrarPago/> */}
     {/* <Departamentos/> */}
     {/* <OcultarEmpleado/> */}
     {/* <EditarEmpleado/> */}
     {/* <RegistrarEmpleado/> */}
     {/* <ListaDeducciones/> */}
     {/* <ListaAsignaciones/> */}
     {/* <ListaEmpleados/>  */}
     {/* <InicioAdmin/> */}
     {/* <Deducciones/> */}
     {/* <Asignaciones/> */}
     {/* <HistoricoPagos/> */}
     {/* <InformacionPerfil/> */}
     {/* <DatosEmpresa/>  */}
     {/* <InicioUsuario/> */}
     {/* <IniciarSesion/> */}
    </>
  )
}

export default App
