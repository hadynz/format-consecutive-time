import { Time, Days, Months } from '../constants';
import {
  groupByConsecutiveDays,
  groupByConsecutiveMonths,
} from './groupByConsecutiveTime';

const MapToDay = (dayIndex: number): Time => {
  return Days[dayIndex - 1];
};

const MapToMonth = (monthIndex: number): Time => {
  return Months[monthIndex - 1];
};

/**
 * Format a consecutively ordered array of day/months in words
 *
 * @param consecutiveArray Consecutive array of day/calendar indices
 * @param mapIndexToTime Map a numeric index to Time object
 */
const formatTime = (
  consecutiveArray: number[],
  mapIndexToTime: (index: number) => Time,
): string => {
  if (consecutiveArray.length === 1) {
    return mapIndexToTime(consecutiveArray[0]).short;
  }

  if (consecutiveArray.length === 2) {
    return consecutiveArray.map(day => mapIndexToTime(day).short).join('/');
  }

  return `${mapIndexToTime(consecutiveArray[0]).short} to ${
    mapIndexToTime(consecutiveArray[consecutiveArray.length - 1]).short
  }`;
};

/**
 * Format a consecutively ordered array of months in words
 *
 * For example:
 *    Input: [1]        Output: 'Jan'
 *    Input: [1,2]      Output: 'Jan/Feb'
 *    Input: [1,2,3,4]  Output: 'Jan to Apr'
 *    Input: [11,12,1]  Output: 'Nov to Jan'
 * @param consecutiveMonthsArray Consecutive array of calendar indices
 */
export const formatConsecutiveMonths = (
  consecutiveMonthsArray: number[],
): string => {
  return formatTime(consecutiveMonthsArray, MapToMonth);
};

/**
 * Format a consecutively ordered array of days in words
 *
 * For example:
 *    Input: [1]        Output: 'Mon'
 *    Input: [1,2]      Output: 'Mon/Tue'
 *    Input: [1,2,3,4]  Output: 'Mon to Thu'
 *    Input: [6,7,1]    Output: 'Sat to Mon'
 * @param consecutiveDaysArray Consecutive array of day indices
 */
export const formatConsecutiveDays = (
  consecutiveDaysArray: number[],
): string => {
  return formatTime(consecutiveDaysArray, MapToDay);
};

/**
 * Format an array of months in words
 *
 * For example:
 *    Input: [4,1,7,3]    Output: 'Jan & Mar/Apr & Jul'
 *    Input: [1,2,3,6]    Output: 'Jan to Mar & Jun'
 *    Input: [1,2,3,6,7]  Output: 'Jan to Mar & Jun/Jul'
 * @param unorderedMonthsArray Unordered array of month indices
 */
export const formatMonths = (unorderedMonthsArray: number[]): string => {
  const groupings = groupByConsecutiveMonths(unorderedMonthsArray);
  const prettyMonths = groupings.map(formatConsecutiveMonths);
  return prettyMonths.join(' & ');
};

/**
 * Format an array of days in words
 *
 * For example:
 *    Input: [4,1,7,3]    Output: 'Sun/Mon & Wed/Thu'
 *    Input: [1,2,3,6]    Output: 'Mon to Wed & Sat'
 *    Input: [1,2,3,6,7]  Output: 'Sat to Wed'
 * @param unorderedDaysArray Unordered array of day indices
 */
export const formatDays = (unorderedDaysArray: number[]): string => {
  const groupings = groupByConsecutiveDays(unorderedDaysArray);
  const prettyDays = groupings.map(formatConsecutiveDays);
  return prettyDays.join(' & ');
};
