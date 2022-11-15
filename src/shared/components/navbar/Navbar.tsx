import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import { Row, Col, Layout, Typography, Menu } from 'antd'

import './Navbar.css'

const { string } = PropTypes
const { Header } = Layout
const { Title } = Typography

interface Props {
  title: string
}

const Navbar = ({ title }: Props): JSX.Element => {
  return (
    <Row justify="space-between">
      <Col xl={24} lg={24} md={24} sm={24} xs={24}>
        <Header className='navbar__container navbar__container--coral'>
          <Row justify="center">
            <Col
              xl={6}
              lg={6}
              md={12}
              sm={24}
              xs={24}
              className="navbar__title"
            >
              <Title id="title" level={2} className="navbar__title-content navbar__title--white">
                {title}
              </Title>
            </Col>
            <Col
              xl={18}
              lg={18}
              md={12}
              sm={24}
              xs={24}
            >
              <Menu mode="horizontal" defaultSelectedKeys={['search']} className="navbar__container--coral">
                <Menu.Item key="search" className='navbar__link'>
                    <Link to={'search'} className='navbar__link--primary'>Buscador 🔍</Link>
                </Menu.Item>
                <Menu.Item key="mylist" className='navbar__link'>
                    <Link to={'mylist'} className='navbar__link--primary'>Valoradas 👍</Link>
                </Menu.Item>
              </Menu>
            </Col>
          </Row>
        </Header>
      </Col>
    </Row>
  )
}

Navbar.propTypes = {
  title: string.isRequired
}

export default Navbar
