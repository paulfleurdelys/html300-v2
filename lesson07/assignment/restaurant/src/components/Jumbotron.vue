<template>
  <section class="jumbotron" :class="classObject" >
      <h1 class="display-3 text-dark text-center text-uppercase">{{ msg }}</h1>
  </section>
</template>

<script>
export default {
  name: 'Jumbotron',
  props: {
    heading: String,
    msg: String,
    classObject: String
  }, data() {
    return {
    }
  }
}
</script>