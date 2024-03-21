import style from './estilos.module.css'

function MenuLateralNav() {
  return (
    <header className={style.header}>
        <nav className={style.menu}>
            <ul className={style.menu_der}>
                <li className={style.menu_der_option}><a href="">Inicio</a></li>
                <li className={style.menu_der_option}><a href="">Empresa</a></li>
                <li className={style.menu_der_option}><a href="">Empleados</a></li>
                <li className={style.menu_der_option}><a href="">Departamentos</a></li>
                <li className={style.menu_der_option}><a href="">Asignaciones</a></li>
                <li className={style.menu_der_option}><a href="">Deducciones</a></li>
                <li className={style.menu_der_option}><a href="">Vacaciones</a></li>
                <li className={style.menu_der_option}><a href="">Pagos</a></li>
            </ul>
        </nav>
    </header>
  )
}

export default MenuLateralNav