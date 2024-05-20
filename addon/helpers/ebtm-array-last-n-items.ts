import { helper } from '@ember/component/helper';

export default helper(function ebtmArrayLastNItems([list, n, r]: [
  unknown[],
  number,
  boolean,
]): unknown[] {
  if (!Array.isArray(list) || n <= 0) {
    return [];
  }
  const itemsCount = list.length;
  const startIndex = itemsCount > n ? itemsCount - n : 0;
  const itemsToShow = list.slice(startIndex, startIndex + n);
  return r ? itemsToShow.reverse() : itemsToShow;
});
