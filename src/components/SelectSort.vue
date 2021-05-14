<template>
  <div class="v-select">
    <p class="title" @click="areOptionsVisible = !areOptionsVisible">
      {{ selected }}
    </p>
    <div class="options" v-if="areOptionsVisible">
      <p
        v-for="option in options"
        :key="option"
        @click="optionSelect(option), sort()"
      >
        {{ option.name }}
      </p>
      <img
        src="../assets/images/arrowOnDiv.png"
        alt="arrowOnDiv"
        class="arrow-on-div"
        width="9"
        height="18"
      />
    </div>
    <i class="arrow down" @click="areOptionsVisible = !areOptionsVisible"></i>
    <div class="mobile-search">
      <img
        src="../assets/images/sort-mob-icon.png"
        alt="sort-mob-icon.png"
        width="21"
        height="15"
        @click="areOptionsVisible = !areOptionsVisible"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "Select",
  data() {
    return {
      areOptionsVisible: false,
      selected: "Sort by",
      options: [
        { name: "age", value: "age" },
        { name: "mass", value: "mass" },
        { name: "height", value: "height" },
      ],
    };
  },
  methods: {
    hideSelect() {
      this.areOptionsVisible = false;
    },
    sort() {
      this.$store.dispatch("sortCuratedList", this.selected);
    },
    optionSelect(option) {
      this.selected = option.name;
    },
  },
  components: {},
};
</script>

<style lang="scss" scoped>
.v-select {
  position: relative;
  margin-right: 205px;
  cursor: pointer;
  .title {
    font-weight: normal;
    font-size: 14px;
    color: rgba(0, 0, 0, 0.8);
    margin: 0;
  }
  .arrow {
    border: solid black;
    border-width: 0 1px 1px 0px;
    display: inline-block;
    padding: 2px;
    position: absolute;
    right: 0;
    left: 55px;
    top: 5px;
  }
  .options {
    position: absolute;
    top: 30px;
    box-shadow: 0px 0px 32px rgba(0, 0, 0, 0.04);
    border-radius: 6px;
    right: -40px;
    width: 101px;
    height: 123px;
    background: #fff;
    z-index: 10;
    padding: 20px 60px 16px 13px;
    p {
      font-weight: 100;
      font-size: 14px;
      text-align: left;
      margin-bottom: 17px;
    }
    .arrow-on-div {
      position: absolute;
      top: -9px;
      left: 45px;
    }
  }
  .mobile-search {
    display: none;
  }
}
// mobile
@media only screen and (max-width: 375px) {
  .v-select {
    .mobile-search {
      display: block;
    }
    .title {
      display: none;
    }
    .arrow {
      display: none;
    }
  }
}
</style>
