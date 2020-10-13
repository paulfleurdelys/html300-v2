<template>
    <footer>
        <section class="footer__block">
            <h1>Location & Phone</h1>
            <p>1000 Pine Street<br>Seattle, WA<br>206-867-5309</p>
        </section>
        <section class="footer__block">
            <h1>Newsletter</h1><p>Sign-up for updates and rewards</p>
            <form><input type="email"><input type="submit" value="JOIN"></form>
        </section>
        <section class="footer__block">
            <h1>Purchase a Gift Card</h1>
            <p><a href="">Click Here</a></p>
        </section>
    </footer>
</template>

<script>
export default {
  name: 'Footer',
  props: {}
}
</script>