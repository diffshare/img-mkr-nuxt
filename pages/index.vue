<template lang="pug">
div.container
  input(type="text" v-model="title")
  br
  textarea(type="text" v-model="message")
  div {{$md.render(message)}}
  br
  button(@click="createBlob") 再レンダリング
  div#target
    .title {{title}}
    div(v-html="$md.render(message)")
  img#result
</template>

<script lang="ts">
import Vue from 'vue'
import Logo from '~/components/Logo.vue'

export default Vue.extend({
  components: {
    Logo
  },

  data() {
    return {
      title: 'たぬき油性マジック',
      message: 'メッセージ',
    }
  },

  computed: {
  },

  async mounted() {
    await this.createBlob();
  },

  methods: {
    async createBlob() {
      const target = document.querySelector("#target") as HTMLElement;
      const canvas = await this.$html2canvas(target, {
        width: 1280,
        height: 720
      });
      const img = document.querySelector("#result") as HTMLImageElement;
      const blob = await new Promise(resolve => canvas.toBlob(resolve));
      img.src = URL.createObjectURL(blob);
    },
  },
})
</script>

<style lang="sass">
@font-face
  font-family: 'TanukiMagic'
  src: url("~assets/fonts/TanukiMagic.ttf")
body
  background: #eee
.container
  margin: 20px
#target
  width: 1280px
  height: 720px
  background: url("~assets/images/cardboard.jpg")
  padding: 20px 40px
  font-family: "TanukiMagic", sans-serif
  font-weight: bold
#result
  border: 1px solid red
.title
  font-size: 100px
  font-weight: bold
p
  font-size: 50px
textarea
  height: 200px
  width: 500px
h1
  font-size: 100px
  font-weight: bold
  strong
    text-shadow: 5px 5px 0 black
h2
  font-size: 80px
  font-weight: bold

</style>
