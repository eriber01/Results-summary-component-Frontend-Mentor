import { key } from "@/interfaces";

export const bgColors = (name: key) => {
  switch (name) {
    case 'Reaction':
      return 'bg-red-50'
    case 'Memory':
      return 'bg-yellow-50'
    case 'Verbal':
      return 'bg-green-50'
    case 'Visual':
      return 'bg-blue-50'
    default:
      return 'Not img';
  }
}

export const textColors = (name: key) => {
  switch (name) {
    case 'Reaction':
      return 'text-red-500'
    case 'Memory':
      return 'text-yellow-500'
    case 'Verbal':
      return 'text-green-500'
    case 'Visual':
      return 'text-blue-700'
    default:
      return 'Not img';
  }
}