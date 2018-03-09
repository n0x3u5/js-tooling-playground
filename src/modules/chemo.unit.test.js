import Chemo from './chemo'

describe('Chemo should', () => {
  let chemo = new Chemo()

  test('be named Chemo', () => {
    expect(chemo + '').toBe('Chemo')
  })
  test('have Nemo as a pet', () => {
    expect(chemo.getPet() + '').toBe('Nemo')
  })
})
