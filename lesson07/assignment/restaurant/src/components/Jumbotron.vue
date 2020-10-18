<template>
  <!-- Jumbotron conditionally renders a standard message is the msg prop is blank -->
  <section class="my-3" :class="classObject + ' ' + textClass" >
    <h1 class="display-3 my-3 text-center text-uppercase">{{ heading }}</h1>
    <p v-if="msg"> {{ msg }}</p>
    <p v-else >Authentic, From Scratch, Voted Seattle's Best New Restaurant </p>

  </section>
</template>

<script>
export default {
  name: 'Jumbotron',
  props: {
    heading: String,
    msg: String,
    classObject: String,
    textClass: String
  }, data() {
    return {
    }
  }
}
</script>