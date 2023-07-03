function ModalEmpate({resetTablero, setEmpate}) {
    const handleClick = () => {
        resetTablero()
        setEmpate(false)
    }
  return (
    <div className='flex flex-col items-center justify-center w-full h-full bg-slate-900/50 absolute'>
        <div className='flex flex-col items-center justify-evenly w-96 h-80 bg-black rounded-3xl shadow-5xl'>
            <h1 className='text-2xl font-bold text-white'>Empate!</h1>
            <button onClick={handleClick} className='bg-blue-500 text-white p-2 rounded-lg mt-4'>Volver a jugar</button>
        </div>
    </div>
  )
}

export default ModalEmpate
