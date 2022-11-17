import React, { useState } from 'react'
import { Row, Col, Rate, Divider, Tag, Collapse, Button } from 'antd'

import { useParams } from 'react-router-dom'
import MovieImage from '../movies-search/movie-image/movie-image'
import { useSingleMovie } from '../../shared/hooks/useSingleMovie'

import { StarFilled, CloseOutlined, SaveOutlined } from '@ant-design/icons'
import './movies-detail.css'
import MovieDetail from './movie-detail/movie-detail'

const MoviesDetail = (): JSX.Element => {
  const { id } = useParams()
  const { movie } = useSingleMovie(id)
  const [rate, setRate] = useState<number>(0)

  return (
    <>
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
                onChange={(value: number) => setRate(value)}
                count={10}
              />
            </Col>
            <Col
              style={{
                justifyContent: 'center',
                display: 'flex',
                gap: '10px',
                marginTop: '1rem'
              }}
            >
              <Button icon={<CloseOutlined />} type="link">
                Atrás
              </Button>
              <Button icon={<SaveOutlined />} type="link">
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
