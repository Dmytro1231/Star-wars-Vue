<template>
  <app-nav></app-nav>

  <app-item-list> </app-item-list>

  <app-footer></app-footer>
</template>

<script>
import AppItemList from "./components/AppItemList.vue";
import AppNav from "./components/AppNav";
import AppFooter from "./components/AppFooter";

export default {
  name: "app",
  data() {
    return {};
  },
  components: {
    AppNav,
    AppItemList,
    AppFooter,
  },
};
</script>

<style lang="scss">
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
li {
  list-style-type: none;
}
a {
  text-decoration: none;
}

body {
  font-family: "HelveticaRegular", sans-serif;
}
.down {
  transform: rotate(45deg);
  -webkit-transform: rotate(45deg);
}

@media only screen and (max-width: 375px) {
  .v-select {
    margin-right: 0 !important;
}
}

</style>
