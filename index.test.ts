import { findIndicesToEqualTarget } from "./index"

/*
I used TDD here to break the problem down into smaller pieces and tackle them one part at a time.

When analyzing the problem I had a feeling it could be solved with a recursive algorithm, so I started
by testing for a base case, and solving that. Then slowly added test cases and solving them until I felt like the
solution was complete. Once that was finished I refactored the solution until the code was clean.
*/
describe("The find indices function", () => {
  it('solves a "base case" situation', () => {
    const target = 1
    const input = [0, 1]
    const output = [0, 1]
    expect(findIndicesToEqualTarget(target, input)).toEqual(output)
  })

  it("solves a case where the second index must increment", () => {
    const target = 2
    const input = [0, 1, 2]
    const output = [0, 2]
    expect(findIndicesToEqualTarget(target, input)).toEqual(output)
  })

  it("solves a case where the second index rolls over and the first index increments", () => {
    const target = 3
    const input = [0, 1, 2]
    const output = [1, 2]
    expect(findIndicesToEqualTarget(target, input)).toEqual(output)
  })

  it("doesn't use repeated indices to solve a case", () => {
    const target = 4
    const input = [1, 2, 3, 4]
    const output = [0, 2]
    expect(findIndicesToEqualTarget(target, input)).toEqual(output)
  })

  it("can handle negative numbers in the input", () => {
    const target = 6
    const input = [5, 3, 10, -4]
    const output = [2, 3]
    expect(findIndicesToEqualTarget(target, input)).toEqual(output)
  })

  it("can handle negative numbers the input and the target", () => {
    const target = -6
    const input = [5, -2, 10, -4, 0]
    const output = [1, 3]
    expect(findIndicesToEqualTarget(target, input)).toEqual(output)
  })

  it("can handle negative numbers the input and the target", () => {
    const target = 19
    const input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    const output = [8, 9]
    expect(findIndicesToEqualTarget(target, input)).toEqual(output)
  })

  it("can handle negative numbers the input and the target", () => {
    const target = 19
    const input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    const output = [8, 9]
    expect(findIndicesToEqualTarget(target, input)).toEqual(output)
  })

  it("returns the correct value for the first values provided in the challenge", () => {
    const target = 4
    const input = [1, 2, 3, 4, 5, 6]
    const output = [0, 2]
    expect(findIndicesToEqualTarget(target, input)).toEqual(output)
  })

  it("returns the correct value for the first values provided in the challenge with the input reversed", () => {
    const target = 4
    const input = [6, 5, 4, 3, 2, 1]
    const output = [3, 5]
    expect(findIndicesToEqualTarget(target, input)).toEqual(output)
  })

  it("returns the correct value for the second values provided in the challenge", () => {
    const target = 12
    const input = [2, 4, 3, 1, 9]
    const output = [2, 4]
    expect(findIndicesToEqualTarget(target, input)).toEqual(output)
  })
})
