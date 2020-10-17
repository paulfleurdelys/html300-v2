<template>
  <section :class="classObject + ' ' + textClass" >
    <h1 class="display-3 text-center text-uppercase">{{ heading }}</h1>
    <p> {{ msg }}</p>
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