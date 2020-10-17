<template>
<section>
          <!-- Two fluid images with rounded corners and some y axis margin-->
          <img v-for="image in images" 
          v-bind:key="image.id"
          v-bind:src= "require('../assets/' + image.imageSrc)" />
          <img src="../assets/chef-1209161_960_720.jpg" class="img-fluid rounded my-3 mx-auto d-block" alt="Sushi chef">
          <img src="../assets/chef-4807317_960_720.jpg" class="img-fluid rounded mx-auto d-block" alt="Japanese chef">
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