import {RxCross2} from 'react-icons/rx'
import {PiCircleLight} from 'react-icons/pi'

function ModalGanador({ganador, resetTablero}) {



  return (
    <div className='flex flex-col items-center justify-center w-full h-full bg-slate-900/50 absolute'>
        <div className='flex flex-col items-center justify-evenly w-96 h-80 bg-black rounded-3xl shadow-5xl'>
            <h1 className='text-2xl font-bold text-white'>Ganador:</h1>
            {ganador == 'o' ? <PiCircleLight size='4rem' className='text-blue-500'/> : <RxCross2 size='4rem' className='text-red-500'/>} 
            <button onClick={resetTablero} className='bg-blue-500 text-white p-2 rounded-lg mt-4'>Volver a jugar</button>
        </div>
    </div>
  )
}

export default ModalGanador
