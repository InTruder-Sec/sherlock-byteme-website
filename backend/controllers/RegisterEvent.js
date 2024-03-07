import Sendmail from "../Mail/Sendmail.js";
import Event from "../models/Event.js";

const RegisterEvent = async (req, res) => {
  const body = req.body;
  console.log(body.emails);
  try {
    Event.create(body)
      .then((data) => {
        // Send mail
        let emails = [
          body.registrationDetails.emails[0].email,
          body.registrationDetails.emails[1].email,
        ];
        if (body.registrationDetails?.member3 !== "") {
          emails.push(body.registrationDetails.emails[2].email);
        }
        let Tokens = [
          body.registrationDetails.emails[0].token,
          body.registrationDetails.emails[1].token,
        ];
        if (body.registrationDetails.emails[2] !== undefined) {
          Tokens.push(body.registrationDetails.emails[2].token);
        }
        Sendmail(emails, Tokens, body.registrationDetails.teamname);
        res.send({
          key: 200,
          message:
            "Thanks for registering! A verification email has been sent to your email address. Please verify your email to complete the registration. Also check your spam folder if you don't see the email in your inbox.",
        });
        return;
      })
      .catch((error) => {
        if (error.code === 11000) {
          console.log(error);
          res.send({
            key: 401,
            message: "Team name or email already exists!",
          });
          return;
        }
        console.log(error);
        res.send({
          key: 401,
          message: "Error registering for the event!",
        });
      });
  } catch (error) {
    console.log(error);
    res.send({
      key: 401,
      message: "Error registering for the event!",
    });
  }
};

export default RegisterEvent;

// dummydata
