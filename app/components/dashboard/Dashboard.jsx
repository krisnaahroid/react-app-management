import PropTypes from 'prop-types'
import TherapistTableListView from 'components/therapist/TherapistTableListView'
import { Pagination } from 'components/strap'

const Dashboard = ({
  therapists, totalCount, currentPage, getMoreList,
}) => (
  <div>
    <div className="row">
      <div className="col-lg-12">
        <TherapistTableListView therapists={therapists} />

        <Pagination
          className="justify-content-center"
          dataSize={totalCount}
          itemsPerPage={8}
          onPageChange={getMoreList}
          currentPage={currentPage}
        />
      </div>
    </div>
  </div>
)

Dashboard.propTypes = {
  therapists: PropTypes.array.isRequired,
  totalCount: PropTypes.number,
  currentPage: PropTypes.number,
  getMoreList: PropTypes.func,
}

export default Dashboard
