import React, { useState } from 'react'
import { useMovies } from '../../shared/hooks/useMovies'
import { useNavigate } from 'react-router-dom'
import { Input, Row } from 'antd'

import MovieCard from './movie-card/movie-card'

import './movies-search.css'

const MoviesSearch = (): JSX.Element => {
  const [criteria, setCriteria] = useState<string>('')
  const { movies } = useMovies(criteria)
  const navigate = useNavigate()

  const getImage = (image: string | null): any => {
    if (image === null) return image
    return `https://image.tmdb.org/t/p/original/${String(image)}`
  }

  const navigateToMovieDetail = (id: string): void => {
    navigate(`/movie/${id}`)
  }

  return (
    <>
      <Row className="movies__search">
        <Input.Search
          className='movies__search-input'
          allowClear
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            setCriteria(event.target.value)
          }
        />
      </Row>
      <section className="movies__list">
        {movies?.map((movie) => (
          <MovieCard
            id={movie.id}
            key={movie.id}
            image={getImage(movie.poster_path)}
            title={movie.title}
            date={movie.release_date}
            onClick={navigateToMovieDetail}
          />
        ))}
      </section>
    </>
  )
}

export default MoviesSearch
