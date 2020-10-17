<template>
  <div class="about">
    <Nav />
    <TextSection heading="About our restaurant" />
    <Jumbotron classObject= "bgAbout" msg="Inspired Experience" />
    <Footer />
  </div>
</template>

<script>
import Jumbotron from '@/components/Jumbotron.vue'
import TextSection from '@/components/TextSection.vue'
import Nav from '@/components/Nav.vue'
import Footer from '@/components/Footer.vue'

export default {  
  name: 'About',
  components: {
    Jumbotron,
    TextSection,
    Nav,
    Footer
  }
}
</script>