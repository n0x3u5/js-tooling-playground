import Nemo from './nemo'

export default class Chemo {
  constructor () {
    this.name = 'Chemo'
    this.pet = new Nemo()
  }

  getName () {
    return this.name
  }
}
