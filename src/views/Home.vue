<template>
  <v-content class="home">
    <v-img :src="image">
      <img/>
      <Header/>
    </v-img>
  <All />
  </v-content>
</template>

<script>
import Header from '@/components/Header/Header'
import All from '@/modules/All/All_home'

export default {
  name: 'home',
  components: {
    Header,
    All
  },
  data: () => ({
    image: 'https://ik.imagekit.io/qpt2onjfe/tejiri/calm-dawn-landscape-1105389_iliqQRPVf.png'
  })
}
</script>
