<template>
  <card v-for="good in goods" :key="good.id" :object="good"/>
</template>

<script>
import Card from "../components/Card";
export default {
  components: {Card},
  computed: {
    goods() {
      return this.$store.state.goods;
    }
  },
}
</script>

<style scoped>
</style>