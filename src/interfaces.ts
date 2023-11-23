export type key = 'Reaction' | 'Memory' | 'Verbal' | 'Visual'

export interface SummariesProps {
  name: key,
  percentage: string
}