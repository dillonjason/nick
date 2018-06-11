import React from 'react'
import PropTypes from 'prop-types'
import ReactMarkdown from 'react-markdown'

import {profile_data, picture, content, links} from './styles.scss'

export const ProfileData = ({displayName, about, profilePicture, resume, facebook, instagram, email}) => (
  <div className={profile_data}>
    <div className={picture} style={{background:`url(${profilePicture.url}) center`}} />
    <div className={content}>
      <h1>{displayName}</h1>
      <div className={links}>
        <a href={facebook}>Facebook</a>
        <a href={instagram}>Instagram</a>
        <a href={email}>Email</a>
        <a href={resume}>Resume</a>
      </div>
      {about && <ReactMarkdown source={about} />}
    </div>
  </div>
)

ProfileData.propTypes = {
  displayName: PropTypes.string.isRequired,
  about: PropTypes.string.isRequired,
  profilePicture: PropTypes.shape({
    url: PropTypes.string.isRequired
  }).isRequired,
  resume: PropTypes.string.isRequired,
  facebook: PropTypes.string.isRequired,
  instagram: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired
}
