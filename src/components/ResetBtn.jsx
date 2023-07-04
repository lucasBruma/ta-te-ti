
function ResetBtn({resetTablero}) {

  return (
    <button onClick={resetTablero} className='w-24 border-2 border-white rounded-md p-1 text-white hover:bg-white hover:text-black ease-in duration-200'>
        Reset del juego
    </button>
  )
}

export default ResetBtn
