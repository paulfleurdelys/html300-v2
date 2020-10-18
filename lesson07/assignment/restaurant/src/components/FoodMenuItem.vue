<template>
 <!-- Uses require and string + var concatenation to render the url correctly in the v-bind statement -->
  <div class="card m-2" style="width: 18rem;">
    <img v-bind:src= "require('../assets/' + imageSrc)" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">{{ dishName }}</h5>
      <p class="card-text">{{ text }}</p>
      <a href="#" class="btn btn-dark">Order</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FoodMenuItem',
  props: { 
    dishName: String, 
    text: String, 
    imageSrc: String
  }
}
</script>