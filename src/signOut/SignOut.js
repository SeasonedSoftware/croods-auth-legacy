import React from 'react'
import { Destroy } from 'croods'

import render from './render'

export default props => {
  const { relativePath = '/auth/sign_out' } = props
  return (
    <Destroy
      id="currentUser"
      path={relativePath}
      name="auth.signOut"
      parseDestroyResponse={() => ({ destroyed: { id: 'currentUser' } })}
      render={render(props)}
    />
  )
}
