<template>
 <!-- Bootstrap-Vue Carousel component with 3 images-->
  <div>
    <b-carousel
      id="carousel-1"
      :interval="4000"
      controls
      indicators
      background="#ababab"
      img-width="1024"
      img-height="480"
      style="text-shadow: 1px 1px 2px #333;"
    >
      <b-carousel-slide v-for="item in items"
      :key="item.id"
      :img-src="getImgUrl(item.src)" ></b-carousel-slide>
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
        sliding: null,
        items:
      [
        { id: 1, src:"bar-984527_960_720.jpg", alt:"Bar", title:"Our Bar" },
        { id: 2, src:"wine-bottles-3623697_960_720.jpg", alt:"Wine Rack", title:"Our Wine Room" },
        { id: 3, src:"coffee-918926_960_720.jpg", alt:"Pour Over Coffee", title:"Our Coffee Shop" }
      ]
    };
  },
    methods: {
      getImgUrl(url) {
        return require('../assets/' + url);
      }
    }
};
</script>