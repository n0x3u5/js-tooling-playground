import Demo from './demo'

describe('Demo should', () => {
  let demo = new Demo()

  test('store things in it', () => {
    expect(Demo.inject).not.toThrow(Error)
  })

  test('be able to retrieve things in it', () => {
    Demo.inject('a thing')
    expect(Demo.extract('a thing')).toBe('a thing')
  })

  test('be named Demo', () => {
    expect(demo + '').toBe('Demo')
  })
})
