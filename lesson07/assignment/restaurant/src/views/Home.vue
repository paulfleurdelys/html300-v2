<template>
  <div class="home">
    <Nav />
    <Jumbotron msg="Culinary Excellence" />
  </div>
</template>

<script>
// @ is an alias to /src
import Jumbotron from '@/components/Jumbotron.vue'
import Nav from '@/components/Nav.vue'

export default {
  name: 'Home',
  components: {
    Jumbotron,
    Nav
  }
}
</script>
