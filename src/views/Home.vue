<template>
  <v-content class="home">
    <v-img :src="image">
      <img/>
    </v-img>
  <All />
  </v-content>
</template>

<script>
import All from '@/modules/All/All_home'

export default {
  name: 'home',
  components: {
    All
  },
  data: () => ({
    image: 'https://ik.imagekit.io/qpt2onjfe/tejiri/terricks-noah-HxBuaGvn2E4-unsplash_5C185KBB0.jpg'
  })
}
</script>
