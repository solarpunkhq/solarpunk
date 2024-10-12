import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: any) {
  return twMerge(clsx(inputs));
}

export const getStepNameFromIndex = (current_step: number) => {
  switch (current_step) {
    case -1:
      return 'Rejected';
    case 0:
      return 'Details';
    case 1:
      return 'In Review';
    case 2:
      return 'Planning';
    case 3:
      return 'Deployment';
    case 4:
      return 'Finished';
    default:
      return 'Unknown';
  }
};

export const formatNumberAsAmount = (amount: string) => {
  return amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};
