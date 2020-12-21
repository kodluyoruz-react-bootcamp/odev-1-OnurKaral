"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _service = require('./lib/service');
var _axios = require('axios'); var _axios2 = _interopRequireDefault(_axios);
const ENDPOINT = "https://jsonplaceholder.typicode.com";
console.log(_service.getData.call(void 0, 1));