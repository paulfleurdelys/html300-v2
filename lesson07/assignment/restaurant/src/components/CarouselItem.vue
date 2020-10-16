<template>
  <div class="carousel-item">
    <img class="d-block w-100" v-bind:src= "require('../assets/' + imageSrc)" v-bind:alt="alt"  data-toggle="tooltip" data-placement="top" v-bind:title="title">
  </div>
</template>

<script>
export default {
  name: 'CarouselItem',
  props: { 
    imageSrc: String, 
    alt: String, 
    title: String 
    }
}
</script>