<template>
  <v-app dark>
    <v-navigation-drawer v-model="sideNav">
      <v-list>
        <v-list-tile v-for="item in menuItems" :key="item.title">
          <v-list-tile-action class="iconList">
            <v-icon class="icons">{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-title-content class="itemTitle">
            <v-btn :to="item.link" flat>
              {{ item.title }}
            </v-btn>
          </v-list-title-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar class="toolbar">
      <v-toolbar-side-icon @click="sideNav = !sideNav" class="hidden-md-and-up"></v-toolbar-side-icon>
      <v-toolbar-title>
        <a class="homeBtn" flat>
          <router-link to="/" tag="span" style="cursor:pointer">
            <v-icon class="homeIcon">home</v-icon>
          </router-link>
        </a>
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
    name:'app',
    data () {
      return {
      sideNav: false,
      menuItems: [
        { icon: 'account_circle', title: 'My Account', link:'/Myaccount'},
        { icon: 'settings', title: 'Settings', link:'/Settings'},
        { icon: 'description', title: 'About', link:'/About'},
        { icon: 'help', title: 'FAQ', link: '/Faq'},
        { icon: 'message', title: 'My Messages', link:'/Mymessages'},
        { icon: 'stars', title: 'Create Event', link:'/event/createevent'},
        { icon: 'pan_tool', title: 'Log Out', link:'/User/Logout'},
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
  z-index: 1;
}
.iconList {

}
.icons {
  font-size: 1.8em;
}
.homeBtn {
  position: absolute;
  right: .5em;
  bottom: 0;
  margin: auto;
  font-size: .8em;
}
.homeIcon {
  font-size: 2.8em;
}
.itemTitle {
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
