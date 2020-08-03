const {sum, nativeNull} = require('./intro')

describe('Sum function', () => {
  test('should return sum of two values', () => {
    expect(sum(1, 4)).toBe(5)
    expect(sum(1, 4)).toEqual(5)
  })


  test('should return value correctly comparing to other values', () => {
    expect(sum(2, 3)).toBeGreaterThan(4)
    expect(sum(2, 3)).toBeGreaterThanOrEqual(5)
    expect(sum(2, 3)).toBeLessThan(10)
    expect(sum(2, 3)).toBeLessThanOrEqual(5)
  })
})

describe('Native null function', () => {
  test('should return false value null', () => {
    expect(nativeNull()).toBe(null)
    expect(nativeNull()).toBeNull()
    expect(nativeNull()).toBeFalsy() // undefined, null, 0, ''
    expect(nativeNull()).toBeDefined()
    expect(nativeNull()).not.toBeTruthy()
    expect(nativeNull()).not.toBeUndefined()
  })
})
