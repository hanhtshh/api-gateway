const { createProxyMiddleware, fixRequestBody } = require("http-proxy-middleware");

const customerProxyMiddleware = createProxyMiddleware({
    changeOrigin: true,
    target: process.env.CUSTOMER_SERVICE_URL,
    headers: {
        'x-api-key': process.env.INTERNAL_API_KEY,
    },
    pathRewrite: function (path) {
        return path.replace('/customer', '');
    },
    onProxyReq: fixRequestBody,
});

module.exports = customerProxyMiddleware