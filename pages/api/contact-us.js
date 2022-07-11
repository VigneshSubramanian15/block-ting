import dbConnect from "../../helper/dbConnect";
import contactSchema from "../../helper/schema/contact.schema";
const fs = require("fs");
export default function handler(req, res) {
  const {
    name,
    organizationName,
    email,
    country,
    contactNumber,
    serviceRequired,
  } = req.body;

  if (req.method === "POST") {
    return dbConnect().then(() => {
      console.log("Connected to MongoDB");
      contactSchema
        .create({
          name,
          organizationName,
          email,
          country,
          contactNumber,
          serviceRequired,
        })
        .then(() => res.status(201).send("ok"));
    });
  }
}
