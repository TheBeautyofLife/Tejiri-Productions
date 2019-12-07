<template>
  <v-content>
      
  </v-content>
</template>

<script>
export default {
  var CLIENT_ID = "";
function makeQuery(query) {
  return "https://api.unsplash.com/photos/search/?query=" + query +  "&client_id=" + CLIENT_ID;
}

}
</script>
