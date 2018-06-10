import React from 'react'
import PropTypes from 'prop-types'
import map from 'lodash/map'

import styles from './styles.scss'

export const Accomplishments = ({accomplishments}) => (
  <div className={styles.accomplishments}>
    {map(accomplishments, ({title, description}, index) => (
      <div className={styles.accomplishment} key={index}>
        <div className={styles.title}>{title}</div>
        {description && <div className={styles.description}>{description}</div>}
      </div>
    ))}
  </div>
)

Accomplishments.propTypes = {
  accomplishments: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string
  })).isRequired
}
