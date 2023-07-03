import {RxCross2} from 'react-icons/rx'
import {PiCircleLight} from 'react-icons/pi'

function Turnos({turno}) {
  return (
    <div className='flex flex-row gap-4 items-center justify-center'>
        {turno === 'x' ?
            <>
                <div className='bg-cyan-500 rounded-full p-2 w-20'>
                    <RxCross2 size='4rem' />
                </div>
                <div className='p-2 w-20'>
                    <PiCircleLight size='4rem' />
                </div>
            </>
            :
            <>
                <div className='p-2 w-20'>
                    <RxCross2 size='4rem' />
                </div>
                <div className='bg-cyan-500 rounded-full p-2'>
                    <PiCircleLight size='4rem' />
                </div>
            </>

        }
            
    </div>
  )
}

export default Turnos
