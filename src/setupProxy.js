// 크롤링에 필요한 proxy 파일

const {createProxyMiddleware} = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    createProxyMiddleware("/api", {
      target: "https://news.daum.net",
      changeOrigin: true,
    })
  );
};
