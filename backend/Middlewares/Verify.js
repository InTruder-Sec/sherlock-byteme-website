const Verify = (req, res, next) => {
  const body = req.body;
  console.log(body);
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

  // verify if phone number is number and valid
  if (isNaN(body.registrationDetails.teamleaderPhone)) {
    res.send({
      key: 401,
      message: "Phone number is not valid!",
    });
    return;
  }
  // Check if mails are same including letter case
  if (
    body.registrationDetails.teamleaderEmail.toLowerCase() ===
      body.registrationDetails.member2Email.toLowerCase() ||
    (body.registrationDetails.member3Email &&
      (body.registrationDetails.teamleaderEmail.toLowerCase() ===
        body.registrationDetails.member3Email.toLowerCase() ||
        body.registrationDetails.member2Email.toLowerCase() ===
          body.registrationDetails.member3Email.toLowerCase()))
  ) {
    res.send({
      key: 401,
      message: "Team member emails cannot be same!",
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
