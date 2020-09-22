import { groupConsecutiveNumbers } from './groupConsecutiveNumbers';

const groupByConsecutiveTime = (
  days: number[],
  enumerationSize: number,
): number[][] => {
  const groupings = groupConsecutiveNumbers(days);

  const firstGroupingValue = groupings[0][0];
  const lastGroupingLastValue = groupings[groupings.length - 1].slice(-1)[0];

  const mergeFirstAndLast =
    firstGroupingValue === 1 && lastGroupingLastValue == enumerationSize;

  if (mergeFirstAndLast) {
    const lastElement = groupings.pop();
    const [firstElement, ...rest] = groupings;
    return [lastElement.concat(firstElement), ...rest];
  }

  return groupings;
};

/**
 * Groups an array of day incdices
 *
 * For example:
 *    Input: [1,2,5,7];
 *    Output:
 *      [
 *        [7,1,2], [5]
 *      ]
 *
 * @param days Array of day indices (e.g. [1, 2] representing Mon and Tue)
 */
export const groupByConsecutiveDays = (days: number[]): number[][] => {
  return groupByConsecutiveTime(days, 7);
};

/**
 * Groups an array of month indices
 *
 * For example:
 *    Input: [1,2,11,12,5];
 *    Output:
 *      [
 *        [11,12,1,2], [5]
 *      ]
 *
 * @param months Array of month indices (e.g. [1, 2] representing Jan and Feb)
 */
export const groupByConsecutiveMonths = (months: number[]): number[][] => {
  return groupByConsecutiveTime(months, 12);
};
