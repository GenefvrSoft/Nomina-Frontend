import style from './InformacionPerfil.module.css'

function InformacionPerfil() {
  return (
    <main>
        <div className={style.perfil}>
        <h2>Información Personal</h2>
        <section className={style.info}>
           <p>Nombres(s):</p>
           <p>Cedula de Identidad:</p>
           <p>Sexo:</p>
           <p>Email:</p>
           <p>Fecha de Ingreso:</p>
           <p>Estatus del Cargo:</p>
           <p>Departamento:</p>
        </section>
        </div>
   </main> 
  )
}

export default InformacionPerfil