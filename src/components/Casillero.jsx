import { bordes } from "../constants"

function Casillero({children, actualizarTablero, index, chequearGanador}) {
  const handleClick = () => {  
    actualizarTablero(index)
  }
  const borde = bordes[index]

  return (
    <button onClick={handleClick} className={`w-[100px] h-[100px] ${borde} border-white flex justify-center items-center`}>
        {children}
    </button>
  )
}

export default Casillero