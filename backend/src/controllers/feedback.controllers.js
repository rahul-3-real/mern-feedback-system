import Feedback from "../models/feedback.models.js";

export const submitFeedback = async (req, res) => {
  try {
    // Extract data from the request body
    const ipAddress = req.ip;
    const {
      name,
      company,
      relationship,
      communicationSkills,
      teamwork,
      leadership,
      adaptability,
      overallSatisfaction,
      comments,
    } = req.body;

    // Create a new feedback instance
    const newFeedback = new Feedback({
      ipAddress,
      name,
      company,
      relationship,
      communicationSkills,
      teamwork,
      leadership,
      adaptability,
      overallSatisfaction,
      comments,
    });

    // Save the feedback to the database
    const savedFeedback = await newFeedback.save();

    // Send a JSON response with the saved feedback data
    res.status(201).json({ success: true, feedback: savedFeedback });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: "Internal Server Error" });
  }
};
