<template>
  <!-- AccordionItem populates the bootstrap accordion card template with props-->
  <div class="card">
    <div class="card-header">
      <h2 class="mb-0">
        <button class="text-dark btn btn-link btn-block text-left" type="button" data-toggle="collapse" 
        v-bind:data-target="dataTarget">
          {{ question }}
        </button>
      </h2>
    </div>

    <div v-bind:id="collapseTarget" class="collapse">
      <div class="card-body">
        {{ answer }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AccordionItem',
  props: { 
    question: { type: String, required: true }, 
    answer: { type: String, required: true }, 
    collapseTarget: { type: String, required: true }, 
    dataTarget: { type: String, required: true }, 
    }
}
</script>