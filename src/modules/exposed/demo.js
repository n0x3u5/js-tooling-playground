const store = {}

export default class Demo {
  static add (thing) {
    if (thing != null) store.thing = thing
  }

  static get (thing) {
    if (thing != null) return store.thing
  }

  constructor () {
    this.name = 'Demo'
  }

  getName () {
    return this.name
  }

  getNameOf (thing) {
    let Thing = Demo.get(thing)

    if (Thing) {
      if (Thing.prototype) {
        let thing = new Thing()
        return thing.getName()
      } else {
        return thing.toString()
      }
    }
  }
}
