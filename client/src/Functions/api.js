import axios from "axios";
import { BaseUrl } from "../Functions/BaseUrl";

// eslint-disable-next-line import/no-anonymous-default-export
export default async (url, method, params) => {
  try {
    return await axios({
      method,
      url: BaseUrl + url,
      params,
    });
  } catch (error) {
    console.error(error);
  }
};
