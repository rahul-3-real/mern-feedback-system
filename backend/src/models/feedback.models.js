import mongoose from "mongoose";

const feedbackSchema = new mongoose.Schema(
  {
    // IP Address
    ipAddress: {
      type: String,
      required: true,
    },

    // Personal Information
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    company: {
      type: String,
      required: true,
    },

    // Position/Relationship Information
    relationship: {
      type: {
        category: {
          type: String,
          enum: ["Colleague", "Employer", "Freelance Client", "Other"],
          required: true,
        },
        customText: {
          type: String,
        },
      },
      required: true,
    },

    // Rating Scale
    communicationSkills: {
      type: Number,
      min: 1,
      max: 5,
      required: true,
    },
    teamwork: {
      type: Number,
      min: 1,
      max: 5,
      required: true,
    },
    leadership: {
      type: Number,
      min: 1,
      max: 5,
      required: true,
    },
    adaptability: {
      type: Number,
      min: 1,
      max: 5,
      required: true,
    },

    // Overall Satisfaction
    overallSatisfaction: {
      type: Number,
      min: 1,
      max: 5,
      required: true,
    },

    // Comments or Suggestions
    comments: {
      type: String,
    },
  },
  { timestamps: true }
);

const Feedback = mongoose.model("Feedback", feedbackSchema);

export default Feedback;
