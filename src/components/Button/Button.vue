<script lang="ts" setup>
import type { IBtnProps } from './Button'
const props = withDefaults(defineProps<IBtnProps>(), {
  type: 'default',
})
</script>

<template>
  <div
    class="px-4 lh-10 h-10 inline-flex rounded cursor-pointer"
    :class="{
      'border-1 bg-white border-gray-300 text-gray-400': props.type === 'default',
      'border-1 bg-blue border-blue text-white': props.type === 'primary',
      'border-1 border-gray-300 bg-gray-300 text-white': props.type === 'disable' || props.disabled,
    }"
  >
    <slot />
  </div>
</template>
