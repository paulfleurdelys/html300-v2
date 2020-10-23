<template>
  <!-- Accordion component uses a v-for loop to create the AccordionItem components, binds collapsetarget and datatarget to make the accordion open each item correctly-->
  <div class="accordion" id="accordionExample">
    <AccordionItem v-for="item in items" 
    v-bind:key="item.id"
    v-bind:question="item.question"
    v-bind:answer="item.answer"
    v-bind:collapseTarget="item.collapseTarget" 
    v-bind:dataTarget="item.dataTarget" />
  </div>
</template>

<script>
import AccordionItem from '@/components/AccordionItem.vue'

export default {
  name: 'Accordion',
  components: {
    AccordionItem
  },
  props: {},
  data() {
    return { items:
      [
        { id: 1, question: "What Are Your Hours?", answer: "We're open daily from 11am to 9pm", collapseTarget: "collapseOne", dataTarget: "#collapseOne" },
        { id: 2, question: "Do You Take Reservations?", answer: "Yes, please reserve online. For groups larger than 6, please call us directly for special accomodations.", collapseTarget: "collapseTwo", dataTarget: "#collapseTwo"  },
        { id: 3, question: "Can I Bring My Own Alcohol?", answer: "We offer corkage for $40 if you wish to bring your own wine.", collapseTarget: "collapseThree", dataTarget: "#collapseThree" }
      ]
    }
  }
}
</script>