<p>
  <a href="https://github.com/hadynz/format-consecutive-time/actions"><img src="https://github.com/hadynz/format-consecutive-time/workflows/Node CI/badge.svg" alt="actions status"></a>
  <a href="https://badge.fury.io/js/format-consecutive-time"><img src="https://badge.fury.io/js/format-consecutive-time.svg" alt="npm version" height="20"></a>
  <a href="https://twitter.com/intent/follow?screen_name=hadynz"><img align="right" src="https://img.shields.io/twitter/follow/hadynz.svg?style=social&label=Follow%20@hadynz" alt="Follow on Twitter"></a>
</p>

# group-consecutive-time

Format a list of calendar days or months into words for easy readability.

This module was built using the excellent [node-typescript-boilerplate].

## Install

```bash
npm install --save format-consecutive-time
```

## Usage

Format an unordered array of day indices into words:
```js
import { formatDays } from 'format-consecutive-time';

formatDays([4, 1, 7, 3]); // "Sun/Mon & Wed/Thu"

formatDays([1, 2, 3, 6]); // "Mon to Wed & Sat"

formatDays([1, 2, 3, 6, 7]); // "Sat to Wed"
```

Format an unordered array of month indices into words:
```js
import { formatMonths } from 'format-consecutive-time';

formatMonths([4, 1, 7, 3]); // "Jan & Mar/Apr & Jul"

formatMonths([1, 2, 3, 6, 7]); // "Jan to Mar & Jun/Jul"

formatMonths([1, 2, 3, 4, 12, 11]); // "Nov to Apr"
```

## API Reference

<a name="formatDays" href="#formatDays">#</a> <b>formatDays</b>(<i>unorderedDaysArray</i>) [<>][1]

<a name="formatMonths" href="#formatMonths">#</a> <b>formatMonths</b>(<i>unorderedMonthsArray</i>) [<>][2]

<a name="groupByConsecutiveDays" href="#groupByConsecutiveDays">#</a> <b>groupByConsecutiveDays</b>(<i>days</i>) [<>][3]

<a name="groupByConsecutiveMonths" href="#groupByConsecutiveMonths">#</a> <b>groupByConsecutiveMonths</b>(<i>months</i>) [<>][4]

## License

MIT © [Hady Osman](https://github.com/hadynz)

[node-typescript-boilerplate]: https://github.com/jsynowiec/node-typescript-boilerplate
[1]: https://github.com/hadynz/format-consecutive-time/blob/master/src/lib/formatTime.ts#L85-L98
[2]: https://github.com/hadynz/format-consecutive-time/blob/master/src/lib/formatTime.ts#L70-L83
[3]: https://github.com/hadynz/format-consecutive-time/blob/master/src/lib/groupByConsecutiveTime.ts#L24-L38
[4]: https://github.com/hadynz/format-consecutive-time/blob/master/src/lib/groupByConsecutiveTime.ts#L40-L54
