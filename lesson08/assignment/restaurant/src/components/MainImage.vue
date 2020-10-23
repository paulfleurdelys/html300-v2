<template>
  <!-- MainImage has a mixin for the data and methods to control the onclick event and the truthiness of borderOn-->

    <img class="img-fluid rounded my-3 mx-auto d-block" 
      :class="{'borderOn' : isClicked }"
      v-on:click="toggleBorder" 
      v-bind:alt="alt"
      v-bind:title="title"
      v-bind:src= "require('../assets/' + imageSrc)" />
</template>

<script>
import BorderClick from '@/components/mixins/BorderClick.js'

export default {
  name: 'MainImage',
  mixins: [BorderClick],
  props: {
    imageSrc: { type: String, required: true },
    alt: { type: String, required: false },
    title: { type: String, required: false }
    },
  data() { 
    return { 
      }
  },
    methods: {
    }
}
</script>