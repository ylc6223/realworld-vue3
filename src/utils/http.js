import axios from "axios";

const baseUrl = process.env.VUE_APP_BASE_API;

class HttpRequest {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
  }
  getInsideConfig() {
    return {
      baseUrl: this.baseUrl,
      Headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    };
  }
  instencepotors(instance) {
    // 添加请求拦截器
    instance.interceptors.request.use(
      function (config) {
        // 在发送请求之前做些什么
        return config;
      },
      function (error) {
        // 对请求错误做些什么
        console.log("--请求的拦截--", error);
        return Promise.reject(error);
      }
    );

    // 添加响应拦截器
    instance.interceptors.response.use(
      function (response) {
        // 对响应数据做点什么
        return response;
      },
      function (error) {
        // 对响应错误做点什么
        console.log("--响应的拦截--", error);
        return Promise.reject(error);
      }
    );
  }
  // 看着像闭包
  request(options) {
    const instance = axios.create();
    options = { ...this.getInsideConfig(), ...options };
    this.instencepotors(instance); // 调用拦截器
    return instance(options);
  }
}

export default new HttpRequest(baseUrl);
