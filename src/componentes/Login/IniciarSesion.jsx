import style from './login.module.css'
import ImageLogin from '../../assets/image-login.png'

function IniciarSesion() {
  return (
    <main>
        <div className={style.container_login}>
            <form className={style.container_login2}> 
                <h2>Iniciar Sesión</h2>       
                <img src={ImageLogin} alt=".." />
                <input className={style.inputL} type="text" name="nombre" placeholder="Ingresa tu nombre" maxLength="25" />
                <input className={style.inputL} type="password" name="password" placeholder="Ingresa tu contraseña" maxLength="25" />
                <div>
                    <button href="#" type="submit" className={style.btn2}>Ingresar</button>
                </div>
            </form>
        </div>
    </main>
  )
}

export default IniciarSesion