
// TODO: must be into .env

import Login from "src/models/login";
let login = new Login();
let apiServer = 'http://local.global-std.com.mx/';
let apiCustomer = "api/customer/v1/";
let apiAdmin = "api/admin/v1/";
const SERVER_PATH = login.hasLogin() ? apiServer+apiAdmin: apiServer+apiCustomer;

export default SERVER_PATH
