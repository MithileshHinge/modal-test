<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <CustomModal id="my-modal-1" closeOnClickOutside shareable>
      <div style="width: 300px; height: 200px; background-color: red;">
        <button @click="$showModal('my-modal-2')">Show blue modal</button>
        <div>{{ $isModalShown('my-modal-2') }}</div>
      </div>
    </CustomModal>
    <CustomModal id="my-modal-2" closeOnClickOutside>
      <div style="width: 200px; height: 100px; background-color: blue">
        <div>{{ $isModalShown('my-modal-2') }}</div>
      </div>
    </CustomModal>
  </div>
</template>

<script>
// $router.push({query: { modals: [ ...$route.query.modals, 'trigger' ] }})
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import CustomModal from '@/components/CustomModal.vue';


export default {
  name: 'HomeView',
  components: {
    HelloWorld,
    CustomModal,
  },
}
</script>
