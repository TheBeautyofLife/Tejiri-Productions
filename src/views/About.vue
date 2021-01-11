<template>
  <v-content>
        <v-container class="mt-12 mb-10" style="width:700px">
          <v-layout column mt-12 mb-12>
            <v-flex xs12 md4>
              <div class="display-1 text-capitalize mb-5">About us</div>
              <p> Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Minima, eligendi. Nihil tenetur cumque sed ad illum sapiente
                ab quod dolorem! Dignissimos et error necessitatibus fugiat
                nulla laborum autem amet soluta.</p>
            </v-flex>
            <p class="headline">Team</p>
            <v-layout row>
              <v-col>
                <img
                  :src="require('../assets/temp/adult-beach.png')"
                  alt=""
                  width="300"
                >
              </v-col>
               <v-col>
                <p class="title"> John Andrew</p>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Aspernatur alias autem sed facere excepturi. Cumque fuga iste
                  aspernatur neque. Ipsum, quis doloremque. Odit impedit explicabo
                  sint magni maxime totam in.</p>
              </v-col>
            </v-layout>
            <v-layout row mt-5>
               <v-col>
                <p class="title text text-right"> Frank Omondi</p>
                <p class="text-right">Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Aspernatur alias autem sed facere excepturi. Cumque fuga iste
                  aspernatur neque. Ipsum, quis doloremque. Odit impedit explicabo
                  sint magni maxime totam in.</p>
              </v-col>
              <v-col>
                <img
                  :src="require('../assets/temp/adult-back.png')"
                  alt=""
                  width="300"
                >
              </v-col>
            </v-layout>
            <v-flex xs12 md4 class="mt-10">
              <div class="display-1 text-capitalize mb-12">Our Work</div>
              <p> Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Minima, eligendi. Nihil tenetur cumque sed ad illum sapiente
                ab quod dolorem! Dignissimos et error necessitatibus fugiat
                nulla laborum autem amet soluta. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Minima, eligendi. Nihil tenetur cumque sed ad illum sapiente
                ab quod dolorem! Dignissimos et error necessitatibus fugiat
                nulla laborum autem amet soluta.</p>
            </v-flex>
          </v-layout>
        </v-container>
  </v-content>
</template>

<script>
export default {
//
}
</script>
