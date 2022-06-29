function ajax(src, callback) {
    const xhr = new XMLHttpRequest();
    xhr.open("Get", src);
    xhr.onload = () => {
        if (xhr.status === 200) {
            let data = JSON.parse(xhr.responseText);
            return callback(data);
        }
    };
    xhr.send();
}

function render(data) {
    for (item of data) {
        const para = document.createElement("p");
        para.innerText = item.name + ": " + "價格 " + item.price + " ; 特點: " + item.description;
        document.body.appendChild(para);
    }
}

ajax('https://appworks-school.github.io/Remote-Aassigiment-Data/products',
    (response) => {
        render(response);
    }
);

// you should get product information in JSON format and render data in the page