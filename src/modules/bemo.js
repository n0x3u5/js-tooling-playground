import Nemo from './nemo'

export default class Bemo {
  constructor () {
    this.name = 'Bemo'
    this.pet = new Nemo()
  }

  getName () {
    return this.name
  }
}
