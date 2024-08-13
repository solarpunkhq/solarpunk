import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}

export const getStepNameFromIndex = (current_step) => {
  switch (current_step) {
    case -1:
      return 'Rejected'
    case 0:
      return 'Details'
    case 1:
      return 'In Review'
    case 2:
      return 'Planning'
    case 3:
      return 'Deployment'
    default:
      return 'Unknown'
  }
}
