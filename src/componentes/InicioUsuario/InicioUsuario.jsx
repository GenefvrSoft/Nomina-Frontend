import style from './InicioUsuario.module.css'
import ImagenPerfil from '../../assets/fotoperfil.png'

function InicioUsuario() {
  return (
        <main>
            <div className={style.main}>
                <h1>¡Hola, Usuario!</h1>
                <div className={style.profile}>
                    <p>Ver Perfil</p>
                    <img src={ImagenPerfil} alt="" />                
                </div>
                <section className={style.inicio_noticias}>              
                        <li className={style.green}>ORGANIZACIÓN</li>
                        <li className={style.semiblue}>FORMACIÓN</li>
                        <li className={style.semiblue}>LOGO</li>                
                        <li className={style.semiblue}>FOTO</li>
                        <li className={style.rosa1}>AGENDA</li>
                        <li className={style.green}>OBJETIVOS</li>                           
                        <li className={style.yellow}>DESARROLLO</li>
                        <li className={style.rosa2}>SELECCIÓN</li>
                        <li className={style.blue}>COMPENSACIÓN</li>             
                </section>
                <div className={style.finish}>
                    <p><a href="#">Cerrar Sesion</a></p>
                </div>
            </div>
        </main>
  )
}

export default InicioUsuario