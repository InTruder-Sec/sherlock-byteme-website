import FeedbackSchema from "../models/Feedback.js";

const FeedbackRoute = (req, res) => {
  const data = req.body;

  if (!data.name || !data.email || !data.feedback) {
    res.status(400).send("Please fill all the fields");
    return;
  }
  try {
    FeedbackSchema.create(data)
      .then((response) => {
        res.status(200).json({ success: true });
      })
      .catch((error) => {
        res.status(500).json({ success: false });
      });
  } catch (error) {
    res.status(500).json({ success: false });
  }

  return;
};

export default FeedbackRoute;
