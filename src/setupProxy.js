const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/home",
    createProxyMiddleware({
      target: process.env.REACT_APP_TEST_URL,
      changeOrigin: true,
    })
  );
};