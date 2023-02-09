function absSort(arr) {
  /**
  @param arr: integer[]
  @return: integer[]
  */

  function compareNumbers(a, b) {
    if (Math.abs(a) === Math.abs(b)) {
      return a - b
    } else {
      if (Math.abs(a) > Math.abs(b)) {
        return 1
      }
    }
    return -1
  }

  let numArray = arr.sort(compareNumbers);
  return numArray
  // your code goes here
}
