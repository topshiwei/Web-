
let ajax = (options) => {
    let url = options.url;
    let type = options.type;
    let data = options.data;
    let p1 = new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest();
        xhr.open(url, true);
        xhr.send();
        xhr.onreadystatechange = () => {
            if (xhr.readyState === 4) {
                if (xhr.status >= 200 && xhr.status <= 207) {
                    resolve(xhr.responseText);
                } else {
                    reject();
                }
            }
        }
    });
    return p1;
}

ajax({
    url: 'xxxx',
    type: 'GET',
    data: {

    }
})
.then(() => {

})
.catch(() => {

})