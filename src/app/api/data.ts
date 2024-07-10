import { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const response = await axios.get(
      "https://s3.us-west-2.amazonaws.com/cdn.number8.com/LA/listings.json"
    );
    const data = response.data;

    res.status(200).json(data);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Erro on get data" });
  }
}
