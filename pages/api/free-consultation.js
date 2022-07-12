import dbConnect from "../../helper/dbConnect";
import consultationSchema from "../../helper/schema/consultation.schema";

export default function handler(req, res) {
  try {
    console.log("om");
    const { email } = req.body;
    if (req.method === "POST") {
      return dbConnect().then(() => {
        consultationSchema.findOne({ email }).then((dbEmail) => {
          if (dbEmail === null) {
            consultationSchema
              .create({ email })
              .then(() => res.status(201).send("ok"));
          }
          res.status(401).send("We will contact you shortly");
        });
      });
    }
  } catch (error) {
    console.log({ error });
  }
}
