function fetchData(url) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    // <-- start
    // TODO 22: 通过Promise实现异步请求
    xhr.open('Get', url, false);
    xhr.onreadystatechange = function respon() {
      if (xhr.readyState !== 4) {
        return;
      }
      if (xhr.status === 200) {
        resolve(xhr.responseText);
      } else {
        reject(xhr.statusText);
      }
    };
    xhr.send();
    // end -->
  });
}

const URL = 'http://localhost:3000/api';
fetch(URL)
  .then(data => {
    console.log(data);
  })
  .catch(errorText => {
    console.log(errorText);
  });
