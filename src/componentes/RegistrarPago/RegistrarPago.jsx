import style from './RegistrarPago.module.css'

function RegistrarPago() {
  return (
    <main>
        <form action=".." method="post" className={style.formulario1}>
                <ul>
                    <li>
                        <label for="cedula">Cedula</label>
                        <input className={style.input} type="text" />
                    </li>
                    <li>
                        <label for="empleado">Asignar a Empleado</label>
                        <input className={style.input} type="text" />
                    </li>
                    <li>
                        <label for="fecha_cancelacion">Fecha de Cancelación</label>
                        <input className={style.input} type="date"/>
                    </li>
                    <li>
                        <label for="monto_asignacion">Monto Asignaciones</label>
                        <input className={style.input} type="number" />
                    </li>
                    <li>
                        <label for="monto_deduccion">Monto deducciones</label>
                        <input className={style.input} type="number" />
                    </li>
                    <li>
                        <label for="monto_vacaciones">Monto Vacaciones</label>
                        <input className={style.input} type="number" />
                    </li>
                    <li>
                        <label for="monto_total">Monto Total</label>
                        <input className={style.input} type="number" />
                    </li>
                    <li>
                        <label for="moneda">Moneda</label>
                        Dolar<input className={style.input} type="radio" value="0" name="moneda" />
                        Bolivares<input className={style.input} type="radio" value="1" name="moneda" />
                    </li>
                    <li>
                        <label for="concepto">Concepto</label>
                        <input className={style.input} type="text" />
                    </li>
                </ul>
                <div>
                    <button href="" type="submit" className={style.btn1}>Registrar Pago</button>
                </div>
            </form>
    </main>
  )
}

export default RegistrarPago