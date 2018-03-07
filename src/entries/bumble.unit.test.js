import Demo from './bumble'
import Bemo from '../modules/bemo'

describe('Demo should', () => {
  test('have Bemo', () => {
    expect(Demo.get('Bemo')).toEqual(Bemo)
  })
})
