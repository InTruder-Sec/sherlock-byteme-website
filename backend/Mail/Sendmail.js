import FormData from "form-data";
import Mailgun from "mailgun.js";

const Sendmail = async (emails, token, teamName) => {
  const mailgun = new Mailgun(FormData);
  const mg = mailgun.client({
    username: "api",
    key: process.env.MAILGUN_API_KEY || "key-yourkeyhere",
  });

  console.log(emails);

  emails.map(async (email, index) => {
    const templateSlug = {
      link: `http://localhost:3000/verify?token=${token[index]}`,
      teamname: teamName,
    };
    const data = {
      from: "OWASP PCCOE Student Chapter <owasppccoe@gmail.com>",
      to: email,
      subject: "Verify your email address for event registration!",
      template: "owasp_registration_template",
      "h:X-Mailgun-Variables": JSON.stringify({
        link: templateSlug.link,
        teamname: templateSlug.teamname,
      }),
    };

    try {
      const response = await mg.messages.create("intruder.tech", data);
      console.log(response);
      return;
    } catch (error) {
      console.log(error);
      return;
    }
  });
};

export default Sendmail;
