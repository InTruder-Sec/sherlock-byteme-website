const FormatBody = (req, res, next) => {
  // Check if all data is present,

  const body = req.body;

  const token = Math.random().toString(36).substring(2, 18);
  const mailToken =
    token +
    "/" +
    body.registrationDetails.teamleaderEmail +
    "/" +
    Math.random().toString(36).substring(2, 10);
  const mailToken2 =
    token +
    "/" +
    body.registrationDetails.member2Email +
    "/" +
    Math.random().toString(36).substring(2, 10);
  const mailToken3 =
    token +
    "/" +
    body.registrationDetails.member3Email +
    "/" +
    Math.random().toString(36).substring(2, 10);

  let event = {
    verificationToken: token,
    eventName: body.eventName,
    registrationDetails: {
      teamname: body.registrationDetails.teamname,
      teamleader: body.registrationDetails.teamleader,
      teamleaderPhone: body.registrationDetails.teamleaderPhone,
      member2: body.registrationDetails.member2,
      member3: body.registrationDetails?.member3,
      emails: [
        {
          email: body.registrationDetails.teamleaderEmail,
          isVerifed: false,
          token: mailToken,
        },
        {
          email: body.registrationDetails.member2Email,
          isVerifed: false,
          token: mailToken2,
        },
        {
          email: body.registrationDetails.member3Email,
          isVerifed: false,
          token: mailToken3,
        },
      ],
    },
    transactionId: body.transactionId,
  };

  if (body.registrationDetails.member3 === undefined) {
    // delete 3rd member from array
    event.registrationDetails.emails.pop();
  }

  req.body = event;
  next();
};

export default FormatBody;
