<template>
    <div>
      <h1>Products</h1>
      <div v-for="product in products" :key="product.id" class="product">
        <h2>{{ product.name }}</h2>
        <p>{{ product.description }}</p>
        <p>${{ product.price.toFixed(2) }}</p>
        <button @click="addToCart(product)">Add to Cart</button>
      </div>
      <router-link to="/cart"><button>Checkout</button></router-link>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        products: []
      };
    },
    created() {
      fetch('http://localhost:8000/api/products')
        .then(response => response.json())
        .then(data => {
          this.products = data;
        });
    },
    methods: {
      addToCart(product) {
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        let item = cart.find(item => item.id === product.id);
  
        if (item) {
          item.quantity++;
        } else {
          cart.push({ ...product, quantity: 1 });
        }
  
        localStorage.setItem('cart', JSON.stringify(cart));
      }
    }
  };
  </script>
  
  <style>
  .product {
    border: 1px solid #ccc;
    padding: 10px;
    margin: 10px;
  }
  </style>
  