document.addEventListener('DOMContentLoaded', () => {
    const usersContainer = document.getElementById('users-container');
    const productsContainer = document.getElementById('products-container');
    const errorEl = document.getElementById('error');
  
    // Fetch users and products
    fetch('http://backend:3000/api/data')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        // Render Users
        const usersHTML = data.users.map(user => `
          <div class="user">
            <h3>${user.name}</h3>
            <p>Email: ${user.email}</p>
          </div>
        `).join('');
        usersContainer.innerHTML = usersHTML;
  
        // Render Products
        const productsHTML = data.products.map(product => `
          <div class="product">
            <h3>${product.name}</h3>
            <p>Price: $${product.price}</p>
          </div>
        `).join('');
        productsContainer.innerHTML = productsHTML;
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        errorEl.textContent = `Error: ${error.message}`;
      });
  });