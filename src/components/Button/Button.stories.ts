import type { Story } from '@storybook/vue3'
import Button from './Button.vue'
import type { IBtnProps } from './types'
import { EButtonTypes } from './types'

export default {
  title: 'Unuseless-UI/Button',
  component: Button,
  argTypes: {
    type: {
      control: { type: 'select' },
      options: [...Object.values(EButtonTypes)],
    },
    // parameter "default" to set the text in component inner
    default: { control: { type: 'text' } },
  },
}

const Template: Story<IBtnProps & {
  default?: string
}> = args => ({
  // Components used in your story `template` are defined in the `components` object
  components: { Button },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args }
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: '<Button v-bind="args">{{args.default}}</Button>',
})
export const Default = Template.bind({})
Default.args = {
  default: 'Default',
}
Default.storyName = 'Default Button'

export const Primary = Template.bind({})
Primary.args = {
  type: 'primary',
  default: 'Primary',
}
Primary.storyName = 'Primary Button'
