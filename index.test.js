const division = require('./index.js')

test('dividing two numbers correctly', () => {
 expect(division(10, 2)).toBe(5)
})