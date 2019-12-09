<template>
  <v-content>
       <Header/>
        <v-container>
          <v-layout row mt-12>
            <v-col class="ml-6 mr-5">
              <p class="title text-uppercase">Contact Form</p>
              <form style="width:400px">
                <v-text-field
                   v-model="email"
                   label="E-mail"
                   required
                ></v-text-field>
                <v-text-field
                  v-model="name"
                  label="Name"
                  required
                ></v-text-field>
                <v-textarea
                  v-model="msg"
                  label="Message"
                  auto-grow
                ></v-textarea>
                <v-layout justify-end>
                   <v-btn class="mr-4" color="#2fe1fd" @click="submit">submit</v-btn>
                </v-layout>
               </form>
            </v-col>
             <v-col class="ml-6">
              <p class="title text-uppercase">Details</p>

              <v-layout row justify-center>
                <v-btn fab flat color="#4d4d4d" dark>
                  <v-icon>mdi-phone-in-talk</v-icon>
                </v-btn>
                <v-col>
                  <p class="subtitle font-weight-medium">Phone </p>
                  <p class="subtitle">0723467888 </p>
                </v-col>
              </v-layout>

               <v-layout row>
                <v-btn fab flat color="#4d4d4d" dark>
                  <v-icon>mdi-email</v-icon>
                </v-btn>
                 <v-col>
                  <p class="subtitle font-weight-medium">Email </p>
                  <p class="subtitle">lorem@host.com </p>
                </v-col>
               </v-layout>
             </v-col>
          </v-layout>
        </v-container>
       <Footer/>
  </v-content>
</template>

<script>
import Header from '@/components/Header/Header_2'
import Footer from '@/components/Footer/Footer'

export default {
  components: {
    Header,
    Footer
  },
  data: () => ({
    name: '',
    email: '',
    msg: ''
  }),

  methods: {
    submit () {
      this.name = ''
      this.email = ''
      this.checkbox = null
    }
  }
}
</script>

<style scoped>
.title {
  color: #ff3b00 !important;
}
</style>
