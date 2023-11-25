const { createProxyMiddleware, fixRequestBody } =require("http-proxy-middleware");

const categoryProxyMiddleware = createProxyMiddleware({
    changeOrigin: true,
    target: process.env.CATEGORY_SERVICE_URL,
    headers: {
        'x-api-key': process.env.INTERNAL_API_KEY,
    },
    pathRewrite: function (path) {
        return path.replace('/category', '');
    },
    onProxyReq: fixRequestBody,
});

module.exports = categoryProxyMiddleware