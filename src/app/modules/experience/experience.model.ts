import { Schema, model } from 'mongoose'
import { ExperienceModel, IExperience } from './experience.interface'

const ExperienceSchema = new Schema<IExperience>(
  {
    profile: {
      type: String,
      required: true,
    },
    organization: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    startDate: {
      type: String,
      required: false,
    },
    endDate: {
      type: String,
      required: false,
    },
    isWorkFromHome: {
      type: Boolean,
      required: false,
    },
    description: {
      type: String,
      required: false,
    },
    currentlyWorking: {
      type: Boolean,
      required: false,
    },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  },
)

export const Experience = model<IExperience, ExperienceModel>(
  'experience',
  ExperienceSchema,
)
