<template>
  <div class="space">
    <Nav />
    <ImageSection />
    <TextSection />
    <Jumbotron msg="Culinary Excellence" />
    <main>
      <Carousel />
    </main>
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Jumbotron from '@/components/Jumbotron.vue'
import ImageSection from '@/components/ImageSection.vue'
import TextSection from '@/components/TextSection.vue'
import Carousel from '@/components/Carousel.vue'
import Nav from '@/components/Nav.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'Space',
  components: {
    Jumbotron,
    ImageSection,
    TextSection,
    Carousel,
    Nav,
    Footer
  }
}
</script>