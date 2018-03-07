import Bemo from './bemo'

describe('Bemo should', () => {
  let bemo = new Bemo()

  test('be named Bemo', () => {
    expect(bemo.getName()).toBe('Bemo')
  })
  test('have Nemo as a pet', () => {
    expect(bemo.getPet().toString()).toBe('Nemo')
  })
})
