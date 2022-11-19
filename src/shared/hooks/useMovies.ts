import { useQuery } from 'react-query'
import { Movie } from '../../core/models/movies'
import { getMovies } from '../../core/services/movies.service'
import { refreshTime } from '../utils/constants'

interface Movies {
  movies: Movie[] | undefined
  isLoading: Boolean
}

export function useMovies (criteria: string = ''): Movies {
  const { data, isLoading } = useQuery<Movie | any, Error>(['movies', criteria], async () => await getMovies(criteria), {
    placeholderData: [],
    refetchInterval: refreshTime
  })

  return { movies: data.results, isLoading }
}
