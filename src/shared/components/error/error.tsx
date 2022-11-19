import React from 'react'
import { Alert } from 'antd'

const Error = (): JSX.Element => {
  return (
    <Alert type='error' message="Ha habido un error inesperado" closable/>
  )
}

export default Error
