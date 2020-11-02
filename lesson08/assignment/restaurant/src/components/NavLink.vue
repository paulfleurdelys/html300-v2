<template>
  <li class="nav-item">
    <router-link v-bind:to="url" class="nav-link text-light">{{ linkText }}</router-link>
  </li>

</template>

<script>
export default {
  name: 'NavLink',
  props: { 
    url: String, 
    linkText: String }
}
</script>