const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = (app) => {
  app.use(
    createProxyMiddleware("/connect", {
      target:
        "https://api.pexels.com/v1/search?query=${getKeyword()}&per_page=1",
      changeOrigin: true,
    })
  );
};
