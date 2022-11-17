import { Descriptions, Tag } from 'antd'
import React from 'react'
import { Movie } from '../../../core/models/movies'

interface Props {
  movie: Movie | undefined
}

const MovieDetail = ({ movie }: Props): JSX.Element => {
  return (
    <>
      <Descriptions
        bordered
        column={{ xxl: 1, xl: 1, lg: 1, md: 1, sm: 1, xs: 1 }}
      >
        <Descriptions.Item label="Original Title">
          {movie?.original_title}
        </Descriptions.Item>
        <Descriptions.Item label="Tag line">{movie?.tagline}</Descriptions.Item>
        <Descriptions.Item label="Overview">
          {movie?.overview}
        </Descriptions.Item>
        <Descriptions.Item label="Popularity">
          {movie?.popularity}
        </Descriptions.Item>
        <Descriptions.Item label="Revenue">{movie?.revenue}</Descriptions.Item>
        <Descriptions.Item label="Status">
          {<Tag color={String(movie?.status).toLocaleLowerCase() === 'released' ? 'green' : 'red'}>{movie?.status}</Tag>}
        </Descriptions.Item>
        <Descriptions.Item label="Runtime">{movie?.runtime}</Descriptions.Item>
        <Descriptions.Item label="Vote average">
          {movie?.vote_average}
        </Descriptions.Item>
        <Descriptions.Item label="Vote count">
          {movie?.vote_count}
        </Descriptions.Item>
      </Descriptions>
    </>
  )
}

export default MovieDetail
