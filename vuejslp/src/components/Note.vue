<template>
    <span :class="couleurLigne">
    Note sur {{ matiere }} : {{ note }} =
    <span v-if="note > 10">{{ matiere }} validé</span>
    <span v-else><b>{{ matiere }} non validé</b></span>
  </span>
</template>

<script>
export default {
  name: "Note",
  props: {
    matiere: String,
    note: Number
  },
  computed: {
    couleurLigne: function () {
      if (this.note > 10) {
        return 'green'
      } else {
        return 'red'
      }
    }
  }
}
</script>

<style scoped>
.red{
  color: red;
}
.green{
  color: green;
}

</style>