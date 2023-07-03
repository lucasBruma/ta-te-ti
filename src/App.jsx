import { useState, useEffect } from 'react'
import ResetBtn from './components/ResetBtn'
import Tablero from './components/Tablero'
import Turnos from './components/Turnos'
import Casillero from './components/Casillero'
import ModalGanador from './components/ModalGanador'
import {RxCross2} from 'react-icons/rx'
import {PiCircleLight} from 'react-icons/pi'
import { turnos } from './constants'
import { chequearEmpate, chequearGanador } from './logic/tablero'
import { guardarPartida } from './logic/storage'
import ModalEmpate from './components/ModalEmpate'

function App() {
  const [turno, setTurno] = useState(turnos.x)
  const [tablero, setTablero] = useState(Array(9).fill(null))
  const [ganador, setGanador] = useState(null)
  const [empate, setEmpate] = useState(false)


  useEffect(() => {
    const tablero = localStorage.getItem('tablero')
    if(tablero){
      setTablero(JSON.parse(tablero))
    }else{
      setTablero(Array(9).fill(null))
    }
    const turnoStorage = localStorage.getItem('turno')
    setTurno(turnoStorage)
  },[])

  const actualizarTablero = (index) => {
    if (tablero[index] || ganador) return 
    const nuevoTablero = [...tablero]
    nuevoTablero[index] = turno
    setTablero(nuevoTablero)
    const nuevoTurno = turno == turnos.x ? turnos.o : turnos.x;

    guardarPartida(nuevoTablero, nuevoTurno)

    setTurno(nuevoTurno)
    const hayGanador = chequearGanador(nuevoTablero)
    if(hayGanador === 'x'){
      setGanador(turnos.x)
    }else if(hayGanador === 'o'){
      setGanador(turnos.o)
    }else{
      const empate = chequearEmpate(nuevoTablero)
      setEmpate(empate)
    }
  }

  const resetTablero = () => {
    setTablero(Array(9).fill(null))
    setTurno(turnos.x)
    setGanador(null)
    guardarPartida(Array(9).fill(null), turnos.x)
  } 

  return (
      <div className='h-screen w-screen bg-gray-300 flex flex-col items-center justify-center'>
        <div className='w-80 flex flex-col items-center justify-center mx-auto gap-10'>
          <h1 className='text-5xl font-bold text-center'>Ta te ti</h1>
          <div className='flex flex-row items-center justify-center gap-5'>
            <ResetBtn resetTablero={resetTablero}/>
            <Turnos turno={turno} />
          </div>
          <Tablero>
              {tablero.map((_, i) => (
                <Casillero key={i} actualizarTablero={actualizarTablero} index={i} chequearGanador={chequearGanador} >
                  {tablero[i] == 'x' && <RxCross2 size='4rem'  />}
                  {tablero[i] == 'o' && <PiCircleLight size='4rem'  />}
                  {tablero[i] == null && null} 
                </Casillero>
            ))}
          </Tablero>
          {ganador !== null  && <ModalGanador ganador={ganador} resetTablero={resetTablero} />}
          {empate  && <ModalEmpate resetTablero={resetTablero} setEmpate={setEmpate} />}
        </div>
      </div>
  )
}

export default App
