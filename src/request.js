const Api_Key = "bd5bf87a5d7b438162a452b672f7cff8";

const requests = {
  fetchTrendings: `/trending/all/week?api_key=${Api_Key}&language=en-US&page`,
  fetchNetflixOriginals: `/discover/tv?api_key=${Api_Key}&with_networks=213`,
  fetchTopRated: `/movie/top_rated?api_key=${Api_Key}&language=en-US&page=1`,
  fetchActionMovies: `/discover/movie?api_key=${Api_Key}&year=2019`,
  fetchComedyMovies: `/discover/movie?api_key=${Api_Key}&year=2017`,
  fetchHorrorMovies: `/discover/movie?api_key=${Api_Key}&year=2012`,
  fetchRomanticMovies: `/discover/movie?api_key=${Api_Key}&year=2020`,
  fetchDocumentaries: `/discover/movie?api_key=${Api_Key}&year=2010`,
};

export default requests;
