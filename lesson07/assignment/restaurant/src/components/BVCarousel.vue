<template>
 <!-- Carousel component with 3 images, tooltips on the images -->
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
      <!-- Text slides with image -->
      <b-carousel-slide
        caption="First slide"
        text="Nulla vitae elit libero, a pharetra augue mollis interdum."
        img-src="../assets/bar-984527_960_720.jpg"
      ></b-carousel-slide>

        <!-- Slides with custom text -->
      <b-carousel-slide img-src="../assets/wine-bottles-3623697_960_720.jpg">
        <h1>Hello world!</h1>
      </b-carousel-slide>

      <!-- Slides with image only -->
      <b-carousel-slide img-src="../assets/coffee-918926_960_720.jpg"></b-carousel-slide>     

    </b-carousel>

    <p class="mt-4">
      Slide #: {{ slide }}<br>
      Sliding: {{ sliding }}
    </p>
  </div>
</template>

<script>

export default {
  name: 'BVCarousel',
  components: {
  },
  props: {},
  data() {
    return { 
        slide: 0,
        sliding: null,
        items:
      [
        { id: 1, src:"bar-984527_960_720.jpg", alt:"Bar", title:"Our Bar" },
        { id: 2, src:"wine-bottles-3623697_960_720.jpg", alt:"Wine Rack", title:"Our Wine Room" },
        { id: 3, src:"coffee-918926_960_720.jpg", alt:"Pour Over Coffee", title:"Our Coffee Shop" }
      ]
    };
  }, methods: {
    }
};
</script>