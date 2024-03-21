import style from './RegistrarEmpleado.module.css'

function RegistrarEmpleado() {
  return (
    <main>
        <div className={style.regempleado}>
        <h1>Registrar Empleados</h1>
        <form action=".." method="post">
                <ul>
                    <li>
                        <label for="cedula">Cedula</label>
                        <input className={style.input} type="text" />
                    </li>
                    <li>
                        <label for="nombre">Nombre</label>
                        <input className={style.input} type="text" />
                    </li>
                    <li>
                        <label for="apellido">Apellido</label>
                        <input className={style.input} type="text"/>
                    </li>
                    <li>
                        <label for="sexo">Sexo</label>
                        Masculino<input className={style.input} type="radio" value="0" name="sexo" />
                        Femenino<input className={style.input} type="radio" value="1" name="sexo" />
                    </li>
                    <li>
                        <label for="email">Email</label>
                        <input className={style.input} type="email" />
                    </li>
                    <li>
                        <label for="fecha-cancelacion">Fecha de Cancelación</label>
                        <input className={style.input} type="date" />
                    </li>
                    <li>
                        <label for="estatus">Estatus</label>
                        Contratado<input className={style.input} type="radio" value="0" name="est" />
                        Fijo<input className={style.input} type="radio" value="1" name="est" />
                    </li>
                    <li>
                        <label for="cargo">Cargo</label>
                        <input className={style.input} type="text" />
                    </li>
                    <li>
                        <label for="departamento">Departamento</label>
                        <input className={style.input} type="text" />
                    </li>
                </ul>
                <div>
                    <button href="" type="submit" className={style.btn1}>Registrar</button>
                </div>
            </form>
        </div>
    </main>
  )
}


export default RegistrarEmpleado