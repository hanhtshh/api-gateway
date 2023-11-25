const { createProxyMiddleware, fixRequestBody } = require("http-proxy-middleware");

const orderProxyMiddleware = createProxyMiddleware({
    changeOrigin: true,
    target: process.env.ORDER_SERVICE_URL,
    headers: {
        'x-api-key': process.env.INTERNAL_API_KEY,
    },
    pathRewrite: function (path) {
        return path.replace('/oder', '');
    },
    onProxyReq: fixRequestBody,
});

module.exports = orderProxyMiddleware