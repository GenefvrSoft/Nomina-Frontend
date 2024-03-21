import style from './ListaAsignaciones.module.css'
import ImagenPerfil from '../../assets/fotoperfil.png'
import BotonModificar from '../../assets/modificar.png'


function ListaAsignaciones() {
  return (
    <main>
        <div className={style.content1}>
            <h1>Asignaciones</h1>
            <div className={style.buscador}>
                <input className={style.input} type="text" placeholder="Buscar"/>
				<table className={style.lista1} cellspacing="0">
                    <tr className={style.title}><td>FOTO</td><td>ID</td><td>NOMBRE</td><td>MONTO</td><td>ACCIONES</td></tr>
                    <tr><td><img src={ImagenPerfil}/></td><td>001</td><td>BENITO</td><td>10,000$</td><td><img src={BotonModificar}/></td></tr>                        
                </table>
                <div className={style.pag}>
                    {"<"} <p>1</p> {">"}
                </div>
            </div>
        </div>
    </main>
  )
}

export default ListaAsignaciones