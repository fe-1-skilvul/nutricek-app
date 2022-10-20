import { getFoodDetailByID, getFoodInformation } from './service.js';

function getAnchor() {
  var currentUrl = document.URL,
    urlParts = currentUrl.split('?');
  let id = urlParts[1];
  // return (urlParts.length > 1) ? urlParts[1] : null;
  if (urlParts.length === 1) {
    return console.log('error 404');
  }
  getFoodDetailByID(id);
  getFoodInformation(id);
}

const writeDetailToHtml = () => {};
getAnchor();
