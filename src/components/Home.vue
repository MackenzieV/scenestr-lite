<template>
<div id="home">
  <v-toolbar class="searchbar" dense floating>
    <v-text-field>
      hide-details
      prepend-icon="search"
      single-line
    </v-text-field>
    <v-btn icon>
      <v-icon>my_location</v-icon>
    </v-btn>
    <v-btn icon>
      <v-icon>more_vert</v-icon>
    </v-btn>
  </v-toolbar>
</div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      msg: 'Scenestr'
    }
  }
}
</script>

<style scoped>
#map {
  height: 100%;
  }
html, body {
  height: 100%;
  margin: 0;
  padding: 0;
}
.searchbar {
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 3em;
  width: 80%;
}

</style>
