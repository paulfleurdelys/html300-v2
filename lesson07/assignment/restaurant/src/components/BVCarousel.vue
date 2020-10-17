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
        img-src="../assets/bar-984527_960_720.jpg'"
      ></b-carousel-slide>

      <!-- Slides with custom text -->
      <b-carousel-slide img-src="require('../assets/' + items[0].src)">
        <h1>Hello world!</h1>
      </b-carousel-slide>

      <!-- Slides with image only -->
      <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=58"></b-carousel-slide>

      <!-- Slides with img slot -->
      <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
      <b-carousel-slide>
        <template v-slot:img>
          <img
            class="d-block img-fluid w-100"
            width="1024"
            height="480"
            src="https://picsum.photos/1024/480/?image=55"
            alt="image slot"
          >
        </template>
      </b-carousel-slide>

      <!-- Slide with blank fluid image to maintain slide aspect ratio -->
      <b-carousel-slide caption="Blank Image" img-blank img-alt="Blank image">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eros felis, tincidunt
          a tincidunt eget, convallis vel est. Ut pellentesque ut lacus vel interdum.
        </p>
      </b-carousel-slide>
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