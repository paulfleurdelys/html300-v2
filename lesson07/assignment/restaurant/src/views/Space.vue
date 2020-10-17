<template>
  <div class="space">
    <Nav />
    <ImageSection />
    <Jumbotron classObject="bgWhite" heading="OUR DINING ROOM AND EVENT AREA" msg="CRAS MATTIS CONSECTETUR PURUS SIT AMET FERMENTUM. SED POSUERE CONSECTETUR EST AT LOBORTIS. CRAS JUSTO ODIO, DAPIBUS AC FACILISIS IN, EGESTAS EGET QUAM. SED POSUERE CONSECTETUR EST AT LOBORTIS. MAECENAS FAUCIBUS MOLLIS INTERDUM. NULLA VITAE ELIT LIBERO A PHARETRA." />
    <Jumbotron classObject="bgSpace" textClass="text-white" heading="Unique Spaces For Your Occasion Or Event" />
    <main>
      <BVCarousel />
    </main>
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Jumbotron from '@/components/Jumbotron.vue'
import ImageSection from '@/components/ImageSection.vue'
import BVCarousel from '@/components/BVCarousel.vue'
import Nav from '@/components/Nav.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'Space',
  components: {
    Jumbotron,
    ImageSection,
    BVCarousel,
    Nav,
    Footer
  }
}
</script>