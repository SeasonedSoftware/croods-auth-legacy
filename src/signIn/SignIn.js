import React from 'react'
import New from '../New'

export default ({ relativePath = '/auth/sign_in', ...props }) => {
  return <New {...props} name="auth.signIn" path={relativePath} />
}
