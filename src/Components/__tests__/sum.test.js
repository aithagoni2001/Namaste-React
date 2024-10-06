import { Sum } from "../Sum"

test("Sum of two numbers",()=>{

    const result = Sum(5,3);

    // Assertion
    expect(result).toBe(8);

})