import style from './Vacaciones.module.css'
import ImagenPerfil from '../../assets/fotoperfil.png'

function Vacaciones() {
  return (
    <main>
        <div className={style.vacaciones}>
        <div className={style.asing_empleado}>
            <h3>Asignar a Empleado</h3>
            <select className={style.select1} placeholder="Empleado">
                    <option value="1">EMPLEADO</option>
            </select>
        </div>
        <div>
            <button href="" type="submit" className={style.btn1_der}>Registrar</button>
        </div>
            <table className={style.lista1} cellspacing="0">
            <tr className={style.title}><td>FOTO</td><td>ID</td><td>NOMBRE</td><td>AREA</td><td>MONTO</td></tr>
            <tr><td><img src={ImagenPerfil} alt=""/></td><td>001</td><td>BENITO</td><td>MANAGEMENT</td><td>5,000USD$</td></tr>                        
            </table>
        </div>
    </main>
  )
}

export default Vacaciones