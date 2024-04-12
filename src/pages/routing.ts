
export const pages = [
  'day1',
  'day2',
  'day3',
  'day4',
  'day5',
  'day6',
];

export const pageInfo = {
  day1: {
    title: "100 Days CSS",
    desc: "An easy start into the challenge with a custom build number with gradient."
  },
  day2: {
    title: "Menu Icon",
    desc: "Used on almost every website by now, simple but impressively animated it becomes a real eye-catcher"
  },
  day3: {
    title: "The Pyramide",
    desc: "Not as challenging as the real pyramids in Egypt, but the shadow path is not easy."
  },
  day4: {
    title: "Loading",
    desc: "The best are always websites that do not need a loading status. If they do, here would be a calming one."
  },
  day5: {
    title: "Statistic",
    desc: "In a world of numbers, it is important to be able to interpret them correctly. Beautiful statistics help to capture these data."
  },
  day6: {
    title: "Profile",
    desc: "Who of you knows how many social media profiles you have already created? For a refreshing twist, you can also create one yourself."
  },
}

export function getPrevPage( cur: string ) {
  return pages[ pages.indexOf( cur ) - 1 ] ?? pages[pages.length - 1];
}

export function getNextPage( cur: string ) {
  return pages[ pages.indexOf( cur ) + 1 ] ?? pages[0];
}

export function getPageInfo( page: string ) {
  return pageInfo[page];
}