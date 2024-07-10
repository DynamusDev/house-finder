import axios from "axios";
const BASE_URL = "https://s3.us-west-2.amazonaws.com/cdn.number8.com";

export async function getRequest(url: string): Promise<any> {
  return await axios.get(`${BASE_URL}/${url}`);
}
