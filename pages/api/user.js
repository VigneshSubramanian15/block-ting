import dbConnect from "../../helper/dbConnect";
import userStatics from "../../helper/schema/userStatics";
import UAParser from "../../helper/ua";

export default function user(req, res) {
  // if (req.method === "POST") {`
  const uaData = UAParser(req.headers["user-agent"]);
  const ip = req.headers["x-forwarded-for"] || req.connection.remoteAddress;
  try {
    return dbConnect().then(() => {
      userStatics
        .create({
          ip,
          uaData,
        })
        .then(() => res.status(201).send("ok"));
    });
  } catch (error) {
    const { response: fetchResponse } = error;
    res.status(fetchResponse?.status || 500).json(error.data);
  }
  // }
}
