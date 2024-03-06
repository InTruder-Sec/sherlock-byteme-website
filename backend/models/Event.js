import mongoose from "mongoose";

const eventSchema = new mongoose.Schema({
  verificationToken: {
    type: String,
    required: true,
  },
  eventName: {
    type: String,
    required: true,
  },
  registrationDetails: {
    teamname: {
      type: String,
      required: true,
      unique: true,
    },
    teamleader: {
      type: String,
      required: true,
    },
    teamleaderPhone: {
      type: String,
      required: true,
    },
    member2: {
      type: String,
      required: true,
    },
    member3: {
      type: String,
      required: false,
    },
    emails: [
      {
        email: {
          type: String,
          required: true,
        },
        isVerifed: {
          type: Boolean,
          default: false,
        },
        token: {
          type: String,
          required: true,
        },
      },
    ],
  },
  isVerifed: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model("Event", eventSchema);
