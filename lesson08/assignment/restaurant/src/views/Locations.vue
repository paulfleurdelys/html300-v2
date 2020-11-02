<template>
  <div class="locations">
    <Nav />
    <Footer />
  </div>
</template>

<script>
import Nav from '@/components/Nav.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'Locations',
  components: {
    Nav,
    Footer
  }
}
</script>