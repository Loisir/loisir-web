/**
 * Labels numbers with K, M, B unit suffix
 * e.g
 *  11111 as 11.1 K
 * 
 * @param num Number which we want to label
 * @returns Labeled string of the number with unit suffix.
 */
export function labelNumber(num: number) : string {
  if (num >= 1000000000) {
    return (num / 1000000000).toFixed(1).replace(/\.0$/, '') + 'B';
  }
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1).replace(/\.0$/, '') + 'M';
  }
  if (num >= 1000) {
    return (num / 1000).toFixed(1).replace(/\.0$/, '') + 'K';
  }
  return "" + num;
};