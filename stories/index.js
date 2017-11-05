import { setDefaults } from '@storybook/addon-info'
import 'styles'

setDefaults({
  header: false,
  inline: true,
  source: false,
  propTables: [],
  styles: {},
})

require('./components/table.js')
