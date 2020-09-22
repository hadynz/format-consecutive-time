import { groupConsecutiveNumbers } from '../src/lib/groupConsecutiveNumbers';

describe('groupConsecutiveNumbers', () => {
  it('Group consecutive numbers together', () => {
    expect(groupConsecutiveNumbers([6, 1, 3, 2, 7])).toEqual([
      [1, 2, 3],
      [6, 7],
    ]);

    expect(groupConsecutiveNumbers([4, 1, 7, 2, 9])).toEqual([
      [1, 2],
      [4],
      [7],
      [9],
    ]);
  });
});
