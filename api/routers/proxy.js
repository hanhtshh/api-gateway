const CATEGORY_PROXY_URLS = {
    'GET/': "user",
    'GET/detail/:_id': "admin",
    'POST/': "user",
    'PUT/:_id': "admin",
    'DELETE/:_id': "user"
};

module.exports = CATEGORY_PROXY_URLS;