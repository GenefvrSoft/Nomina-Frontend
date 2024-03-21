import style from './ListaDeducciones.module.css'
import BotonModificar from '../../assets/modificar.png'
import ImagenPerfil from '../../assets/fotoperfil.png'

function ListaDeducciones() {
  return (
    <main>
        <div className={style.content1}>
            <h1>Deducciones</h1>
            <div className={style.buscador}>
                <input className={style.input} type="text" placeholder="Buscar"/>
				<table className={style.lista1} cellspacing="0">
                    <tr className={style.title}><td>FOTO</td><td>ID</td><td>NOMBRE</td><td>MONTO</td><td>ACCIONES</td></tr>
                    <tr><td><img src={ImagenPerfil} alt=""/></td><td>001</td><td>BENITO</td><td>10,000$</td><td><img src={BotonModificar} alt=""/></td></tr>                        
                </table>
                <div className={style.pag}>
                    {"<"} <p>1</p> {">"}
                </div>
            </div>
        </div>
    </main>
  )
}

export default ListaDeducciones