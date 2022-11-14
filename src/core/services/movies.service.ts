const BASE_URL = 'https://api.themoviedb.org/3/search/movie'

export async function getMovies (query: string): Promise<any> {
  const apiKey = process.env.REACT_APP_API_KEY ?? ''
  const queryPath = query !== '' ? `&query=${query}` : ''
  const url: URL = new URL(`${BASE_URL}?api_key=${apiKey}${queryPath}`)
  const response = await fetch(url)

  return await response.json()
}
