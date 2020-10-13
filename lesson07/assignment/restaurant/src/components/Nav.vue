
<template>
    <header>
                   <!-- Navbar light with minor CSS remaining from lesson05-->

        <nav class="navbar navbar-expand-lg navbar-light">
            <ul class="navbar-nav mr-auto">
            <li class="nav-item"><router-link to="/" class="nav-link text-light">home</router-link></li>
            <li class="nav-item"><router-link to="/space" class="nav-link text-light">our space</router-link></li>
            <li class="nav-item"><a class="nav-link text-light" href="./order.html">order</a></li>
            <li class="nav-item"><router-link to="/about" class="nav-link text-light">about</router-link>about</li>
            <li class="nav-item"><a class="nav-link text-light" href="">locations</a></li>
        </ul></nav>
    </header>
</template>

<script>
export default {
  name: 'Nav',
  props: {}
}
</script>