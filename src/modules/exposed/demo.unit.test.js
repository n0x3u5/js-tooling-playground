import Demo from './demo'

describe('Demo should', () => {
  let demo = new Demo()

  test('store things in it', () => {
    expect(Demo.add).not.toThrow(Error)
  })

  test('be able to retrieve things in it', () => {
    Demo.add('a thing')
    expect(Demo.get('a thing')).toBe('a thing')
  })

  test('be named Demo', () => {
    expect(demo.getName()).toBe('Demo')
  })

  test('be able to name a thing it has', () => {
    expect(demo.getNameOf('a thing')).toBe('a thing')
    expect(demo.getNameOf()).toBeUndefined()
  })
})
