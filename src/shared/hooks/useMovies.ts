import { useQuery } from 'react-query'
import { getMovies } from '../../core/services/movies.service'

interface Movies {
  movies: any[] | undefined
  isLoading: Boolean
}

export function useMovies (criteria: string = ''): Movies {
  const { data, isLoading } = useQuery<any, Error>(['movies', criteria], async () => await getMovies(criteria), {
    placeholderData: [],
    cacheTime: 3600000,
    staleTime: Infinity
  })

  return { movies: data.results, isLoading }
}
