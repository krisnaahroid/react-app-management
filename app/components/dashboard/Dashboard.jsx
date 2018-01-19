import PropTypes from 'prop-types'
import TherapistTableListView from 'components/therapist/TherapistTableListView'
import StatsChart from 'components/dashboard/StatsChart'
import Widget from 'components/dashboard/Widget'
import { Pagination } from 'components/strap'

const Dashboard = ({
  therapists, totalCount, currentPage, getMoreList, statOrder, statIncome, statPendingOrder, dataChart,
}) => (
  <div>
    <div className="row">
      <div className="col-lg-12">
        <Widget order={statOrder} income={statIncome} pendingOrder={statPendingOrder} />
        <StatsChart dataChart={dataChart} />
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
  statOrder: PropTypes.number,
  statIncome: PropTypes.number,
  statPendingOrder: PropTypes.number,
  dataChart: PropTypes.array,
}

export default Dashboard
