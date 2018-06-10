import React from 'react'
import PropTypes from 'prop-types'

import {profile_data, picture, content} from './styles.scss'

export const ProfileData = ({displayName, about, profilePicture}) => (
  <div className={profile_data}>
    <div className={picture} style={{background:`url(${profilePicture.url}) center`}} />
    <div className={content}>
      <h1>{displayName}</h1>
      <p>{about}</p>
    </div>
  </div>
)

ProfileData.propTypes = {
  displayName: PropTypes.string.isRequired,
  about: PropTypes.string.isRequired,
  profilePicture: PropTypes.shape({
    url: PropTypes.string.isRequired
  }).isRequired
}
