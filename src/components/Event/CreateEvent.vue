<template>
<div id="createEvent">
  <div class="descText">Event Details:</div>
    <v-flex xs12 sm12 md12>
      <v-text-field v-model="newEvent.title"  label="Solo" placeholder="Event Title" solo></v-text-field>
    </v-flex>

    <v-flex xs12 sm12 md12>
      <v-text-field v-model="newEvent.date"  label="Solo" placeholder="Date" solo></v-text-field>
    </v-flex>

    <v-flex xs12 sm12 md12>
      <v-text-field v-model="newEvent.location"  label="Solo" placeholder="Location" solo></v-text-field>
    </v-flex>

    <v-flex xs12 sm12 md12>
      <v-text-field v-model="newEvent.cost"  label="Solo" placeholder="Cost" solo></v-text-field>
    </v-flex>

  <div class="descText">Description:</div>

    <v-flex xs12>
      <v-textarea v-model="newEvent.description" solo name="input-7-4" label="Solo textarea" value=""></v-textarea>
    </v-flex>

    <div class="descText">Keywords:</div>

    <v-flex xs12 sm12 md12>
      <v-text-field v-model="newEvent.keywords" label="Solo" placeholder="e.g. Karaoke, Games, Beer, etc." solo></v-text-field>
    </v-flex>

    <v-btn @click="addEvent(newEvent)"class="btn1">Publish</v-btn>
    <v-btn class="btn2">Clear</v-btn>
</div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'createEvent',
  data () {
    return {
      pageTitle:'Events',
      userEvents: [],
      newEvent: {
        userId: 0,
        title: '',
        date:'',
        location: '',
        cost: '',
        description: '',
        keywords: ''
      }
  }
},
  methods: {
  addEvent: function (event) {
    axios.post('http://127.0.0.1:3000/add-event/', event)
      .then(function (response) {
        console.log(response.data[0]);
      })
      .catch(function (error) {
        console.log(error);
      })
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
.btn1 {
  display: block;
  margin-left: auto;
  margin-right: auto;
  position: relative;
  right: 4em;
}
.btn2 {
  display: block;
  margin-left: auto;
  margin-right: auto;
  position: relative;
  bottom:3em;
  left: 4em;
}
.v-navigation-drawer {
  position: absolute;
}
</style>
