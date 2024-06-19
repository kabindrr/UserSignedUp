import axios from "axios";

const apiProcessor = async (axiosObj) => {
  try {
    const { url, method, data } = axiosObj;

    const res = await axios({
      url,
      method,
      data,
    });
    return res.data;
  } catch (error) {
    console.log(error);
    return error;
  }
};
export default apiProcessor;
