<template>
  <div v-if="$store.state.shownModalIds.length > 0" class="modal-backdrop">
  </div>
</template>

<script>
</script>

<style scoped>
.modal-backdrop {
  width: 200px;
  height: 150px;
  background-color: rgba(0,0,0, 0.4);
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
}
</style>