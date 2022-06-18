function avg(data) {
    let price_sum = 0;
    for ( let i = 0; i < data.size; i++) {
        let product = data.products[i];
        price_sum += product.price;
    }
    return price_sum/data.size
    }
    
console.log(
        avg({
          size: 3,
          products: [
            {
              name: 'Product 1',
              price: 100,
       },
       {
        name: 'Product 2',
        price: 700,
 }, {
        name: 'Product 3',
        price: 250,
      },
 ], })
 ); // should print the average price of all products