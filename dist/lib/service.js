"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _axios = require('axios'); var _axios2 = _interopRequireDefault(_axios);
const ENDPOINT = "https://jsonplaceholder.typicode.com";
async function getData(Number) {
    const { data: users } = await _axios2.default.get(`${ENDPOINT}/users/${Number}`);
    console.log(users);
    const { data: posts } = await _axios2.default.get(`${ENDPOINT}/posts?userId=${Number}`);
    console.log(posts);
    return `${users}${posts}`

}
module.exports={
    getData
};
//getData(1);