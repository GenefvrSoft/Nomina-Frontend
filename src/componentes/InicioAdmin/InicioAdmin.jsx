import style from './InicioAdmin.module.css'

function InicioAdmin() {
  return (
    <main className={style.container}>
        <h1>¡Hola, Administrador!</h1>
        <section className={style.reportes}>
            <h2>REPORTES</h2>
            <p>Nómina de Ventas esta por iniciar</p>
            <p>Empleados por área</p>
        </section>
        <section className={style.reportes}>
            <h2>EVENTOS</h2>
            <p>Bonificaciones de Días Feriados</p>
            <p>Solicitudes de Primas</p>
        </section>
        <section className={style.reportes}>
            <h2>ALERTAS</h2>
            <p>Sonia Lopez ha solicitado vacaciones del 10/01 al 14/01/2024</p>
            <p>El contrato de  Alvaro Clemente finaliza el 19/02/2024</p>
            <p>Daniel Rumbos se ha unido al sistema, enviale un saludo</p>
        </section>
    </main>
  )
}

export default InicioAdmin