import { addNumbers, subtractNumbers, multiplyNumbers } from '../src/utils/math'

describe ('Math operations', () => {
    
    test("adding two numbers", () => {
    
    const a = 5
    const b = 7

    const result = addNumbers(a, b)

    expect(result).toBe(12)
    expect(result).toBeDefined()

    })

    test("subtract two numbers", () => {

        const a = 12
        const b = 5

        const result = subtractNumbers(a, b)

        expect(result).toBe(7)
        expect(result).toBeDefined()

    })

})

describe ('Multiplication operations', () => {

    test("multiply three numbers", () => {
        
        const a = 7
        const b = 6
        const c = 2

        const result = multiplyNumbers(a, b, c)

        expect(result).toBe(84)
        expect(result).toBeDefined()
    })
})