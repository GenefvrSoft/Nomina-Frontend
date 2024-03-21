import style from './HistoricoPagos.module.css'

function HistoricoPagos() {
  return (
    <main>
        <div className={style.pagos}>
        <div className={style.derbotones}>
            <button href="" type="submit" class={style.btn1}>Registrar Pago</button>
            <button href="" type="submit" class={style.btn1}>Eliminar Pago</button>
        </div>
        <h2>Historial de Operaciones</h2>
        <div className={style.list}>
            <ul>
                <li>ID</li>
                <li>Nombre Empleado</li>
                <li>Monto Asignaciones</li>
                <li>Monto Deducciones</li>
                <li>Monto Total</li>
                <li>Fecha de Cancelación</li>
                <li>Moneda</li>
                <li>Concepto</li>
            </ul>
        </div>
        <div className={style.pag}>
        {"<"} <p>1</p> {">"}
        </div>
        </div>
    </main>
  )
}

export default HistoricoPagos