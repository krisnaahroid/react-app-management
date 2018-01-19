import PropTypes from 'prop-types'
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts'

const data = [
  {name: 'Page A', uv: 4000, pv: 2400, amt: 2400},
  {name: 'Page B', uv: 3000, pv: 1398, amt: 2210},
  {name: 'Page C', uv: 2000, pv: 9800, amt: 2290},
  {name: 'Page D', uv: 2780, pv: 3908, amt: 2000},
  {name: 'Page E', uv: 1890, pv: 4800, amt: 2181},
  {name: 'Page F', uv: 2390, pv: 3800, amt: 2500},
  {name: 'Page G', uv: 3490, pv: 4300, amt: 2100},
]

const StatsChart = () => (
  <div className="chart-container">
    <ResponsiveContainer>
      <LineChart data={data}>
       <XAxis dataKey="name"/>
       <YAxis/>
       <CartesianGrid stroke='#f5f5f5'/>
       <Tooltip/>
       <Legend />
       <Line type="monotone" dataKey="pv" stroke="#82ca9d" strokeWidth={2} activeDot={{r: 8}}/>
       <Line type="monotone" dataKey="uv" stroke="#8884d8" strokeWidth={2} />
      </LineChart>
    </ResponsiveContainer>
  </div>
)

export default StatsChart
