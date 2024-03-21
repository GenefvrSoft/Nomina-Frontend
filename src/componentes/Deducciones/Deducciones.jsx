import style from './Deducciones.module.css'

function Deducciones() {
  return (
    <main>
    <div className={style.deducciones}>
    <div className={style.asing_empleado}>
        <h3>Asignar a Empleado</h3>
        <select className={style.select1} placeholder="Empleado">
            <option value="1">EMPLEADO</option>
        </select>
    </div>
    <section>
        <p>Seguro Social</p><input className={style.input} type="checkbox"/> 
        <p>Impuesto sobre la renta</p><input className={style.input} type="checkbox"/>
        <p>Fondo de Ahorro de Vivienda</p><input className={style.input} type="checkbox"/>
        <p>Fondo de Pensión</p><input className={style.input} type="checkbox"/>
        <p>Convenio de Credito Comercial</p><input className={style.input} type="checkbox"/>
        <p>Convenio de Credito Remodelación</p><input className={style.input} type="checkbox"/>
    </section>
    <div>
        <button href="" type="submit" className={style.btn1}>Registrar</button>
    </div>
    </div>
</main>
  )
}

export default Deducciones