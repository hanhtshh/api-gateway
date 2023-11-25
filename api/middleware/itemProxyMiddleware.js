const { createProxyMiddleware, fixRequestBody } = require("http-proxy-middleware");

const itemProxyMiddleware = createProxyMiddleware({
    changeOrigin: true,
    target: process.env.ITEM_SERVICE_URL,
    headers: {
        'x-api-key': process.env.INTERNAL_API_KEY,
    },
    pathRewrite: function (path) {
        return path.replace('/item', '');
    },
    onProxyReq: fixRequestBody,
});

module.exports = itemProxyMiddleware