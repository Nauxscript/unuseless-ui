import type { PropType } from 'vue'

export interface IBtnProps {
  type: TBtnTypes
  disabled?: boolean
}

export enum EButtonTypes {
  PRIMARY = 'primary',
  DEFAULT = 'default',
  DISABLED = 'disabled',
}

export type TBtnTypes = 'default' | 'primary' | 'disable'

// const arr: EButtonTypes[] = [EButtonTypes.DEFAULT]

export const btnPropsFn = () => ({
  type: {
    type: String as PropType<EButtonTypes>,
    default: EButtonTypes.DEFAULT,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
})
