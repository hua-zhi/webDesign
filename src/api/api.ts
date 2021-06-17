import axios from "@/axios";

// export const getLabList
export const getLabList = () => {
  return axios.get("/admin/lablist");
};
