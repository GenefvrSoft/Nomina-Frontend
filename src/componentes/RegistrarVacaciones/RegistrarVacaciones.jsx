import style from './RegistrarVacaciones.module.css'

function RegistrarVacaciones() {
  return (
    <main>
    <div className={style.reg_vacaciones}>
    <div className={style.asing_empleado}>
        <h3>Asignar a Departamento</h3>
        <select className={style.select1} placeholder="Departamento">
            <option value="1">DEPARTAMENTO</option>
        </select>
    </div>
    <section>
        <p>Monto</p><input className={style.input} type="number"/> 
    </section>
    <div>
        <button href="" type="submit" className={style.btn1}>Registrar Vacaciones</button>
    </div>
    </div>
</main>
  )
}

export default RegistrarVacaciones