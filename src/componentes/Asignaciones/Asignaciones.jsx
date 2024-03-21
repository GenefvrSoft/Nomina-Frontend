import style from './Asignaciones.module.css'

function Asignaciones() {
  return (
    <main>
        <div className={style.asignaciones}>
            <div className={style.asing_empleado}>
                <h3>Asignar a Empleado</h3>
                <select className={style.select1} placeholder="Empleado">
                    <option value="1">EMPLEADO</option>
                </select>
            </div>
                <h2>Primas</h2>
            <section className={style.option_p}>
            <div>
                <p>Hogar</p><input className={style.input} type="checkbox"/> 
                <p>Hijos</p><input className={style.input} type="checkbox"/>
                <p>Profesion</p><input className={style.input} type="checkbox"/>
            </div>
            <div>
                <p>Transporte</p><input className={style.input} type="checkbox"/>
                <p>Responsabilidad</p><input className={style.input} type="checkbox"/>
                <p>Salud Bucal</p><input className={style.input} type="checkbox"/>
            </div>
            </section>
                <h2>Bonos</h2>
            <section className={style.option_b}>
                <div>
                    <p>Fin de Año</p><input className={style.input} type="checkbox"/>
                    <p>Productividad</p><input className={style.input} type="checkbox"/>
                    <p>Bolsa de Comida</p><input className={style.input} type="checkbox"/>
                </div>
            </section>
            <div>
                <button href="" type="submit" className={style.btn1}>Registrar</button>
            </div>
        </div>
    </main>
  )
}

export default Asignaciones