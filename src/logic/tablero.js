import { combosGanadores, turnos } from '../constants.js'

export const chequearGanador = (tableroParaChequear) => {
    for (const combo of combosGanadores){ 
      const arrayGanadorX = combo.every((i) => (tableroParaChequear[i] === 'x'))
      const arrayGanadorO = combo.every((i) => (tableroParaChequear[i] === 'o'))
      if(arrayGanadorX){
        return turnos.x
      }
      if(arrayGanadorO){
        return turnos.o
      }
    }
  return null
}


export const chequearEmpate = (tableroParaChequear) => {
  return tableroParaChequear.every((i) => i !== null)
}