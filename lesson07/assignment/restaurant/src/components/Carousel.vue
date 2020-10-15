<template>
 <!-- Carousel component with 3 images, tooltips on the images -->

  <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
    <div class="carousel-inner">
      <CarouselItem v-for="item in items" 
      v-bind:key="item.id"
      v-bind:imageSrc="item.src"
      v-bind:title="item.title"
      v-bind:alt="item.alt" />

    </div>
    <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </a>
  </div>
</template>

<script>
import CarouselItem from '@/components/CarouselItem.vue'

export default {
  name: 'Carousel',
  components: {
    CarouselItem
  },
  props: {},
  data() {
    return { items:
      [
        { id: 1, src:"bar-984527_960_720.jpg", alt:"Bar", title:"Our Bar" },
        { id: 2, src:"wine-bottles-3623697_960_720.jpg", alt:"Wine Rack", title:"Our Wine Room" },
        { id: 3, src:"coffee-918926_960_720.jpg", alt:"Pour Over Coffee", title:"Our Coffee Shop" }
      ]
    }
  }
}
</script>