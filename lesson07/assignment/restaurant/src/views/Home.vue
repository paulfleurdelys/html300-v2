<template>
  <div class="home">
    <Nav />
    <TextSection heading="Chef Talent" />
    <Jumbotron msg="Culinary Excellence" />
    <main>
      <Accordion />
    </main>
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Jumbotron from '@/components/Jumbotron.vue'
import TextSection from '@/components/TextSection.vue'
import Accordion from '@/components/Accordion.vue'
import Nav from '@/components/Nav.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'Home',
  components: {
    Jumbotron,
    Accordion,
    TextSection,
    Nav,
    Footer
  }
}
</script>
