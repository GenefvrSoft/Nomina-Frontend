import style from './DatosEmpresa.module.css'

function DatosEmpresa() {
  return (
    <main>
        <div className={style.seccion}>
            <h2>DATOS DE LA EMPRESA</h2>
            <section className={style.datos}>
                <div className={style.d1}>
                    <h3>Razón Social</h3>
                    <p>Razón Social</p>
                </div>
                <div className={style.d2}>
                    <div>
                        <h3>Domicilio Fiscal</h3>
                        <p className={style.d2_info}>Domicilio Fiscal</p>
                    </div>
                    <div>
                        <h3>Codigo Postal</h3>
                        <p className={style.d2_info}>Codigo Postal</p>
                    </div>
                </div>
                <div className={style.d3}>
                    <div>
                        <h3>Teléfono</h3>
                        <p className={style.d3_info}>Teléfono</p>
                    </div>
                    <div>
                        <h3>Correo Electronico</h3>
                        <p className={style.d3_info}>Correo Electronico</p>
                    </div>
                    <div>
                    <h3>Sitio Web</h3>
                    <p className={style.d3_info}>Sitio Web</p>
                    </div>
                </div>
            </section>
            <div className={style.contenedorBtn}>
                <button href="a.html" type="submit" className={style.btn1}>Agregar Cambios</button>
            </div>            
        </div>
    </main>
  )
}

export default DatosEmpresa