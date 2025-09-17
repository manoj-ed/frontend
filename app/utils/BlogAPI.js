import SummaryApi from "../common/SummaryApi";
import AxiosPublic from "./AxiosPublic";

// Fetch Blog on Every Page
export async function getBlog() {
  try {
    const response = await AxiosPublic({
      ...SummaryApi.getBlog,
    });

    console.log("blog response ", response);

    if (!response || !response.data) {
      throw new Error("No data received from the server");
    }
    return response.data;
  } catch (error) {
    console.log("Error Fetching Blog", error.message);
    return null;
  }
}

