import apiProcessor from "./axiosHelper";

const url = "http://localhost:8005";

export const signUpUser = (obj) => {
  const axiosObj = {
    url,
    method: "post",
    data: obj,
  };
  return apiProcessor(axiosObj);
};
