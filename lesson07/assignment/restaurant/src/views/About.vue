<template>
  <div class="about">
    <Nav />
    <Jumbotron classObject= "bgWhite" heading="About our restaurant" msg="CRAS MATTIS CONSECTETUR PURUS SIT AMET FERMENTUM. SED POSUERE CONSECTETUR EST AT LOBORTIS. CRAS JUSTO ODIO, DAPIBUS AC FACILISIS IN, EGESTAS EGET QUAM. SED POSUERE CONSECTETUR EST AT LOBORTIS. MAECENAS FAUCIBUS MOLLIS INTERDUM. NULLA VITAE ELIT LIBERO A PHARETRA." />
    <Jumbotron classObject= "bgAbout" textClass="text-white" heading="Inspired Experience" />
    <Footer />
  </div>
</template>

<script>
import Jumbotron from '@/components/Jumbotron.vue'
import Nav from '@/components/Nav.vue'
import Footer from '@/components/Footer.vue'

export default {  
  name: 'About',
  components: {
    Jumbotron,
    Nav,
    Footer
  }
}
</script>