import axios from "axios";

export const api = axios.create({
    baseURL: "http://localhost:8080",

});

api.interceptors.request.use(config => { // 지나가는 애들마다 붙잡고 토큰 부여하기
   const accessToken = localStorage.getItem("AccessToken");
   config.headers.Authorization = `Bearer ${accessToken}`; 
    return config;
})