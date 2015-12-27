const clear = (_) => _.split('.').join(' ').trim();

export const parseSeries = (query) => {
  const regex = /(.+)[sS]([\d]+)[eE]([\d]+)/;
  const found = query.match(regex);

  return found ? {
    title: clear(found[1]),
    s: parseInt(found[2]),
    ep: parseInt(found[3]),
    type: 'show'
  } : null;
};

export const parseMovies = (query) => {
  const regex = /^(.+)((19|20)\d\d)/;
  const found = query.match(regex);

  return found ? {
    title: clear(found[1]),
    year: parseInt(found[2]),
    type: 'movie'
  } : null;
};

export default (query) => {
  const seriesResult = parseSeries(query);

  if (seriesResult) {
    return seriesResult;
  }

  return parseMovies(query);
};
