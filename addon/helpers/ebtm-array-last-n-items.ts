import { helper } from '@ember/component/helper';

export default helper(function ebtmArrayLastNItems([list, n]: [
  unknown[],
  number,
]): unknown[] {
  if (!Array.isArray(list) || n <= 0) {
    return [];
  }
  const itemsCount = list.length;
  const startIndex = itemsCount > n ? itemsCount - n : 0;
  return list.slice(startIndex, startIndex + n);
});
