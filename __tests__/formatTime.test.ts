import {
  formatDays,
  formatMonths,
  formatConsecutiveDays,
} from '../src/lib/formatTime';

describe('formatDays', () => {
  it('Unordered days of week', () => {
    expect(formatDays([4, 1, 7, 3])).toEqual('Sun/Mon & Wed/Thu');
    expect(formatDays([1, 2, 3, 6])).toEqual('Mon to Wed & Sat');
    expect(formatDays([1, 2, 3, 6, 7])).toEqual('Sat to Wed');
  });
});

describe('formatMonths', () => {
  it('Unordered days of month', () => {
    expect(formatMonths([4, 1, 7, 3])).toEqual('Jan & Mar/Apr & Jul');
    expect(formatMonths([1, 2, 3, 6])).toEqual('Jan to Mar & Jun');
    expect(formatMonths([1, 2, 3, 6, 7])).toEqual('Jan to Mar & Jun/Jul');
    expect(formatMonths([1, 2, 3, 4, 12, 11])).toEqual('Nov to Apr');
  });
});

describe('formatConsecutiveDays', () => {
  it('Single day of week', () => {
    expect(formatConsecutiveDays([1])).toEqual('Mon');
    expect(formatConsecutiveDays([2])).toEqual('Tue');
    expect(formatConsecutiveDays([3])).toEqual('Wed');
    expect(formatConsecutiveDays([4])).toEqual('Thu');
    expect(formatConsecutiveDays([5])).toEqual('Fri');
    expect(formatConsecutiveDays([6])).toEqual('Sat');
    expect(formatConsecutiveDays([7])).toEqual('Sun');
  });

  it('Two consecutive days of week', () => {
    expect(formatConsecutiveDays([1, 2])).toEqual('Mon/Tue');
    expect(formatConsecutiveDays([2, 3])).toEqual('Tue/Wed');
    expect(formatConsecutiveDays([6, 7])).toEqual('Sat/Sun');
  });

  it('More than one consecutive days of week', () => {
    expect(formatConsecutiveDays([1, 2, 3])).toEqual('Mon to Wed');
    expect(formatConsecutiveDays([2, 3, 4, 5])).toEqual('Tue to Fri');
    expect(formatConsecutiveDays([4, 5, 6, 7])).toEqual('Thu to Sun');
  });
});
