<template>

  <!-- Images section component, uses a v-for loop on the image to create the multiple images section-->
  <section>
    <!-- Two fluid images with rounded corners and some y axis margin-->
    <img class="img-fluid rounded my-3 mx-auto d-block" v-for="image in images" 
      v-bind:key="image.id"
      v-bind:src= "require('../assets/' + image.imageSrc)" />
  </section>
</template>

<script>
export default {
  name: 'ImageSection',
  props: {},
  data() {
    return { images:
      [
      { id: 1, imageSrc:"chef-1209161_960_720.jpg" },
      { id: 2, imageSrc:"chef-4807317_960_720.jpg" }
      ]
    }
  }
}
</script>