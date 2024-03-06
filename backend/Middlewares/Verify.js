const Verify = (req, res, next) => {
  const body = req.body;
  if (
    !body.eventName ||
    !body.registrationDetails.teamname ||
    !body.registrationDetails.teamleader ||
    !body.registrationDetails.teamleaderEmail ||
    !body.registrationDetails.teamleaderPhone ||
    !body.registrationDetails.member2 ||
    !body.registrationDetails.member2Email
  ) {
    res.send({
      key: 401,
      message: "Please provide all the details!",
    });
    return;
  }

  if (
    !body.registrationDetails.teamleaderEmail.includes("@pccoepune.org") ||
    !body.registrationDetails.member2Email.includes("@pccoepune.org") ||
    (body.registrationDetails.member3Email &&
      !body.registrationDetails.member3Email.includes("@pccoepune.org"))
  ) {
    if (!body.transactionId) {
      res.send({
        key: 401,
        message:
          "One or more email is not from PCCOE, please pay the event fees and provide transaction Id! Event fees is RS 25/- per member!",
      });
      return;
    }
  }
  next();
};

export default Verify;
