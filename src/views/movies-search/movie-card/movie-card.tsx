import React from 'react'
import { Card } from 'antd'

interface Props {
  title: string
  image: string
  date?: Date
}

const MovieCard = ({ image, date, title }: Props): JSX.Element => {
  // const [isRating, setIsRating] = useState<Boolean>(false)
  return (
    <Card
      size="small"
      cover={
        <img
          src={image}
          alt={title}
          loading="lazy"
        />
      }
      hoverable
    >
      <Card.Meta title={title} />
    </Card>
  )
}

export default MovieCard
