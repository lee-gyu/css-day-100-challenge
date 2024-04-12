
export const pages = [
  'day1',
  'day2',
  'day3',
  'day6',
];

export function getPrevPage( cur: string ) {
  return pages[ pages.indexOf( cur ) - 1 ] ?? pages[pages.length - 1];
}

export function getNextPage( cur: string ) {
  return pages[ pages.indexOf( cur ) + 1 ] ?? pages[0];
}