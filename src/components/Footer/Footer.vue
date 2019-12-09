<template>
  <v-footer color="#4a4a54" height="170px">
    <v-layout column>
      <v-layout row wrap>
          <v-layout column class="links" ml-5 mt-4>
            <router-link class="link" to="/work"> Our Work</router-link>
            <router-link class="link mt-2" to="/about"> About Us</router-link>
            <router-link class="link mt-2" to="/contact"> Contact Us</router-link>
          </v-layout>
          <v-row mt-3>
            <v-col>
              <p class="paragraph subtitle">Connect with Us</p>
                <v-row>
                  <div class="icons ml-2">
                  <v-icon class="mr-2" color="white">mdi-twitter-box</v-icon>
                  <a href="https://www.facebook.com/tejiriproductions//"><v-icon class="mr-2" color="white">mdi-facebook-box</v-icon></a>
                  </div>
                </v-row>
            </v-col>
          </v-row>
      </v-layout>
      <div class="v-spacer mt-3 mb-4"></div>
      <v-layout justify-end>
        <p class="copyright"> &copy; 2019 Tejiri Produtions. All Rights Reserved</p>
      </v-layout>
  </v-layout>
  </v-footer>
</template>

<script>
export default {
  //
}
</script>

<style scoped>
.link {
  color: #fff !important;
  font-size: 15px;
  font-weight: 400;
}
.v-spacer {
  border-bottom: solid 1px #929298;
}
.copyright {
  color: #929298;
   font-size: 13px;
  font-weight: 400;
}
.paragraph {
    color: #fff;
   font-size: 16px;
}
.icons {
  color: #fff;
}
</style>
