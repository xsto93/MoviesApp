const SEARCH_URL = 'https://api.themoviedb.org/3/search/movie'
const POPULAR_URL = 'https://api.themoviedb.org/3/movie/popular'

export async function getMovies (query: string): Promise<any> {
  const apiKey = process.env.REACT_APP_API_KEY ?? ''
  let queryPath = ''
  let queryUrl = POPULAR_URL
  if (query !== '') {
    queryPath = `&query=${query}`
    queryUrl = SEARCH_URL
  }
  const url: URL = new URL(`${queryUrl}?api_key=${apiKey}${queryPath}`)
  const response = await fetch(url)
  return await response.json()
}
