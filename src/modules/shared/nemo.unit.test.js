import Nemo from './nemo'

describe('Nemo should', () => {
  let nemo = new Nemo()

  test('be called Nemo', () => {
    expect(nemo.toString()).toBe('Nemo')
  })
})
