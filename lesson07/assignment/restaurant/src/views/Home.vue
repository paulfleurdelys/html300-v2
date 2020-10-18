<template>
  <div class="home">
    <Nav />
    <Jumbotron classObject="bgWhite" heading="Chef Talent" msg="CRAS MATTIS CONSECTETUR PURUS SIT AMET FERMENTUM. SED POSUERE CONSECTETUR EST AT LOBORTIS. CRAS JUSTO ODIO, DAPIBUS AC FACILISIS IN, EGESTAS EGET QUAM. SED POSUERE CONSECTETUR EST AT LOBORTIS. MAECENAS FAUCIBUS MOLLIS INTERDUM. NULLA VITAE ELIT LIBERO A PHARETRA."/>
    <Jumbotron classObject="bgHome"  heading="Culinary Excellence" />
    <main>
      <Accordion />
    </main>
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Jumbotron from '@/components/Jumbotron.vue'
import Accordion from '@/components/Accordion.vue'
import Nav from '@/components/Nav.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'Home',
  components: {
    Jumbotron,
    Accordion,
    Nav,
    Footer
  }
}
</script>


