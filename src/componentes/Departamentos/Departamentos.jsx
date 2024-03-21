import style from './Departamentos.module.css' 
import Cargos from '../../assets/Cargos.png'
 
function Departamentos() { 
  return ( 
    <main> 
        <div className={style.container}> 
            <img src={Cargos} alt="imagencargos"/>
        </div> 
    </main> 
  ) 
} 
 
export default Departamentos