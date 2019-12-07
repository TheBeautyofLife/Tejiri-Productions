<template>
  <v-content>
       <Header/>
       <All/>
  </v-content>
</template>

<script>
import Header from '@/components/Header/Header_2'
import All from '@/modules/All/views/All'
export default {
  components: {
    Header,
    All
  }
}
</script>
