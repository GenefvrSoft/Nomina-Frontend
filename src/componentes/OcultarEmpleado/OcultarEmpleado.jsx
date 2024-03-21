import style from './OcultarEmpleado.module.css'

function OcultarEmpleado() {
  return (
    <main>
        <div className={style.container_ocultar}>
            <h2>¿Desea dar de baja el empleado seleccionado?</h2>
            <button value="SI" className={style.btn2} >SI</button>
            <button value="NO" className={style.btn2} >NO</button>
        </div>
    </main>
  )
}

export default OcultarEmpleado