import style from './ListaEmpleados.module.css'
import ImagenPerfil from '../../assets/fotoperfil.png'
import BotonModificar from '../../assets/modificar.png'
import BotonOcultar from "../../assets/ocultar.png"

function ListaEmpleados() {
  return (
    <main>
        <div className={style.content1}>
            <h1>Lista de Empleados</h1>
            <button href=".." type="submit" className={style.btn2}>Añadir Empleado</button>
            <div className={style.buscador}>
                <input className={style.input} type="text" placeholder="Buscar por nombre o id"/>
				<table className={style.lista1} cellspacing="0">
				    <tr className={style.title}><td>FOTO</td><td>ID</td><td>NOMBRE</td><td>DETALLES</td><td>ACCIONES</td></tr>
				    <tr><td><img src={ImagenPerfil} alt='..'/></td><td>001</td><td>BENITO</td><td>Ver Detalles</td><td><img src={BotonModificar} alt='..'/><img src={BotonOcultar} alt=".."/></td></tr>
				</table>
                <div className={style.pag}>
                    {"<"} <p>1</p> {">"}
                </div>
            </div>
        </div>
    </main>
  )
}

export default ListaEmpleados