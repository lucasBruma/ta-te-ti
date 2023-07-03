import { useState } from 'react'



function Casillero({children, actualizarTablero, index, chequearGanador}) {
  const handleClick = () => {  
    actualizarTablero(index)
  }

  return (
    <button onClick={handleClick} className='w-[100px] h-[100px] rounded-md border-2 border-black flex justify-center items-center'>
        {children}
    </button>
  )
}

export default Casillero