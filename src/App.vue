<template>
  <v-app>
           <Header/>
    <v-content>
      <router-view/>
    </v-content>
           <Footer/>
  </v-app>
</template>

<script>
import Header from '@/components/Header/Header_2'
import Footer from '@/components/Footer/Footer'
export default {
  name: 'App',
  components: {
    Header,
    Footer
  }
}
</script>
