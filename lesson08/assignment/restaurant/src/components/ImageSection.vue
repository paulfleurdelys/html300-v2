<template>

  <!-- Images section component, uses a v-for loop on the MainImage to create the multiple images section-->
  <section>
    <!-- Two fluid images with rounded corners and some y axis margin-->
    <MainImage 
      v-for="image in images" 
      v-bind:key="image.id"
      v-bind:alt="image.alt"
      v-bind:title="image.title"
      v-bind:imageSrc="image.imageSrc" />
  </section>
</template>

<script>
import MainImage from '@/components/MainImage.vue'

export default {
  name: 'ImageSection',
  components: {
    MainImage
  },
  props: {},
  data() {
    return { images:
      [
      { id: 1, imageSrc:"chef-1209161_960_720.jpg", alt: "Sushi Chef", title:"Rolling sushi" },
      { id: 2, imageSrc:"chef-4807317_960_720.jpg", alt: "Chef", title:"Chef at Work" }
      ]
    }
  }
}
</script>