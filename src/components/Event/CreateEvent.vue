<template>
<div id="createEvent">

    <div class="descText">Event Details:</div>
    <v-flex xs12 sm12 md12>
      <v-text-field v-for="item in eventList" :key="item.list" label="Solo" :placeholder="item.list" solo></v-text-field>
    </v-flex>

    <div class="descText">Description:</div>
    <v-flex xs12>
     <v-textarea solo name="input-7-4" label="Solo textarea" value="This is the event description"></v-textarea>
    </v-flex>
    <div class="descText">Keywords:</div>
    <v-flex xs12 sm12 md12>
      <v-text-field label="Solo" placeholder="e.g. Karaoke, Games, Beer, etc." solo></v-text-field>
    </v-flex>
    <v-btn class="btn">Publish</v-btn>

</div>
</template>

<script>
export default {
  name: 'createEvent',
  data () {
    return {
      eventList: [
        { list: 'User ID' },
        { list: 'Event Name' },
        { list: 'Location' },
        { list: 'Date/Time'},
        { list: 'Cost' },
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.v-text-field {
  display: block;
  margin-left: auto;
  margin-right: auto;
  max-width: 85%;
}
.descText {
  font-size: 1.3em;
  text-align: center;
  padding:.5em;
}
v-textarea {
  height:5em;
}
.btn {
  display: block;
  margin-left: auto;
  margin-right: auto;
}
.imgFile {

}

</style>
