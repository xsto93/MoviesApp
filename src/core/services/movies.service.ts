import { Movie, RatedMovieSuccess, Session } from '../models/movies'
import { get, post } from './api.service'

const SEARCH_URL = '/search/movie'
const POPULAR_URL = '/movie/popular'
const GET_URL = '/movie'
const GET_SESSION_URL = '/authentication/guest_session/new'
const RATE_URL = '/movie'
const RATED_MOVIES_URL = '/guest_session'

const apiKey = process.env.REACT_APP_API_KEY ?? ''

export async function getMovies (query: string): Promise<Movie[]> {
  let queryPath = ''
  let queryUrl = POPULAR_URL
  if (query !== '') {
    queryPath = `&query=${query}`
    queryUrl = SEARCH_URL
  }
  return await get(`${queryUrl}?api_key=${apiKey}${queryPath}`)
}

export async function getMovie (id: string): Promise<Movie> {
  return await get(`${GET_URL}/${id}?api_key=${apiKey}`)
}

export async function getSessionId (): Promise<Session> {
  return await get(`${GET_SESSION_URL}?api_key=${apiKey}`)
}

export async function rateMovie (movieData: {
  value: number
  sessionId: string
  movieId: string
}): Promise<RatedMovieSuccess> {
  return await post(
    `${RATE_URL}/${movieData.movieId}/rating?api_key=${apiKey}&guest_session_id=${movieData.sessionId}`,
    { value: movieData.value }
  )
}

export async function getRatedMovies (
  sessionId: Session | undefined
): Promise<Movie[]> {
  const session: string = sessionId != null ? sessionId.guest_session_id : ''
  return await get(
    `${RATED_MOVIES_URL}/${session}/rated/movies?api_key=${apiKey}`
  )
}
