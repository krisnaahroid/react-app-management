import React from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'

export class SVGIcon extends React.Component {
  iconName() {
    const iconRegex = /-/

    if (iconRegex.test(this.props.name)) {
      return `#${this.props.name}`
    }

    return `#common-${this.props.name}`
  }

  sizeClass() {
    if (!this.props.size) {
      return null
    }
    return `icon-${this.props.size}`
  }

  render() {
    const classNames = classnames(
      'icon',
      this.sizeClass(),
      this.props.className
    )

    return (
      <svg className={classNames}>
        <use xlinkHref={this.iconName()} />
      </svg>
    )
  }
}

SVGIcon.defaultProps = {
  size: null,
}

SVGIcon.propTypes = {
  size: PropTypes.oneOf([
    'sm',
    'md',
    'lg',
  ]),
  name: PropTypes.string.isRequired,
  className: PropTypes.string,
}
