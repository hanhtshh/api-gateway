
const { ITEM_PROXY_URLS } = require("../routers/proxy");
const { authUser, authenAdmin } = require("./authenticateMiddleware");

const authItemiddleware = async (request, response, next) => {
    const ITEMUrl = request.originalUrl.replace(`/item`, '');
    const forwardable = Object.keys(ITEM_PROXY_URLS).find((url) => url.includes(request.method + ITEMUrl));
    if (!forwardable) {
        return response.status(400).json('bad request');;
    }
    if (ITEM_PROXY_URLS[forwardable] === "user") {
        return authUser(request, response, next);
    }

    if (ITEM_PROXY_URLS[forwardable] === "admin") {
        return authenAdmin(request, response, next);
    }
    if (ITEM_PROXY_URLS[forwardable] === "") {
        return next();
    }

    return response.status(404).json('not found');

};

module.exports = authItemiddleware;