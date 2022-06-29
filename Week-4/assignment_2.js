const src = 'https://appworks-school.github.io/Remote-Aassigiment-Data/products'

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
    // your code here
    // document.createElement() and appendChild() methods are preferred.
    for (i = 0; i < data.length; i++) {
        const para = document.createElement("p");
        para.innerText = data[i].name + data[i].price + data[i].description;
        document.body.appendChild(para);
    }
}

ajax(src,
    (response) => {
        render(response);
    }
);

// you should get product information in JSON format and render data in the page