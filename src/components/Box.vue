<template>
  <div class="box has-text-weight-bold">
     <slot></slot>
  </div>
 
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Box Multi",
});
</script>

<style scoped>
.box {
  background: rgb(249, 232, 202);
}
</style>