<template>
  <div class="space">
    <Nav />
    <TextSection />
    <Jumbotron msg="Culinary Excellence" />
    <main>
    </main>
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Jumbotron from '@/components/Jumbotron.vue'
import TextSection from '@/components/TextSection.vue'
import Nav from '@/components/Nav.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'Space',
  components: {
    Jumbotron,
    TextSection,
    Nav,
    Footer
  }
}
</script>