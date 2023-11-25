const CATEGORY_PROXY_URLS = require("../routers/proxy");
const { authUser, authenAdmin } = require("./authenticateMiddleware");

const authCategoryMiddleware = async (request, response, next) => {
    const categorylUrl = request.originalUrl.replace(`/category`, '');
    const forwardable = Object.keys(CATEGORY_PROXY_URLS).find((url) => url.includes(request.method + categorylUrl));
    if (!forwardable) {
        return response.status(400).json('bad request');;
    }
    if (CATEGORY_PROXY_URLS[forwardable] === "user") {
        return authUser(request, response, next);
    }

    if (CATEGORY_PROXY_URLS[forwardable] === "admin") {
        return authenAdmin(request, response, next);
    }

    return response.status(404).json('not found');

};

module.exports = authCategoryMiddleware;