<template>
 <!-- Fills out a v-for on a template to render two elements, article and section, into the menu correctly -->
  <aside class="aside__sidebar col-sm-12 col-md-3 col-xl-4">
    <h1>Cocktails</h1>
  <template v-for="item in items">
    <article class="aside__menu-item" v-bind:key="item.id">
      <span class="aside__menu-item__bold">{{ item.name }}</span>
      <br> {{ item.text }}
    </article>
    <section class="aside__menu-price" v-bind:key="item.drinkid">{{ item.price }}</section>

  </template>

  </aside>
</template>

<script>

export default {
  name: 'DrinkMenu',
  components: {
  },
  props: {},
  data() {
    return { items:
      [
        { drinkid: 1, price: "$11", name:"Manhattan", text:"rye whisky, sweet vermouth, bitters" },
        { drinkid: 2, price: "$9", name:"Dark & Stormy", text:"black rum, ginger beer, lime" },
        { drinkid: 3, price: "$11", name:"Old Cuban", text:"aged rum, lime juice, bitters, champagne" },
        { drinkid: 4, price: "$10", name:"Negroni", text:"gin, vermouth rosso, campari" },
        { drinkid: 5, price: "$12", name:"Bloody Mary", text:"tomato juice, vodka, tabasco, bacon bits" },
        { drinkid: 6, price: "$12", name:"Green & Amber", text:"vodka, scotch, honey, lemon, green tea" },
        { drinkid: 7, price: "$9", name:"White Russian", text:"vodka, tia maria, heavy cream" }
      ]
      }
  }
}
</script>