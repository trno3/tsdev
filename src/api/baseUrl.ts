export default function getBaseUrl() {
   return getQueryStringParameterByName('useMockApi') ? 'http://localhost:3001/' : 'https://safe-hollows-91580.herokuapp.com/';
}

function getQueryStringParameterByName(name: string, url?: string) {
   if (!url) url = window.location.href;
   name = name.replace(/[\[\]]/g, "\\$&");
   var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
      results = regex.exec(url);
   if (!results) return null;
   if (!results[2]) return '';
   return decodeURIComponent(results[2].replace(/\+/g, " "));
}