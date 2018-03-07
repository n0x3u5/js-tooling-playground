import Nemo from './shared/nemo'

export default class Chemo {
  constructor () {
    this.name = 'Chemo'
    this.pet = new Nemo()
  }

  getName () {
    return this.name
  }

  getPet () {
    return this.pet
  }

  toString () {
    return this.name
  }
}
