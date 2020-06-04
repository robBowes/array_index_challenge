type IndexTuple = [number, number]

/**
 * Finds two values from the input array that equal the target, and returns their indices in the initial array
 */
export const findIndicesToEqualTarget = (
  target: number,
  input: number[],
  indices: IndexTuple = [0, 1] // Use a default value so the initial caller only uses two parameters
): IndexTuple => {
  const [firstIndex, secondIndex] = indices
  if (
    firstIndex !== secondIndex && // If the indices are not equal to each other
    input[firstIndex] + input[secondIndex] === target // And they equal the target
  ) {
    return indices // We have found the right answer!
  }

  const [nextFirstIndex, nextSecondIndex] = indices.map((x) => x + 1) // Increment each index for the next call
  const nextIndices: IndexTuple =
    nextSecondIndex < input.length //If the second index is within the inputs
      ? [firstIndex, nextSecondIndex] // Increment the second index
      : [nextFirstIndex, 0] // Else increment the first index and restart the second

  return findIndicesToEqualTarget(target, input, nextIndices)
}
