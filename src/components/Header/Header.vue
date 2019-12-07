<template>
   <v-toolbar
   color="transparent" flat>
      <div class="d-flex align-center">
      <router-link class="mr-5 link" to="/">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://ik.imagekit.io/qpt2onjfe/Tlogo_cnQmm7JpF.svg"
          transition="scale-transition"
          width="190"
        />
      </router-link>
      </div>

      <v-spacer></v-spacer>
      <router-link class="mr-5 link" to="/work"> Work </router-link>
      <router-link class="mr-5 link" to="/about"> About </router-link>
      <router-link class="mr-5 link" to="/contact"> Contact </router-link>
      <router-link class="mr-5 link" to="/service"> Services </router-link>

      <v-dialog v-model="dialog" persistent max-width="400px">
      <template v-slot:activator="{ on }">
        <v-btn outlined color="white" class="mr-5 link text-capitalize font-weight-medium" v-on="on"> Login </v-btn>
      </template>
        <v-card>
          <v-card-title>
            <v-layout column>
              <span class="headline mb-6">Login </span>
            </v-layout>
            </v-card-title>
        <v-card-text>
          <form>
            <v-text-field outlined blue darken-1 label="Email*" required></v-text-field>
            <v-text-field outlined blue darken-1 label="Password*" type="password" required></v-text-field>
          <span class="caption">Are you new? Join us <router-link to="/register">here</router-link> </span>
          <v-spacer/>
          <v-layout row justify-end>
            <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="grey lighten-1" text @click="dialog = false">Close</v-btn>
          <v-btn color="blue darken-1" dark large  @click="dialog = false">Submit</v-btn>
        </v-card-actions>
          </v-layout>
         </form>
        </v-card-text>
        </v-card>
      </v-dialog>
   </v-toolbar>
</template>

<script>
export default {
  data: () => ({
    dialog: false
  })
}

</script>

<style>
  a.link {
    color: #fff !important;
    text-decoration: none;
    font-weight: 500;
    font-size: 18px;
  }
router-link-exact-active {
    color: aqua
  }
</style>
