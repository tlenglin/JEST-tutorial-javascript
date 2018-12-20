import { hello, add, removeSNames } from './App'

describe('hello', () => {
  it('should output hello', () => {
    expect(hello()).toBe('Hello')
  })
})

describe('add', () => {
  it('sould add two numbers', () => {
    expect(add(1, 2)).toBe(3)
    expect(add(-2, 2)).toBe(0)
    expect(add(0, 0)).toBe(0)
  })
  it('should not add strings', () => {
    expect(add(2, '5')).toBe(null)
  })
  it('should not add objects', () => {
    expect(add(2, {})).toBe(null)
  })
  it('should not add arrays', () => {
    expect(add(2, [])).toBe(null)
  })
})

describe('removeSNames', () => {
  it('remove all S names', () => {
    const names = ['Scott', 'Tim', 'Steve']
    expect(removeSNames(names)).not.toContain('Scott')
    expect(removeSNames(names)).not.toContain('Steve')
  })
  it('should not remove other names', () => {
    const names = ['Scott', 'Tim', 'Wes']
    expect(removeSNames(names)).toContain('Tim')
    expect(removeSNames(names)).toContain('Wes')
  })
  it('should account for case', () => {
    const names = ['Scott', 'Tim', 'Wes', 'scott']
    expect(removeSNames(names)).not.toContain('Scott')
    expect(removeSNames(names)).not.toContain('scott')
  })
})
