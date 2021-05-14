<template>
  <div class="v-select">
    <p class="title" @click="areOptionsVisible = !areOptionsVisible">
      {{ selected }}
    </p>
    <div class="options" v-if="areOptionsVisible">
      <p
        v-for="option in options"
        :key="option"
        @click="optionSelect(option), search()"
      >
        {{ option.name }}
      </p>
      <img
        src="../assets/images/arrowOnDiv.png"
        alt="arrowOnDiv"
        class="arrow-on-div"
        width="9"
        height="18px"
      />
    </div>
    <i class="arrow down" @click="areOptionsVisible = !areOptionsVisible"></i>
  </div>
</template>

<script>
export default {
  name: "Select",
  data() {
    return {
      areOptionsVisible: false,
      selected: "Eye color",
      options: [
        { name: "blue", value: "blue" },
        { name: "blue-gray", value: "blue-gray" },
        { name: "brown", value: "brown" },
        { name: "red", value: "red" },
        { name: "yellow", value: "yellow" },
      ],
    };
  },
  methods: {
    search() {
      this.$store.dispatch("updateCuratedList", this.selected);
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
  width: 100px;
  cursor: pointer;
  margin-right: 18px;
  .title {
    font-weight: normal;
    font-size: 14px;
    color: rgba(0, 0, 0, 0.8);
    margin: 0;
    line-height: 104%;
  }
  .arrow {
    border: solid black;
    border-width: 0 1px 1px 0px;
    display: inline-block;
    padding: 2px;
    position: absolute;
    right: 20px;
    top: 3px;
  }
  .options {
    position: absolute;
    top: 35px;
    right: 15px;
    box-shadow: 0px 0px 32px rgba(0, 0, 0, 0.04);
    border-radius: 6px;
    height: 185px;
    width: 101px;
    background: #fff;
    z-index: 100;
    padding: 12px 15px 15px 20px;
    p {
      font-weight: 100;
      font-size: 14px;
      text-align: left;
      margin-bottom: 18px;
    }
    .arrow-on-div {
      position: absolute;
      top: -9px;
      left: 45px;
    }
  }
}
</style>
