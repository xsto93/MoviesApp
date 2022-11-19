import React from 'react'
import { Card } from 'antd'
import { CardSize } from 'antd/lib/card/Card'
import { StarFilled } from '@ant-design/icons'

import MovieImage from '../movie-image/movie-image'
import './movie-card.css'

interface Props {
  id: string
  title: string
  image: string
  date: string
  rating?: number
  size?: CardSize
  onClick: (id: string) => void
}

const MovieCard = ({
  id,
  image,
  date,
  title,
  rating,
  size = 'small',
  onClick
}: Props): JSX.Element => {
  const handleOnClick = (
    event: React.MouseEvent<HTMLImageElement, MouseEvent>
  ): void => {
    event.preventDefault()
    onClick(id)
  }

  return (
    <Card
      size={size}
      className="movie__card--rounded"
      cover={<MovieImage onClick={handleOnClick} src={image} alt={title} />}
      hoverable
    >
      <Card.Meta title={title} />
      <Card.Meta title={date} />
      {rating != null
        ? (
        <Card.Meta
          title={
            <>
              <StarFilled style={{ color: '#fadb14' }} size={18} /> {rating}
            </>
          }
        />
          )
        : null}
    </Card>
  )
}

export default MovieCard
