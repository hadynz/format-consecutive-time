import { groupByConsecutiveDays } from '../src/lib/groupByConsecutiveTime';

describe('groupByConsecutiveDays', () => {
  it('Group consecutive days together', () => {
    expect(groupByConsecutiveDays([1])).toEqual([[1]]);
    expect(groupByConsecutiveDays([1, 7])).toEqual([[7, 1]]);
    expect(groupByConsecutiveDays([1, 2, 5, 7])).toEqual([[7, 1, 2], [5]]);
  });
});
