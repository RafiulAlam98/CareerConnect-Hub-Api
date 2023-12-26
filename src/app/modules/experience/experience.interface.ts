import { Model } from 'mongoose'

export type IExperience = {
  profile: string
  organization: string
  location: string
  isWorkFromHome?: boolean
  startDate?: string
  endDate?: string
  currentlyWorking: boolean
  description?: string
  responsibility: string
}

export type ExperienceModel = Model<IExperience>
