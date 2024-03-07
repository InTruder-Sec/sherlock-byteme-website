import Event from "../models/Event.js";

const VerifyToken = async (req, res) => {
  const { token } = req.query;
  if (!token) {
    res.status(400).send("Token not found");
    return;
  }

  try {
    const tokenArray = token.split("/");
    const teamToken = tokenArray[0];
    const email = tokenArray[1];
    const emailToken = tokenArray[2];

    if (!teamToken || !email || !emailToken) {
      res.status(400).send("Invalid token");
      return;
    }

    const event = await Event.findOne({ verificationToken: teamToken });

    if (!event) {
      res.status(400).json({
        key: 400,
        message: "Invalid token",
      });
      return;
    }

    const emailIndex = event.registrationDetails.emails.findIndex(
      (emailObj) => emailObj.email === email
    );
    if (emailIndex === -1) {
      console.log("No email found");
      res.status(400).json({
        key: 400,
        message: "Invalid token",
      });
      return;
    }
    if (event.registrationDetails.emails[emailIndex].isVerifed) {
      res.status(200).json({
        key: 200,
        message: "Email already verified",
      });
      return;
    } else {
      if (event.registrationDetails.emails[emailIndex].token !== token) {
        console.log(
          event.registrationDetails.emails[emailIndex].token,
          emailToken
        );
        console.log("Token mismatch");
        res.status(400).json({
          key: 400,
          message: "Invalid token",
        });
        return;
      }

      event.registrationDetails.emails[emailIndex].isVerifed = true;
      const isAllVerified = event.registrationDetails.emails.every(
        (emailObj) => emailObj.isVerifed
      );
      if (isAllVerified) {
        await Event.updateOne(
          {
            verificationToken: teamToken,
          },
          {
            isVerifed: true,
          }
        );
      } else {
        await Event.updateOne(
          {
            verificationToken: teamToken,
          },
          {
            registrationDetails: event.registrationDetails,
          }
        );
      }
      res.status(200).json({
        key: 200,
        message: "Email verified successfully",
      });
      return;
    }
  } catch (error) {
    res.status(500).json({
      key: 500,
      message: "Internal server error",
    });
    return;
  }
  return;
};

export default VerifyToken;
