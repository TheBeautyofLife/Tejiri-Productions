<template>
  <v-content class="home">
    <v-img :src="image">
      <img/>
      <Header/>
    </v-img>
  <All />
  <Footer />
  </v-content>
</template>

<script>
import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'
import All from '@/modules/All/All_home'

export default {
  name: 'home',
  components: {
    Header,
    All,
    Footer
  },
  data: () => ({
    image: 'https://ik.imagekit.io/qpt2onjfe/tejiri/calm-dawn-landscape-1105389_iliqQRPVf.png'
  })
}
</script>
