<template>
 <!-- Bootstrap-Vue Carousel component with 3 images-->
  <div>
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="4000"
      controls
      indicators
      background="#ababab"
      img-width="1024"
      img-height="480"
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >

      <b-carousel-slide img-src="../assets/bar-984527_960_720.jpg"></b-carousel-slide>
      <b-carousel-slide img-src="../assets/wine-bottles-3623697_960_720.jpg"></b-carousel-slide>
      <b-carousel-slide img-src="../assets/coffee-918926_960_720.jpg"></b-carousel-slide>     
    </b-carousel>

  </div>
</template>

<script>

export default {
  name: 'Carousel',
  components: {
  },
  props: {},
  data() {
    return { 
        slide: 0,
        sliding: null,
        items:
      [
        { id: 1, src:"../assets/bar-984527_960_720.jpg", alt:"Bar", title:"Our Bar" },
        { id: 2, src:"../assets/wine-bottles-3623697_960_720.jpg", alt:"Wine Rack", title:"Our Wine Room" },
        { id: 3, src:"../assets/coffee-918926_960_720.jpg", alt:"Pour Over Coffee", title:"Our Coffee Shop" }
      ]
    };
  },
    methods: {
    }
};
</script>