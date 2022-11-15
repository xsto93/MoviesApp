import React from 'react'
import { Card } from 'antd'

import './movie-card.css'

interface Props {
  id: string
  title: string
  image: string
  date: string
  onClick: (id: string) => void
}

const MovieCard = ({ id, image, date, title, onClick }: Props): JSX.Element => {
  const handleOnClick = (event: React.MouseEvent<HTMLImageElement, MouseEvent>): void => {
    event.preventDefault()
    onClick(id)
  }

  return (
    <Card
      size="default"
      className='movie__card--rounded'
      cover={
        <img
          onClick={handleOnClick}
          src={image}
          alt={title}
          loading="lazy"
        />
      }
      hoverable
    >
      <Card.Meta title={title} />
      <Card.Meta title={date} />
    </Card>
  )
}

export default MovieCard
