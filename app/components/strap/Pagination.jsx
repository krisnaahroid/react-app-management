import PropTypes from 'prop-types'
import { omit, range, isNumber } from 'lodash'
import { Pagination as BSPagination, PaginationItem, PaginationLink } from 'reactstrap'
import { MAX_PAGINATION_LENGTH } from 'constants/Kokoro'

/* eslint-disable no-mixed-operators, prefer-destructuring */
export class Pagination extends React.Component {
  constructor(props) {
    super(props)

    this.handlePageChange = this.handlePageChange.bind(this)

    const pages =  Math.ceil(this.props.dataSize / this.props.itemsPerPage)
    this.state = {
      currentPage: props.currentPage || 0,
      ...this.calibratePages(pages),
    }
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.dataSize !== nextProps.dataSize || this.pages === 0) {
      const pages = Math.ceil(nextProps.dataSize / nextProps.itemsPerPage)
      this.setState(this.calibratePages(pages))
    }
  }

  calibratePages(pages) {
    return {
      pages,
      arrayOfPaginatedPages: this.calculateArrayOfPaginatedPages(pages),
    }
  }

  calculateArrayOfPaginatedPages(pages, newPage) {
    const currentPage = isNumber(newPage) ? newPage + 1 : (this.props.currentPage || 0) + 1
    const halfOfMax = Math.floor(MAX_PAGINATION_LENGTH / 2)
    let start = Math.max(currentPage - halfOfMax, 1)
    const end = Math.min(start + MAX_PAGINATION_LENGTH - 1, pages)

    if (end === pages) {
      start = Math.max(end - MAX_PAGINATION_LENGTH + 1, 1)
    }

    return range(start, end + 1, 1)
  }

  handlePageChange(evt, index) {
    evt.preventDefault()

    const currentPage = this.state.currentPage
    const pages = this.state.pages

    let newPage
    switch (index) {
      case 'next': {
        newPage = currentPage === pages - 1
          ? pages - 1
          : currentPage + 1
        break
      }
      case 'prev': {
        newPage = currentPage === 0
          ? 0
          : currentPage - 1
        break
      }
      default: {
        newPage = index
      }
    }

    this.setState({
      arrayOfPaginatedPages: this.calculateArrayOfPaginatedPages(this.state.pages, newPage),
    })

    this.setState({
      currentPage: newPage,
    })

    this.props.onPageChange(evt, newPage)
    window.scrollTo(0, 0)
  }

  render() {
    const {
      dataSize,
      itemsPerPage,
      ...props
    } = omit(this.props, [
      'onPageChange',
      'currentPage',
    ])

    if (dataSize <= itemsPerPage) {
      return null
    }

    return (
      <BSPagination {...props}>
        <PaginationItem disabled={this.state.currentPage === 0}>
          <PaginationLink previous href="#" onClick={evt => this.handlePageChange(evt, 'prev')}>
            Back
          </PaginationLink>
        </PaginationItem>
        {
          this.state.arrayOfPaginatedPages.map(index => (
            <PaginationItem key={index} active={(index - 1) === this.state.currentPage}>
              <PaginationLink href="#" onClick={evt => this.handlePageChange(evt, (index - 1))}>
                {index}
              </PaginationLink>
            </PaginationItem>
          ))
        }
        <PaginationItem disabled={this.state.currentPage === this.state.pages - 1}>
          <PaginationLink next href="#" onClick={evt => this.handlePageChange(evt, 'next')}>
            Next
          </PaginationLink>
        </PaginationItem>
      </BSPagination>
    )
  }
}

Pagination.propTypes = {
  dataSize: PropTypes.number,
  itemsPerPage: PropTypes.number,
  onPageChange: PropTypes.func,
  currentPage: PropTypes.number,
}

export default Pagination
