<template>
  <v-app dark>
    <v-navigation-drawer v-model="sideNav">
      <v-list>
        <div class="avatar">
          <v-avatar class="avatarCont"><img class="avatarImg" src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John">Welcome User!</v-avatar>
        </div>
        <v-list-tile v-for="item in menuItems" :key="item.title">
          <v-list-tile-action class="iconList">
              <v-icon class="icons">{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-title-content class="itemTitle">
            <v-btn to='/Myaccount' flat>
              {{ item.title }}
            </v-btn>
          </v-list-title-content>
        </v-list-tile>
      </v-list>
      </v-navigation-drawer>

    <v-toolbar class="toolbar">
      <v-toolbar-side-icon @click="sideNav = !sideNav" class="hidden-md-and-up"></v-toolbar-side-icon>
      <v-toolbar-title>
        <v-btn class="createBtn" flat>
          Create an Event
        </v-btn>
      </v-toolbar-title>
      <!-- <v-toolbar-items >
        <v-btn flat v-for="item in menuItems" :key="item.title">
          <v-icon>{{ item.icon }}</v-icon>
        </v-btn>
      </v-toolbar-items> -->
    </v-toolbar>
    <main>
      <router-view></router-view>
    </main>
  </v-app>
</template>

<script>
  export default {
    data () {
      return {
      sideNav: false,
      menuItems: [
        { icon: 'account_circle', title: 'My Account', link:'/Myaccount'},
        { icon: 'settings', title: 'Settings'},
        { icon: 'description', title: 'About'},
        { icon: 'help', title: 'FAQ'},
        { icon: 'message', title: 'My Messages'},
        { icon: 'stars', title: 'My Events'},
        { icon: 'pan_tool', title: 'Log Out'},
      ]
      }
    }
  }
</script>

<style>
.toolbar {
  position: fixed;
  top: auto;
  display: block;
  margin-left: auto;
  margin-right: auto;
}
.iconList {
  padding:1em;
  padding-top: 4.5em;
}
.icons {
  font-size: 1.8em;
}
.itemTitle {
  padding:1em;
  padding-top: 4em;
  font-size: 1.2em;
}
.avatar {
  text-align: left;
  background-color: grey;
  height: 6em;
}
.avatarCont  {
  margin-left: 4em;
  margin-top: 1em;
  font-size: 1.3em;
}
.avatarImg {
  margin-right: 1em;
}
a:link {
  color: white;
}

</style>
