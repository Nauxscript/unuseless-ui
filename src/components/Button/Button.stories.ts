import type { Story } from '@storybook/vue3'
import Button from './Button.vue'
import type { IBtnProps, TBtnTypes } from './Button'
// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: 'Unuseless-UI/Button',
  component: Button,
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['default', 'disable', 'primary'] as Array<TBtnTypes>,
    },
  },
}

const Template: Story<IBtnProps & {
  text?: string
}> = args => ({
  // Components used in your story `template` are defined in the `components` object
  components: { Button },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args }
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: '<Button v-bind="args">{{args.text}}</Button>',
})
export const Default = Template.bind({})
Default.args = {
  text: 'Default',
}
Default.storyName = 'Default Button'

export const Primary = Template.bind({})
Primary.args = {
  type: 'primary',
  text: 'primary',
}
Primary.storyName = 'Primary Button'
