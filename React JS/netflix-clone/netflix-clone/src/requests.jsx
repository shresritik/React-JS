const API_KEY = "3344d013003808e492b44bc4794c9bd8";
const request = {
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&language=en-US&with_networks=213`,

  fetchAdventureMovies: `/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=12`,
  fetchAnimationMovies: `/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=16`,
  fetchSci_fiMovies: `/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=878`,
  fetchThrillerMovies: `/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=53`,
  fetchDramaMovies: `/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=18`,
  fetchCrimeMovies: `/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=80`,

  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=37`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=10749`,
  fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=99`,
  fetchTrending: `/trending/all/week?api_key=${API_KEY}`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
};

export default request;
