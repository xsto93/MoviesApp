import React, { useState } from 'react'
import { useMovies } from '../../shared/hooks/useMovies'
import { useNavigate } from 'react-router-dom'
import { Input, Row, Spin } from 'antd'

import './movies-search.css'
import MoviesList from '../movies-list/movies-list'

const MoviesSearch = (): JSX.Element => {
  const [criteria, setCriteria] = useState<string>('')
  const { movies, isLoading } = useMovies(criteria)
  const navigate = useNavigate()

  const navigateToMovieDetail = (id: string): void => {
    navigate(`/movie/${id}`)
  }

  return (
    <>
      <Row className="movies__search">
        <Input.Search
          className="movies__search-input"
          allowClear
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            setCriteria(event.target.value)
          }
        />
      </Row>
      <Spin spinning={Boolean(isLoading)}>
        <MoviesList movies={movies} onClick={navigateToMovieDetail}/>
      </Spin>
    </>
  )
}

export default MoviesSearch
