const axios = (url) => {
    return new Promise(function(resolve, reject) {
        // resolve:代表成功时调用的函数,(当任务成功时去调用resolve,来执行then方法)
        // resolve();
        // setTimeout(() => {
        //     resolve('hello world');
        // }, 3000);
        // reject:代表失败时调用的函数(当任务失败时去调用reject,来执行catch方法)
        // reject()

        let xhr = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');
        xhr.open('GET', url);
        xhr.send();
        xhr.onreadystatechange = function() {
            if (xhr.readyState == 4) {
                if (xhr.status >= 200 && xhr.status <= 207) {
                    // 成功
                    let data = JSON.parse(xhr.responseText);
                    resolve(data);
                } else {
                    // 失败
                    reject('失败');
                }
            }
        }
    });
}