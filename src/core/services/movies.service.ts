import { Movie, Session } from '../models/movies'

const SEARCH_URL = 'https://api.themoviedb.org/3/search/movie'
const POPULAR_URL = 'https://api.themoviedb.org/3/movie/popular'
const GET_URL = 'https://api.themoviedb.org/3/movie'
const GET_SESSION_URL = 'https://api.themoviedb.org/3/authentication/guest_session/new'
const RATE_URL = 'https://api.themoviedb.org/3/movie'
const RATED_MOVIES_URL = 'https://api.themoviedb.org/3/guest_session'

export async function getMovies (query: string): Promise<Movie[]> {
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

export async function getMovie (id: string): Promise<Movie> {
  const apiKey = process.env.REACT_APP_API_KEY ?? ''

  const url: URL = new URL(`${GET_URL}/${id}?api_key=${apiKey}`)
  const response = await fetch(url)
  return await response.json()
}

export async function getSessionId (): Promise<Session> {
  const apiKey = process.env.REACT_APP_API_KEY ?? ''

  const url: URL = new URL(`${GET_SESSION_URL}?api_key=${apiKey}`)
  const response = await fetch(url)
  return await response.json()
}

export async function rateMovie (movieData: { value: number, sessionId: string, movieId: string }): Promise<any> {
  const apiKey = process.env.REACT_APP_API_KEY ?? ''

  const url: URL = new URL(`${RATE_URL}/${movieData.movieId}/rating?api_key=${apiKey}&guest_session_id=${movieData.sessionId}`)
  const response = await fetch(url, {
    method: 'POST',
    body: JSON.stringify({ value: movieData.value }),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  return await response.json()
}

export async function getRatedMovies (sessionId: Session | undefined): Promise<Movie[]> {
  const apiKey = process.env.REACT_APP_API_KEY ?? ''
  const session: string = (sessionId != null) ? sessionId.guest_session_id : ''

  const url: URL = new URL(`${RATED_MOVIES_URL}/${session}/rated/movies?api_key=${apiKey}`)
  const response = await fetch(url)
  return await response.json()
}
