import mergeDeepLeft from 'ramda/src/mergeDeepLeft'

const DEFAULT_OPTS = { name: 'bemo' }
const unsupportedEmo = () => { document.body.innerHTML = 'Unsupported Emo!' }
const supportedEmo = (emoPayload) => {
  const Emo = emoPayload.default ? emoPayload.default : emoPayload
  const emo = new Emo()
  document.body.innerHTML = emo
}
const store = {}

export default class Demo {
  constructor (opts = {}) {
    this.opts = mergeDeepLeft(opts, DEFAULT_OPTS)
    this.name = 'Demo'
  }

  static inject (thing) {
    if (thing != null) { store[thing] = thing }
  }

  static extract (thing) {
    if (thing != null) { return store[thing] }
  }

  setBase (basePath) {
    // eslint-disable-next-line
    __webpack_public_path__ = basePath;
  }

  render () {
    let Emo = Demo.extract(this.opts.name)

    if (Emo) {
      supportedEmo(Emo)
    } else {
      if (this.opts.name === 'bemo') {
          import(/* webpackChunkName: "demo.bemo" */ '../bemo')
            .then(supportedEmo)
            .catch(unsupportedEmo)
      } else if (this.opts.name === 'chemo') {
        import(/* webpackChunkName: "demo.chemo" */ '../chemo')
          .then(supportedEmo)
          .catch(unsupportedEmo)
      } else {
        unsupportedEmo()
      }
    }
    document.body.innerHTML = 'Loading emo...'
  }

  toString () {
    return this.name
  }
}
