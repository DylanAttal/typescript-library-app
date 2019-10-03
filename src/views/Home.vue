<template>
  <div class="home">
    <Library />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Library from "@/components/Library.vue";

export default Vue.extend({
  name: "home",
  components: {
    Library
  }
});
</script>
