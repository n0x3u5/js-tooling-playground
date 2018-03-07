import Cumble from './cumble'
import Chemo from '../modules/chemo'

describe('Cumble should', () => {
  test('have Chemo', () => {
    expect(Cumble.get('Chemo')).toEqual(Chemo)
  })
})
