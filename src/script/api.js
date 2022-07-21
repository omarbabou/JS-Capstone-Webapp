const getMovies = async () => {
  // eslint-disable-next-line quotes
  const response = await fetch(`https://api.tvmaze.com/shows`);
  return response.json();
};


export const getMovieById = async (id) => {
  const response = await fetch(`https://api.tvmaze.com/shows/${id}`);
  return response.json();
};

export default getMovies;