const content = document.querySelector('.content-box');

fetch('https://dummyjson.com/products')
    .then(res => res.json())
    .then(item => item.products.forEach(e => {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        content.append(productCard);

        const productImg = document.createElement('img');
        productImg.classList.add('product-img');
        productImg.src = e.images[0];
        productCard.append(productImg);

        const productName = document.createElement('h1');
        productName.classList.add('product-name');
        productName.textContent = e.title;
        productCard.append(productName);

        const productDescription = document.createElement('p');
        productDescription.classList.add('product-description');
        productDescription.textContent = e.description;
        productCard.append(productDescription);


        productCard.append(document.createElement('HR'));
        productCard.append(document.createElement('BR'));
    }));