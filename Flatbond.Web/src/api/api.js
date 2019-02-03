import axios from "axios";

const getConfig = async () => {
  return axios.get("https://flatbondapi.azurewebsites.net/api/config/1");
};

const postFlatbond = async flatbondDto => {
  return axios.post(
    "https://flatbondapi.azurewebsites.net/api/flatbond",
    flatbondDto
  );
};

export { getConfig, postFlatbond };
