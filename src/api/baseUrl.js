"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getBaseUrl() {
    return getQueryStringParameterByName('useMockApi') ? 'http://localhost:3001/' : 'https://safe-hollows-91580.herokuapp.com/';
}
exports.default = getBaseUrl;
function getQueryStringParameterByName(name, url) {
    if (!url)
        url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"), results = regex.exec(url);
    if (!results)
        return null;
    if (!results[2])
        return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}
//# sourceMappingURL=baseUrl.js.map