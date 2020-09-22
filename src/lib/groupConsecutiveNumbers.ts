/**
 * Groups an array of (unsorted) numbers into groups of consecutive
 * numbers.
 *
 * For example:
 *    Input: [5,0,1,9,2,6];
 *    Output:
 *      [
 *        [0,1,2], [5,6], [9]
 *      ]
 *
 * Inspired by answer from https://stackoverflow.com/a/47906920/80427
 * @param array
 */
export const groupConsecutiveNumbers = (array: number[]): number[][] => {
  const sortedArray = [...array].sort();

  return sortedArray.reduce((r, n) => {
    const lastSubArray = r[r.length - 1];

    if (!lastSubArray || lastSubArray[lastSubArray.length - 1] !== n - 1) {
      r.push([]);
    }

    r[r.length - 1].push(n);

    return r;
  }, []);
};
