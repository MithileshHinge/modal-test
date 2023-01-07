<template>
  <div v-if="$isModalShown(id)" :id="id" class="modal-backdrop">
    <div class="modal">
      <div style="width: 16px; height: 16px; margin-left: auto; margin-right: 10px" @click="$hideModal(id)">
        <span class="close-icon"></span>
      </div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
// $route.query['modals'] && $route.query['modals'].includes(triggerParam)
export default {
  props: {
    id: String,
    shareable: Boolean,
    closeOnClickOutside: Boolean,
  },
  created() {
    if (this.closeOnClickOutside) {
      window.addEventListener('click', (ev) => {
        if (ev.target.id === this.id)
          this.$hideModal(this.id);
      });
    }

    if (this.shareable) {
      this.$store.dispatch('addShareableModal', this.id);
    }
  },
}
</script>

<style>
.modal {
  width: fit-content;
  margin: auto;
  margin-top: 15%;
  z-index: 10;
  background-color: white;
}

.modal-backdrop {
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0, 0.4);
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
}

.close-icon, .close-icon::after {
	display: block;
	width: 1rem;
	height: 0.0625rem;
	background-color: #000;
}

.close-icon {
	margin-top: 0.5rem;
	margin-bottom: 0.375rem;
	transform: rotate(45deg) translate(10px);
}

.close-icon::after {
  content: '';
	transform: rotate(-90deg);
}
</style>