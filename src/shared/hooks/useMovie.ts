import { useQuery } from 'react-query'
import { Movie } from '../../core/models/movies'
import { getMovie } from '../../core/services/movies.service'

interface MovieData {
  movie: Movie | undefined
  isLoading: Boolean
  error: Error | null
}

export function useMovie (id: string | undefined, sessionId?: string): MovieData {
  const placeholderData: Movie | undefined = undefined
  const { data, isLoading, error } = useQuery<Movie, Error>(['movie', id], async () => await getMovie(String(id)), {
    placeholderData,
    cacheTime: 3600000,
    staleTime: Infinity
  })

  return { movie: data, isLoading, error }
}
