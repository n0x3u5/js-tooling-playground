import Nemo from './shared/nemo'

export default class Bemo {
  constructor () {
    this.name = 'Bemo'
    this.pet = new Nemo()
  }

  getPet () {
    return this.pet
  }

  toString () {
    return this.name
  }
}
