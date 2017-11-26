"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("./index.css");
var userApi_1 = require("./api/userApi");
userApi_1.getUsers().then(function (result) {
    var usersBody = "";
    result.forEach(function (user) {
        usersBody += "<tr>\n      <td><a href=\"#\" data-id=\"" + user.id + "\" class=\"deleteUser\">Delete</a></td>\n      <td>" + user.id + "</td>\n      <td>" + user.firstName + "</td>\n      <td>" + user.lastName + "</td>\n      <td>" + user.email + "</td>\n      </tr>";
    });
    document.getElementById('users').innerHTML = usersBody;
    var deleteLinks = document.getElementsByClassName('deleteUser');
});
//# sourceMappingURL=index.js.map