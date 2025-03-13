import axios from "axios";

const backEndTavolaItaliana = axios.create({
  baseURL:
    process.env.REACT_APP_API_URL ||
    `http://${process.env.REACT_APP_API_HOST}:${process.env.REACT_APP_API_PORT}`,
});

backEndTavolaItaliana.interceptors.request.use(async (config) => {
  const userData = await localStorage.getItem("tavolaItaliana:UserData");
  const token = userData && JSON.parse(userData).token;
  config.headers.authorization = `Bearer ${token}`;
  return config;
});

export default backEndTavolaItaliana;
