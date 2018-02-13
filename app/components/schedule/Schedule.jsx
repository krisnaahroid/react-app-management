import PropTypes from 'prop-types'
import BigCalendar from 'react-big-calendar'
import moment from 'moment'

BigCalendar.setLocalizer(BigCalendar.momentLocalizer(moment))

const Schedule = ({ events }) => (
  <div className="schedule-cal">
    <BigCalendar
      events={events}
      step={60}
      defaultDate={new Date()}
      popup
    />
  </div>
)

Schedule.propTypes = {
  events: PropTypes.array,
}

export default Schedule
