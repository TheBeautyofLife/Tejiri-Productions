<template>
 <v-content>
     <!-- Header menu-->
      <v-layout row justify-center mt-3 mr-2>
        <v-btn @click="all()" x-large text :color="active" class="font-weight-bold">All</v-btn>
        <v-btn @click="landscape()" :ripple="false" x-large text :color="active" class="font-weight-bold">Landscape</v-btn>
        <v-btn @click="photoshoot()" :ripple="false" x-large text :color="active" class="font-weight-bold">Photoshoot</v-btn>
      </v-layout>
    <v-container mt-4>
    <stack
     :column-min-width="350"
     :gutter-width="15"
     :gutter-height="5"
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

<script>import { Stack, StackItem } from 'vue-stack-grid'
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
    Photoshoot: 'https://ik.imagekit.io/qpt2onjfe/tejiri/attachment-baby-boy-1027931_Gmd6cfudf.png',
    active: 'grey darken-1'
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
    .photos {
      width: 100%;
      height: auto;
      border-radius: 6px;
  }
</style>
