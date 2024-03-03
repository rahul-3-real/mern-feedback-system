import Feedback from "../models/feedback.models.js";

export const submitFeedback = async (req, res) => {
  try {
    // Extract data from the request body
    const ipAddress = req.ip;
    const {
      name,
      email,
      company,
      relationship,
      communicationSkills,
      teamwork,
      leadership,
      adaptability,
      overallSatisfaction,
      comments,
    } = req.body;

    // Check for empty fields
    if (
      !name ||
      !email ||
      !company ||
      !relationship ||
      !communicationSkills ||
      !teamwork ||
      !leadership ||
      !adaptability ||
      !overallSatisfaction
    ) {
      return res
        .status(400)
        .json({ success: false, error: "All fields are required" });
    }

    // Create a new feedback instance
    const newFeedback = new Feedback({
      ipAddress,
      name,
      email,
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

    // Set a cookie indicating that the user/feedback is created
    res.cookie("feedbackCreated", true, { maxAge: 86400000, httpOnly: true });

    // Send a JSON response with the saved feedback data
    res.status(201).json({ success: true, feedback: savedFeedback });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: "Internal Server Error" });
  }
};
