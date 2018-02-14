import FeedbackView from 'components/feedback/Feedback'

export function mapStateToProps(state) {
  return {
    events: state.feedback.events,
  }
}

export default (FeedbackView)
