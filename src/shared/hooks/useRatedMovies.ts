import { useQuery, useQueryClient } from 'react-query'
import { Movie, Session } from '../../core/models/movies'
import { getRatedMovies } from '../../core/services/movies.service'
import { refreshTime } from '../utils/constants'

interface Movies {
  movies: Movie[] | undefined
  isLoading: Boolean
  error: Error | null
}

export function useRatedMovies (): Movies {
  const queryClient = useQueryClient()
  const sessionId: Session | undefined = queryClient.getQueryData(['sessionId'])

  const { data, isLoading, error } = useQuery<Session | any, Error>(['ratedMovies'], async () => await getRatedMovies(sessionId), {
    placeholderData: [],
    refetchInterval: refreshTime
  })

  return { movies: data.results, isLoading, error }
}
