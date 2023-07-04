import { useState } from 'react'


function Tablero({children}) {
  return (
    <div className="grid grid-cols-3 grid-rows-3">
      {children}
    </div>
  )
}

export default Tablero