import { compose, withHandlers, withState } from 'recompose'
import HeaderView from 'components/header/Header'

export default compose(
  withState('isOpen', 'setOpen', false),
  withHandlers({
    toggle: props => () => {
      props.setOpen(!props.isOpen)
    },
  }),
)(HeaderView)
