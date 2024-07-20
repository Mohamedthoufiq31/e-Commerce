document.addEventListener('DOMContentLoaded', () => {
    fetch('/api/products')
        .then(response => response.json())
        .then(products => {
            const productList = document.getElementById('product-list');
            products.forEach(product => {
                const productItem = document.createElement('div');
                productItem.className = 'product-item';
                productItem.innerHTML = `
                    <h3>${product.name}</h3>
                    <p>${product.description}</p>
                    <p>Price: $${product.price}</p>
                `;
                productList.appendChild(productItem);
            });
        });

    // For simplicity, here's an example of adding a new product via JS (not a real use case)
    // Remove or modify as needed
    fetch('/api/products', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: 'Sample Product',
            price: 10.99,
            description: 'This is a sample product'
        })
    }).then(response => response.json())
      .then(product => {
          console.log('Product added:', product);
      });
});
