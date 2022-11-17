import { useQuery } from 'react-query'
import { Movie } from '../../core/models/movies'
import { getMovie } from '../../core/services/movies.service'

interface MovieData {
  movie: Movie | undefined
  isLoading: Boolean
}

export function useSingleMovie (id: string | undefined): MovieData {
  const placeholderData: Movie | undefined = undefined
  const { data, isLoading } = useQuery<Movie, Error>(['movie', id], async () => await getMovie(String(id)), {
    placeholderData,
    cacheTime: 3600000,
    staleTime: Infinity
  })

  // const saveRateOfMovie = (movieId: number): void => {

  // }

  return { movie: data, isLoading }
}
