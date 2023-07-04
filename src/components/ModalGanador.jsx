import {RxCross2} from 'react-icons/rx'
import {PiCircleLight} from 'react-icons/pi'

function ModalGanador({ganador, resetTablero}) {



  return (
    <div className='flex flex-col items-center justify-center w-full h-full bg-black/50 absolute'>
        <div className='flex flex-col items-center justify-evenly w-96 h-80 bg-black rounded-3xl shadow-lg shadow-white/20'>
            <h1 className='text-4xl font-bold text-white'>Ganador</h1>
            {ganador == 'o' ? <PiCircleLight size='4rem' color='white'/> : <RxCross2 size='4rem' color='white'/>} 
            <button onClick={resetTablero} className='rounded-md border-2 border-white text-white p-2 rounded-lg mt-4 hover:bg-white hover:text-black ease-in duration-200'>Volver a jugar</button>
        </div>
    </div>
  )
}

export default ModalGanador
