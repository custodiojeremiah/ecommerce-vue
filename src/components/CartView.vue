<template>
  <div>
    <h1>Cart</h1>
    <div v-for="item in cart" :key="item.id" class="cart-item">
      <h2>{{ item.name }}</h2>
      <p>Quantity: {{ item.quantity }}</p>
      <p>Price: ${{ item.price.toFixed(2) }}</p>
      <p>Total: ${{ (item.price * item.quantity).toFixed(2) }}</p>
    </div>
    <button @click="proceedToCheckout">Proceed to Checkout</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cart: []
    };
  },
  created() {
    this.cart = JSON.parse(localStorage.getItem('cart')) || [];
  },
  methods: {
    proceedToCheckout() {
      // Implement checkout process
      alert("Proceeding to checkout");
    }
  }
};
</script>

<style>
.cart-item {
  border: 1px solid #ccc;
  padding: 10px;
  margin: 10px;
}
</style>
