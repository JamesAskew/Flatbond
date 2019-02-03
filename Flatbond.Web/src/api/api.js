import axios from "axios";

const getConfig = async () => {
  return axios.get("/api/config/1");
};

const postFlatbond = async flatbondDto => {
  return axios.post("api/flatbond", flatbondDto);
};

export { getConfig, postFlatbond };
