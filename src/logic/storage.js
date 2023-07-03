export const guardarPartida = (tablero, turno) => { 
    localStorage.setItem('tablero', JSON.stringify(tablero))
    localStorage.setItem('turno', turno)
}
