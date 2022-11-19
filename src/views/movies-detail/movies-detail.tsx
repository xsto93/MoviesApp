import React, { useState } from 'react'
import { Row, Col, Rate, Divider, Tag, Collapse, Button, message } from 'antd'

import { useParams } from 'react-router-dom'
import MovieImage from '../movies-list/movie-image/movie-image'
import { useMovie } from '../../shared/hooks/useMovie'

import { StarFilled, SaveOutlined } from '@ant-design/icons'
import './movies-detail.css'
import MovieDetail from './movie-detail/movie-detail'
import { useSession } from '../../shared/hooks/useSession'
import { useMutation } from 'react-query'
import { rateMovie } from '../../core/services/movies.service'
import Error from '../../shared/components/error/error'

const MoviesDetail = (): JSX.Element => {
  const { id } = useParams()
  const [messageApi, contextHolder] = message.useMessage()
  const [rate, setRate] = useState<number>(0)
  const data = useSession()
  const { movie, error } = useMovie(id)
  const { mutate } = useMutation(rateMovie, {
    onSuccess: (): void =>
      openMessage('success', 'La valoración se ha guardado correctamente'),
    onError: (): void => openMessage('error', 'Ha habido un error inesperado.')
  })

  const openMessage = (
    type: 'error' | 'success' | 'info' | 'warning' | 'loading',
    message: string
  ): void => {
    // tslint:disable-next-line:no-floating-promises
    messageApi[type]({
      type,
      content: message,
      duration: 2
    })
  }

  const handleClick = (): void => {
    mutate({
      value: rate,
      sessionId: String(data?.guest_session_id),
      movieId: String(id)
    })
  }

  if (error !== null) { return <Error /> }

  return (
    <>
      {contextHolder}
      <Row className="movies-detail__header">
        <Col className="movies-detail__header-title">
          <h1>{movie?.title}</h1>
        </Col>
        <Col className="movies-detail__header-stars">
          <StarFilled style={{ color: '#fadb14' }} size={18} />
          <div className="movies-detail__header-stars--bold">{`${String(
            movie?.vote_average
          )} / 10`}</div>
        </Col>
        <Col className="movies-detail__header-tags">
          {movie?.genres.map((genre) => (
            <Tag className="movies-detail__header-tags--rounded" key={genre.id}>
              {genre.name}
            </Tag>
          ))}
        </Col>
      </Row>
      <Divider />
      <Row>
        <Col
          className="movies-detail__image-container"
          xl={12}
          lg={12}
          md={12}
          sm={24}
          xs={24}
        >
          <MovieImage
            alt={movie?.title}
            src={movie?.poster_path}
            className="movies-detail__image"
          />
        </Col>
        <Col
          className="movies-detail__descriptions"
          xl={12}
          lg={12}
          md={12}
          sm={24}
          xs={24}
        >
          <Row>
            <Collapse defaultActiveKey={['1']} ghost>
              <Collapse.Panel header="Información de la película" key="1">
                <MovieDetail movie={movie} />
              </Collapse.Panel>
            </Collapse>
          </Row>
          <Row className="movies-detail__rate-section">
            <Col xl={24} lg={24} md={24} sm={24} xs={24}>
              <div className="movies-detail__rate-section-subtitle">
                Valora la película:
              </div>
              <Rate
                allowClear
                allowHalf
                value={rate}
                onChange={(newValue) => setRate(newValue)}
                count={10}
              />
               <Button icon={<SaveOutlined />} onClick={handleClick} type="link">
                  Guardar puntuanción
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  )
}

export default MoviesDetail
