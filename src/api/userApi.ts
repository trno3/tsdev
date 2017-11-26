import 'whatwg-fetch';
import getBaseUrl from './baseUrl';

const baseUrl = getBaseUrl();

export function getUsers() {
   return get('users');
}

export function deleteUser(id: string) {
   return del(`users/${id}`);
}

function get(url: string) {
   return fetch(baseUrl + url).then(onSuccess, onError);
}

function del(url: string) {
   const request = new Request(baseUrl + url, {
      method: 'DELETE'
   });

   return fetch(request).then(onSuccess, onError);
}

function onSuccess(response: any) {
   return response.json();
}

function onError(error: string) {
   console.log(error); // eslint-disable-line no-console
}
