import axios from "axios";

axios.interceptors.request.use(
  (config) => {
    document.body.classList.add("loading-indicator");
    let token = localStorage.getItem("$TOKEN__SAIP$");
    if (config.url.includes("token"))
      config.headers["Content-Type"] =
        "application/x-www-form-urlencoded;charset=UTF-8";
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    handelStatus(error);
  }
);

axios.interceptors.response.use(
  (response) => {
    document.body.classList.remove("loading-indicator");
    return response;
  },
  (error) => {
    handelStatus(error);
    if (error.code == "ERR_NETWORK") {
    
    }
    document.body.classList.remove("loading-indicator");
    if (error.status == 401) {
    }
    return Promise.reject(error);
  }
);
const handelStatus = (error) => {
  switch (error.response.status) {
    case 400:
      return {
        data: null,
        hasError: true,
        error: [error.response.data],
        status: error.response.status,
        code: error.response.code,
      };
    case 401:
      logOut();
      break;
    case 500:
      break;
  }
};

