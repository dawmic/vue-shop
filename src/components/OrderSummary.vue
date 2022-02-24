<template>
  <div>
    <p>SUMMARY</p>
    <p>{{ order }}</p>
  </div>
</template>

<script>
export default {
  name: "OrderSummary",
  props: ["order"],
};
</script>

<style>
</style>