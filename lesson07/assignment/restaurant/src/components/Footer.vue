<template>
<!-- Footer has largely different HTML in each section, so no v-for or child component.  Also includes v-if statement to switch the email registration section based on a theoretical user state data value.-->
    <footer>
        <section class="footer__block">
            <h1>{{ blocks[0].headerText }}</h1>
            <p>1000 Pine Street<br>Seattle, WA<br>206-867-5309</p>
        </section>
        <section class="footer__block">
            <h1>{{ blocks[1].headerText }}</h1>
            <template v-if="isRegistered">
                <p>Thanks for being a big fan!</p>
            </template>
            <template v-else>
            <p>Sign-up for updates and rewards</p>
            <form><input type="email"><input type="submit" value="JOIN"></form>
            </template>
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
    return { isRegistered: true,
    blocks:
      [
          {id: 1, headerText: "Location & Phone"},
          {id: 2, headerText: "Newsletter"},
          {id: 3, headerText: "Purchase a Gift Card"},
      ]
    }
    }
}
</script>