<template>
  <div class="order">
    <Nav />
    <section class="divider-block"><h1>Incredible Food</h1><p>Cras mattis consectetur purus sit amet fermentum. Sed posuere consectetur est at lobortis. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Sed posuere consectetur est at lobortis. Maecenas faucibus mollis interdum. Nulla vitae elit libero a pharetra.
        </p>
    </section>
                 <!-- Switch from CSS grid to bootstrap grid.  2 columns, second column (aside) will wrap underneath below col-md breakpoint -->

        <div class="container-fluid">
        <section class="row">
          <FoodMenu />
          <DrinkMenu />
        </section>
      </div>
    <Footer />  </div>
</template>

<script>
import Nav from '@/components/Nav.vue'
import Footer from '@/components/Footer.vue'
import FoodMenu from '@/components/FoodMenu.vue'
import DrinkMenu from '@/components/DrinkMenu.vue'

export default {
  name: 'Order',
  components: {
    Nav,
    Footer,
    FoodMenu,
    DrinkMenu
  }
}
</script>