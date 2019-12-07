<template>
  <v-content>
  <v-layout row justify-end>
      <v-list v-for="link in links" v-bind:key="link.id">
       <router-link :to="link.to">
          <v-list-item width="100">
            <img :src="link.image" />
          </v-list-item>
       </router-link>
      </v-list>
   </v-layout>
  </v-content>
</template>

<script>
export default {
  data: () => ({
    links: [
      {
        to: '/',
        image: 'https://ik.imagekit.io/qpt2onjfe/tejiri/africa-animals-carnivore-41178_Jwbc1adzK.png'
      },
      {
        to: '/',
        image: 'https://ik.imagekit.io/qpt2onjfe/tejiri/arid-barren-canyon-982479_JnsxAQnTKz.png'
      },
      {
        to: '/',
        image: 'https://ik.imagekit.io/qpt2onjfe/tejiri/attachment-baby-boy-1027931_Gmd6cfudf.png'
      },
      {
        to: '/',
        image: 'https://ik.imagekit.io/qpt2onjfe/tejiri/adult-art-body-art-1801263_cl2wDhGW2.png'
      }
    ]
  })
}
</script>
