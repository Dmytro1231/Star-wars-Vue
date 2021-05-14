<template>
  <div class="main">
    <main class="main-container">
      <p class="title">People</p>

      <TogglerSearch />
      <Loading v-if="loading" />
      <Error v-if="error" />
      <div class="container-cards" v-if="characters">
        <div v-for="item in curatedLists" :key="item" class="image-1 item">
          <span class="birth-year">{{ item.birth_year }}</span>
          <h2 class="title-card">{{ item.name }}</h2>
          <div class="feature">
            <p class="feature-item">Eye color: &nbsp;{{ item.eye_color }}</p>
            <p class="feature-item">Height: {{ item.height }}</p>
            <p class="feature-item">Mass: {{ item.mass }}</p>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
import { actionTypes } from "@/store/modules/characters";
import Loading from "@/components/Loading";
import Error from "@/components/Error";
import TogglerSearch from "@/components/TogglerSearch";

export default {
  data() {
    return {
      url: "people/",
    };
  },
  mounted() {
    this.fetchCharacters();
  },
  computed: {
    ...mapState({
      loading: (state) => state.characters.isLoading,
      error: (state) => state.characters.error,
      characters: (state) => state.characters.data,
    }),
    ...mapGetters(["curatedLists"]),
  },
  methods: {
    fetchCharacters() {
      this.$store.dispatch(actionTypes.getCharacters, this.url);
    },
  },
  components: {
    Loading,
    Error,
    TogglerSearch,
  },
};
</script>

<style lang="scss" scoped>
.main-container {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  max-width: 1440px;
  margin: 0 auto;
  margin-right: 145px;
  margin-top: 68px;
  padding-left: 10px;

  .title {
    margin-bottom: 30px;
    font-weight: bold;
    font-size: 32px;
  }
}
.container-cards {
  color: #fff;
  margin-bottom: 112px;
  display: flex;
  flex-wrap: wrap;
  .birth-year {
    font-size: 14px;
    line-height: 104%;
  }
  .title-card {
    font-size: 24px;
    line-height: 148%;
    margin-top: 10px;
    margin-bottom: 10px;
  }
  .feature {
    display: flex;
    .feature-item {
      font-weight: 300;
      font-size: 14px;
      line-height: 180%;
    }
    .feature-item:not(:last-child) {
      margin-right: 25px;
    }
  }
  .item {
    margin-right: 15px;
    margin-bottom: 17px;
  }
  .image-1 {
    width: 608px;
    height: 410px;
    background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.7) 0%,
        rgba(0, 0, 0, 0.1) 100%
      ),
      url("../assets/images/6.jpg") no-repeat 100% 100%;
    background-size: cover;
    border-radius: 6px;
    padding: 21px 0px 0px 24px;
  }
}
@media only screen and (min-width: 768px) and (max-width: 1024px) {
  .main-container {
    margin-right: 0;
    text-align: center;
  }
  .options-block {
    padding-left: 115px;
    padding-right: 0;
    display: flex;
  }
}
// mobile
@media only screen and (max-width: 375px) {
  .main-container {
    text-align: left;
    padding-left: 10px;
    margin-top: 0;
    margin-right: 0;
    flex-direction: column;
    align-items: flex-start;

    .title {
      font-size: 28px;
      margin-bottom: 16px;
    }
    .container-cards {
      margin-bottom: 80px;
      .image-1 {
        width: 339px;
        height: 406px;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        padding-bottom: 25px;
        background-size: cover;
        background-position: center;
      }
      .feature {
        &-item {
          font-weight: 100;
        }
      }
    }
  }
}
</style>
