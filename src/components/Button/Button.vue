<script lang="ts" setup>
import { btnPropsFn } from './types'

const props = defineProps(btnPropsFn())
</script>

<template>
  <div
    class="px-4 lh-10 h-10 inline-flex rounded"
    :class="{
      'cursor-pointer': props.type !== 'disabled' || props.disabled,
      'border-1 bg-white border-gray-300 text-gray-400': props.type === 'default',
      'border-1 bg-blue border-blue text-white': props.type === 'primary',
      'border-1 border-gray-300 bg-gray-300 text-white cursor-not-allowed': props.type === 'disabled' || props.disabled,
    }"
  >
    <slot />
  </div>
</template>
