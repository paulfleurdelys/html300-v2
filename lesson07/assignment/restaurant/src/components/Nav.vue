
<template>
    <header>
                   <!-- Navbar light with minor CSS remaining from lesson05-->

    <nav class="navbar navbar-expand-lg navbar-light">
        <ul class="navbar-nav mr-auto">
            <NavLink 
                v-for="link in links" 
                v-bind:key="link.id"
                v-bind:url="link.url" 
                v-bind:linkText="link.linkText" />
        </ul>
    </nav>
    </header>
</template>

<script>
import NavLink from '@/components/NavLink.vue'

export default {
  name: 'Nav',
  components: {
    NavLink
  },
  props: {},
    data() {
    return { links:
      [
          {id: 1, url: "/", linkText: "home"},
          {id: 2, url: "/space", linkText: "our space"},
          {id: 3, url: "/order", linkText: "order"},
          {id: 4, url: "/about", linkText: "about"},
          {id: 5, url: "/locations", linkText: "locations"}
      ]
    }
    }
}
</script>