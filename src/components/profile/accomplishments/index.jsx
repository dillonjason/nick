import React, {Component} from 'react'
import PropTypes from 'prop-types'
import map from 'lodash/map'

import styles from './styles.scss'

export class Accomplishments extends Component {
  constructor (props) {
    super(props)

    this.state = {
      expanded: -1
    }

    this.onAccomplishmentClick = this.onAccomplishmentClick.bind(this)
    this.closeExpanded = this.closeExpanded.bind(this)
  }

  onAccomplishmentClick (index) {
    if (this.state.expanded !== index) {
      const clicked = this.props.accomplishments[index]

      if (clicked.description) {
        this.setState({expanded: index})
      }
    }
  }

  closeExpanded () {
    this.setState({expanded: -1})
  }

  render () {
    return (
      <div className={styles.accomplishments}>
        {map(this.props.accomplishments, ({title, description}, index) => {
          let className = styles.accomplishment
          let descriptionClassName = styles.description
          const isExpanded = index === this.state.expanded

          if (isExpanded) {
            className += ` ${styles.expanded}`
            descriptionClassName += ` ${styles.expanded}`
          }

          return (
            <div className={className} key={index} onClick={() => this.onAccomplishmentClick(index)}>
              {isExpanded && <span onClick={this.closeExpanded} className={styles.close}>X</span>}
              <div className={styles.title}>{title}</div>
              {description && <div className={descriptionClassName}>{description}</div>}
            </div>
          )
        })}
      </div>
    )
  }
}

Accomplishments.propTypes = {
  accomplishments: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string
  })).isRequired
}
