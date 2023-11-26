const CATEGORY_PROXY_URLS = {
    'GET/': "user",
    'GET/detail/:_id': "admin",
    'POST/': "admin",
    'PUT/:_id': "admin",
    'DELETE/:_id': "user"
};

const ITEM_PROXY_URLS = {
    'GET/': "user",
    'POST/': "user",
    'POST/get-by-id/:id': "admin",
    'PUT/:_id': "admin",
    'DELETE/:_id': "admin"
};

const CUSTOMER_PROXY_URLS = {
    'POST/login': "user",
    'GET/logout': "user",
    'GET/': "admin",
    'POST/register': "user",
    'PATCH/handleInformation': "user",
    'PATCH/handlePassword': "user",
    'DELETE/:_id': "admin"
};

const ORDER_PROXY_URLS = {
    'GET/all': "admin",
    'GET/': "user",
    'GET/get-by-id/:_id': 'user',
    'POST/': 'user',
    'PUT/:_id': 'user',
    'DELETE/:_id': 'user',
    'DELETE/admindeleteFailed/:_id': 'admin',
    'DELETE/admindelete/:_id': 'admin'
}


module.exports = {
    CATEGORY_PROXY_URLS,
    ITEM_PROXY_URLS,
    CUSTOMER_PROXY_URLS,
    ORDER_PROXY_URLS
};