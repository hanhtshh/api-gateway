
const { CUSTOMER_PROXY_URLS } = require("../routers/proxy");
const { authUser, authenAdmin } = require("./authenticateMiddleware");

const authCustomerMiddleware = async (request, response, next) => {
    const CUSTOMERUrl = request.originalUrl.replace(`/customer`, '');
    const forwardable = Object.keys(CUSTOMER_PROXY_URLS).find((url) => url.includes(request.method + CUSTOMERUrl));
    if (!forwardable) {
        return response.status(400).json('bad request');;
    }
    if (CUSTOMER_PROXY_URLS[forwardable] === "user") {
        return authUser(request, response, next);
    }

    if (CUSTOMER_PROXY_URLS[forwardable] === "admin") {
        return authenAdmin(request, response, next);
    }

    return response.status(404).json('not found');

};

module.exports = authCustomerMiddleware;