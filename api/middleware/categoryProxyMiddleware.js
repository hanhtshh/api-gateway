const { default: axios } = require("axios");

const categoryProxyMiddleware = async (request, response, next) => {
    const result = await axios.request({
        url: `${process.env.ORDER_SERVICE_URL}${request.originalUrl}`,
        method: request.method,
        data: request.body,
        headers: {
            Authorization: request.headers.authorization,
            "x-api-key": process.env.INTERNAL_API_KEY
        }
    })
    return response.status(200).json(result.data);
};

module.exports = categoryProxyMiddleware