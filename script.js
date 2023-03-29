 
    fetch('https://fakestoreapi.com/products')
        .then(response => response.json())
        .then(data => {
            data.forEach(product => {
                const option = document.createElement('option');
                option.value = product.id;
                option.text = product.title;
                document.getElementById('product-select').appendChild(option);
            });
        })
        .catch(err => console.log(err))

        const productSelect = document.getElementById('product-select');
        let nameResult = document.getElementById('name');
        let priceResult = document.getElementById('price');

        productSelect.addEventListener('change', function() {
            const selectedProductId = productSelect.value;
            if (selectedProductId != -1) {
                fetch(`https://fakestoreapi.com/products/${selectedProductId}`)
                    .then(response => response.json())
                    .then(product => {

                        nameResult.innerHTML = `Product Name: ${product.title}`
                        priceResult.innerHTML = `Price: ${parseFloat(product.price)}`
                       
                        
                    })
                    .catch(err => console.log(err))
            }
        });