
const { ORDER_PROXY_URLS } = require("../routers/proxy");
const { authUser, authenAdmin } = require("./authenticateMiddleware");

const authOrderMiddleware = async (request, response, next) => {
    const ORDERUrl = request.originalUrl.replace(`/oder`, '');
    const forwardable = Object.keys(ORDER_PROXY_URLS).find((url) => url.includes(request.method + ORDERUrl));
    if (!forwardable) {
        return response.status(400).json('bad request');;
    }
    if (ORDER_PROXY_URLS[forwardable] === "user") {
        return authUser(request, response, next);
    }

    if (ORDER_PROXY_URLS[forwardable] === "admin") {
        return authenAdmin(request, response, next);
    }

    return response.status(404).json('not found');

};

module.exports = authOrderMiddleware;