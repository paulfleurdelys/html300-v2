<template>
 <!-- Fills out and binds attributes from the object array to FoodMenuItem components -->
            <main class="main__primary-container col-sm-12 col-md-9 col-xl-8">
            <h1>Food</h1> 
              <section class="main__menu-list"> 
                <FoodMenuItem 
                v-for="item in items" 
                v-bind:key="item.key"
                v-bind:dishName="item.dishName"
                v-bind:text="item.text"
                v-bind:imageSrc="item.imageSrc"
                />
              </section>
          </main>
</template>

<script>
import FoodMenuItem from '@/components/FoodMenuItem.vue'

export default {
  name: 'FoodMenu',
  components: {
    FoodMenuItem
  },
  props: {},
  data() {
    return { items:
      [
        { id: 1, dishName:"Sushi", imageSrc:"sushi-1634013_960_720.jpg", text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
        { id: 2, dishName:"Fried Rice", imageSrc:"fried-rice-3023040_960_720.jpg", text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
        { id: 3, dishName:"Pad Thai", imageSrc:"pad-thai-921884_960_720.jpg", text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
        { id: 4, dishName:"Red Curry", imageSrc:"thai-cuisine-590018_960_720.jpg", text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
        { id: 5, dishName:"Green Curry", imageSrc:"green-curry-3604721_960_720.jpg", text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
        { id: 6, dishName:"Satay", imageSrc:"satay-chicken-3604856_960_720.jpg", text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
        { id: 7, dishName:"Thai Basil", imageSrc:"thai-basil-2996229_960_720.jpg", text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
        { id: 8, dishName:"Thai Tofu", imageSrc:"thai-food-2457223_960_720.jpg", text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
        { id: 9, dishName:"Desert", imageSrc:"dessert-4693042_960_720.jpg", text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." }
      ]
      }
  }
}
</script>