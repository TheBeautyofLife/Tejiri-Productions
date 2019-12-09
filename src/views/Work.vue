<template>
  <v-content>
       <Header/>
       <All/>
       <Footer/>
  </v-content>
</template>

<script>
import Header from '@/components/Header/Header_2'
import Footer from '@/components/Footer/Footer'
import All from '@/modules/All/views/All'

export default {
  components: {
    Header,
    All,
    Footer
  }
}
</script>
