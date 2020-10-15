<template>
    <footer>
        <section class="footer__block">
            <h1>{{ blocks[0].headerText }}</h1>
            <p>1000 Pine Street<br>Seattle, WA<br>206-867-5309</p>
        </section>
        <section class="footer__block">
            <h1>{{ blocks[1].headerText }}</h1>
            <p>Sign-up for updates and rewards</p>
            <form><input type="email"><input type="submit" value="JOIN"></form>
        </section>
        <section class="footer__block">
            <h1>{{ blocks[2].headerText }}</h1>
            <p><a href="">Click Here</a></p>
        </section>
    </footer>
</template>

<script>
export default {
  name: 'Footer',
  props: {},
    data() {
    return { blocks:
      [
          {id: 1, headerText: "Location & Phone"},
          {id: 2, headerText: "Newsletter"},
          {id: 3, headerText: "Purchase a Gift Card"},
      ]
    }
    }
}
</script>