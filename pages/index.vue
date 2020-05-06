<template>
  <div class="container">
    <div id="target">
      <p>あああああああ</p>
    </div>
    <img id="result"/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Logo from '~/components/Logo.vue'

export default Vue.extend({
  components: {
    Logo
  },

  computed: {
  },

  async mounted() {
    const target = document.querySelector("#target") as HTMLElement;
    const canvas = await this.$html2canvas(target, {
      width: 1280,
      height: 720
    });
    const img = document.querySelector("#result") as HTMLImageElement;
    const blob = await new Promise(resolve => canvas.toBlob(resolve));
    img.src = URL.createObjectURL(blob);
  }
})
</script>

<style>
#result {
  border: 1px solid black;
}
/* Sample `apply` at-rules with Tailwind CSS
.container {
  @apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
/*
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
*/
.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
