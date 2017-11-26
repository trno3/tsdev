"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("whatwg-fetch");
var baseUrl_1 = require("./baseUrl");
var baseUrl = baseUrl_1.default();
function getUsers() {
    return get('users');
}
exports.getUsers = getUsers;
function deleteUser(id) {
    return del("users/" + id);
}
exports.deleteUser = deleteUser;
function get(url) {
    return fetch(baseUrl + url).then(onSuccess, onError);
}
function del(url) {
    var request = new Request(baseUrl + url, {
        method: 'DELETE'
    });
    return fetch(request).then(onSuccess, onError);
}
function onSuccess(response) {
    return response.json();
}
function onError(error) {
    console.log(error);
}
//# sourceMappingURL=userApi.js.map