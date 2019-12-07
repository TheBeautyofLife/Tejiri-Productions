<template>
  <v-content>
      <!-- Header menu-->
      <v-layout row justify-end mt-3 mr-2>
         <v-list color="transparent">
           <router-link class="links" :to="All_to">
            <v-list-item >
              <v-img class="transparency"  :src="All" width="200">
                <v-layout row justify-center align-center mt-3>
                  <v-btn  @click="all()" :ripple="false" x-large text color="grey lighten-3" class="font-weight-bold">All</v-btn>
                </v-layout>
                <img>
              </v-img>
            </v-list-item>
           </router-link>
         </v-list>

         <v-list color="transparent">
            <v-list-item >
              <v-img :src="Landscape" width="200">
                <v-layout row justify-center align-center mt-3>
                  <v-btn @click="landscape()" :ripple="false" x-large text color="grey darken-3" class="font-weight-bold">Landscape</v-btn>
                </v-layout>
                 <img>
              </v-img>
            </v-list-item>
         </v-list>

        <v-list color="transparent">
           <router-link class="links" :to="Photoshoot_to">
            <v-list-item >
              <v-img class="transparency" :src="Photoshoot" width="200">
                <v-layout row justify-center align-center mt-3>
                  <v-btn  :ripple="false" x-large text color="grey lighten-3" class="font-weight-bold">Photoshoot</v-btn>
                </v-layout>
                 <img>
              </v-img>
            </v-list-item>
           </router-link>
         </v-list>
      </v-layout>
      <!-- Header menu-->

  <v-container>
    <div class="ma-5 font-weight-bold">Landscape</div>
    <stack
     :column-min-width="350"
     :gutter-width="15"
     :gutter-height="15"
     monitor-images-loaded
    >
     <stack-item
        v-for="(image, id) in images"
        :key="id"
        style="transition: transform 300ms"
     >
          <img class="photos" :src="image.image_url" />
        </stack-item>
      </stack>
    </v-container>

  </v-content>
</template>

<script>
import { Stack, StackItem } from 'vue-stack-grid'
import axios from 'axios'

export default {
  name: 'all',
  data: () => ({
    images: [],
    All_to: '/',
    All: 'https://ik.imagekit.io/qpt2onjfe/tejiri/africa-animals-carnivore-41178_Jwbc1adzK.png',
    Landscape_to: '/',
    Landscape: 'https://ik.imagekit.io/qpt2onjfe/tejiri/arid-barren-canyon-982479_JnsxAQnTKz.png',
    Photoshoot_to: '/',
    Photoshoot: 'https://ik.imagekit.io/qpt2onjfe/tejiri/attachment-baby-boy-1027931_Gmd6cfudf.png',
    isAll: false,
    isLandscape: true,
    isPhotoshoot: false
  }),

  components: {
    Stack,
    StackItem
  },

  created () {
    this.landscape()
  },

  methods: {
    landscape () {
      this.loading = true
      this.images = []
      axios.get('https://tejiriback.herokuapp.com/image/5de7b44122088829445dac85')
        .then(response => {
          this.images = response.data
        }).catch(() => {
          this.images = []
        })
    }
  }
}
</script>

<style scoped>
  .links {
    text-decoration: none !important;
  }
  .transparency {
    opacity: 0.4;

  }
  .photos {
      width: 100%;
      height: auto;
      border-radius: 6px;
  }
</style>
