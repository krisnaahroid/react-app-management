import PropTypes from 'prop-types'
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts'

const StatsChart = ({ dataChart }) => (
  <div className="chart-container">
    <ResponsiveContainer>
      <LineChart data={dataChart}>
        <XAxis dataKey="name" />
        <YAxis />
        <CartesianGrid stroke="#f5f5f5" />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="income" stroke="#82ca9d" strokeWidth={2} activeDot={{ r: 8 }} />
        <Line type="monotone" dataKey="order" stroke="#8884d8" strokeWidth={2} />
        <Line type="monotone" dataKey="pending_order" stroke="#a71d54" strokeWidth={2} />
      </LineChart>
    </ResponsiveContainer>
  </div>
)

StatsChart.propTypes = {
  dataChart: PropTypes.object,
}

export default StatsChart
