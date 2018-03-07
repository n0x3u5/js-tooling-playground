const store = {};

export default class Demo {
  static add (thing) {
    store.thing = thing;
  }

  static get (thing) {
    return store.thing;
  }

  constructor () {
    this.name = 'Demo';
  }

  getNameOf (thing) {
    return new Demo.get(thing).getName();
  }
}
