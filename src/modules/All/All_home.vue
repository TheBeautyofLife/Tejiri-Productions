<template>
  <v-content>
      <!-- Header menu-->
      <v-layout row justify-end mt-3 mr-2>
         <v-list color="transparent">
           <router-link class="links" :to="All_to">
            <v-list-item >
              <v-img :class="class_true" :src="All" width="200">
                <v-layout row justify-center align-center mt-3>
                  <v-btn @click="all()" x-large text color="grey darken-2" class="font-weight-bold">All</v-btn>
                </v-layout>
                <img>
              </v-img>
            </v-list-item>
           </router-link>
         </v-list>

         <v-list color="transparent">
            <v-list-item >
              <v-img :class="class_true" :src="Landscape" width="200">
                <v-layout row justify-center align-center mt-3>
                  <v-btn @click="landscape()" :ripple="false" x-large text color="grey darken-2" class="font-weight-bold">Landscape</v-btn>
                </v-layout>
                 <img>
              </v-img>
            </v-list-item>
         </v-list>

        <v-list color="transparent">
           <router-link class="links" :to="Photoshoot_to">
            <v-list-item >
              <v-img :class="transparency" :src="Photoshoot" width="200">
                <v-layout row justify-center align-center mt-3>
                  <v-btn @click="photoshoot()" :ripple="false" x-large text color="grey darken-2" class="font-weight-bold">Photoshoot</v-btn>
                </v-layout>
                 <img>
              </v-img>
            </v-list-item>
           </router-link>
         </v-list>
      </v-layout>
      <!-- Header menu-->

  <v-container mt-4>
    <div class="mb-4 ml-1 font-weight-medium title">{{ title }}</div>
    <stack
     :column-min-width="350"
     :gutter-width="15"
     :gutter-height="5"
     monitor-images-loaded
    >
     <stack-item
        v-for="(image, id) in images.slice(0, 6)"
        :key="id"
        style="transition: transform 300ms"
     >
          <img class="photos" :src="image.image_url" />
        </stack-item>
      </stack>
    </v-container>

    <v-layout row justify-center align-center mb-8>
      <v-btn to="/work" text>View More</v-btn>
    </v-layout>

  </v-content>
</template>

<script>
import { Stack, StackItem } from 'vue-stack-grid'
import axios from 'axios'

export default {
  name: 'all',
  data: () => ({
    images: [],
    title: '',
    All_to: '/',
    All: 'https://ik.imagekit.io/qpt2onjfe/tejiri/africa-animals-carnivore-41178_Jwbc1adzK.png',
    Landscape_to: '/',
    Landscape: 'https://ik.imagekit.io/qpt2onjfe/tejiri/arid-barren-canyon-982479_JnsxAQnTKz.png',
    Photoshoot_to: '/',
    Photoshoot: 'https://ik.imagekit.io/qpt2onjfe/tejiri/attachment-baby-boy-1027931_Gmd6cfudf.png'
  }),

  components: {
    Stack,
    StackItem
  },

  created () {
    this.all()
    this.landscape()
  },

  methods: {
    all () {
      this.images = []
      this.title = 'All Photos'
      axios.get('https://tejiriback.herokuapp.com/image')
        .then(response => {
          this.images = response.data
        }).catch(() => {
          this.images = []
        })
    },
    landscape () {
      this.images = []
      this.title = 'Landscape Photos'
      axios.get('https://tejiriback.herokuapp.com/image/5de7b44122088829445dac85')
        .then(response => {
          this.images = response.data
        }).catch(() => {
          this.images = []
        })
    },
    photoshoot () {
      this.images = []
      this.title = 'Photoshoot Photos'
      axios.get('https://tejiriback.herokuapp.com/image/5de7b46f22088829445dac86 ')
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
