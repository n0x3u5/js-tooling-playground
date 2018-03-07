import Chemo from './chemo'

describe('Chemo should', () => {
  let chemo = new Chemo()

  test('be named Chemo', () => {
    expect(chemo.getName()).toBe('Chemo')
  })
  test('have Nemo as a pet', () => {
    expect(chemo.getPet().toString()).toBe('Nemo')
  })
})
