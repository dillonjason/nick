import React from 'react'
import PropTypes from 'prop-types'

import './styles.scss'

export const ProfileData = ({displayName, about, profilePicture}) => (
  <div className='profile-data'>
    <img className='picture' href={profilePicture.url} />
    <h1>{displayName}</h1>
    <p>{about}</p>
  </div>
)

ProfileData.propTypes = {
  displayName: PropTypes.string.isRequired,
  about: PropTypes.string.isRequired,
  profilePicture: PropTypes.shape({
    url: PropTypes.string.isRequired
  }).isRequired
}
