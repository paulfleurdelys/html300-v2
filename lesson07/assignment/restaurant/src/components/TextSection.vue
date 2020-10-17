<template>
  <section class="divider-block">
    <h1>{{ heading }}</h1>
    <p>Cras mattis consectetur purus sit amet fermentum. Sed posuere consectetur est at lobortis. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Sed posuere consectetur est at lobortis. Maecenas faucibus mollis interdum. Nulla vitae elit libero a pharetra.</p>
    </section>
</template>

<script>
export default {
  name: 'TextSection',
  props: {
    heading: String,
    msg: String}
}
</script>