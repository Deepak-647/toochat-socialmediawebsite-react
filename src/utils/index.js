// import { API_URLS,API_ROOT,LOCALSTORAGE_TOKEN_KEY  } from "./constants";

// export{
//   API_ROOT,
//   API_URLS,
//   LOCALSTORAGE_TOKEN_KEY
// }

//doing all the stuffs in a single line like this

export * from './constants';

export const getFormBody = (params) => {
    let formBody = [];
  
    for (let property in params) {
      let encodedKey = encodeURIComponent(property); // 'user name' => 'user%20name'
      let encodedValue = encodeURIComponent(params[property]); // aakash 123 => aakash%2020123
  
      formBody.push(encodedKey + '=' + encodedValue);
    }
  
    return formBody.join('&'); // 'username=aakash&password=123213'
  };