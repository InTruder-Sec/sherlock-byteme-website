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
        res.status(200).send("Feedback submitted successfully");
      })
      .catch((error) => {
        res.status(500).send("Internal Server Error");
      });
  } catch (error) {
    res.status(500).send("Internal Server Error");
  }

  return;
};

export default FeedbackRoute;
