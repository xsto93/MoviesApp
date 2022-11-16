import React from 'react'
import { Row, Col, Rate } from 'antd'

import { useParams } from 'react-router-dom'
import MovieImage from '../movies-search/movie-image/movie-image'
import { useSingleMovie } from '../../shared/hooks/useSingleMovie'

import './movies-detail.css'

const MoviesDetail = (): JSX.Element => {
  const { id } = useParams()
  const { movie } = useSingleMovie(id)

  return (
    <Row>
      <Col
        span={12}
        className="movies-detail__image-container"
        xl={12}
        lg={24}
        md={24}
        sm={24}
        xs={24}
      >
        <MovieImage alt={movie?.title} src={movie?.poster_path} className="movies-detail__image"/>
      </Col>
      <Col
        span={12}
        className="product-container"
        xl={12}
        lg={24}
        md={24}
        sm={24}
        xs={24}
      >
        <Row>
          <p>description</p>
        </Row>
        <Row>
          <p>{`${String(movie?.vote_average)} / 10`}</p>
        </Row>
        <Row>
          <Rate allowClear allowHalf value={movie?.vote_average} count={10} />
        </Row>
      </Col>
    </Row>
  )
}

export default MoviesDetail
