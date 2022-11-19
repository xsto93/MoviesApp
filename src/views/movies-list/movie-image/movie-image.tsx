import React from 'react'

interface Props {
  src: string | undefined
  alt: string | undefined
  className?: string
  onClick?: (event: React.MouseEvent<HTMLImageElement, MouseEvent>) => void
}

const MovieImage = ({ src, alt, className, onClick }: Props): JSX.Element => {
  const getImage = (image: string | undefined): string => {
    if (image === null) return image
    return `https://image.tmdb.org/t/p/original/${String(image)}`
  }

  return (
    <img
          onClick={onClick}
          className={className}
          src={getImage(src)}
          alt={alt}
          loading="lazy"
        />
  )
}

export default MovieImage
