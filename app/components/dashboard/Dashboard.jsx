import PropTypes from 'prop-types'
import { includes } from 'lodash'
import TherapistTableListView from 'components/therapist/TherapistTableListView'
import StatsChart from 'components/dashboard/StatsChart'
import Widget from 'components/dashboard/Widget'
import { Pagination } from 'components/strap'

const showWidget = (roles, statOrder, statIncome, statPendingOrder, dataChart) => {
  if (includes(roles, 'super_admin')) {
    return (
      <div>
        <Widget order={statOrder} income={statIncome} pendingOrder={statPendingOrder} />
        <StatsChart dataChart={dataChart} />
      </div>
    )
  }

  return null
}

const Dashboard = ({
  therapists, totalCount, currentPage, getMoreList, statOrder, statIncome, statPendingOrder, dataChart, roles,
}) => (
  <div>
    <div className="row">
      <div className="col-lg-12">
        {showWidget(roles, statOrder, statIncome, statPendingOrder, dataChart)}
        <TherapistTableListView therapists={therapists} roles={roles} />

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
  statOrder: PropTypes.number,
  statIncome: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  statPendingOrder: PropTypes.number,
  dataChart: PropTypes.array,
  roles: PropTypes.array,
}

export default Dashboard
