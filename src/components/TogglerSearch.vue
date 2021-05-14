<template>
  <div class="options-block">
    <div class="options-block-parameters">
      <SelectEye />

      <div class="select-height">
        <p
          class="title-hight"
          @click="areOptionsVisibleHeight = !areOptionsVisibleHeight"
        >
          {{ height.title }}

          <i class="arrow down"></i>
        </p>
        <div class="options-height" v-if="areOptionsVisibleHeight">
          <div class="range-slider">
            <div class="container-range">
              <div class="range-values">
                <p>{{ height.min }}</p>
              </div>
              <div class="range-values">
                <p>{{ height.max }}</p>
              </div>
            </div>
            <div class="container-input">
              <strong>{{ height.min }} см</strong>
              <input
                type="range"
                min="96"
                max="202"
                v-model.number="height.min"
                @change="filterHeight"
              />
              <strong>{{ height.max }} см</strong>
              <input
                type="range"
                min="96"
                max="202"
                v-model.number="height.max"
                @change="filterHeight"
              />
            </div>
          </div>
          <img
            src="../assets/images/arrowOnDiv.png"
            alt="arrowOnDiv"
            class="arrow-on-div"
            width="9"
            height="18"
          />
        </div>
      </div>

      <div class="select-age">
        <p
          class="title-age"
          @click="areOptionsVisibleAge = !areOptionsVisibleAge"
        >
          {{ age.title }}

          <i class="arrow down"></i>
        </p>
        <div class="options-age" v-if="areOptionsVisibleAge">
          <div class="range-slider">
            <div class="container-range">
              <div class="range-values">
                <p>{{ age.min }}</p>
              </div>
              <div class="range-values">
                <p>{{ age.max }}</p>
              </div>
            </div>
            <div class="container-input">
              <strong>{{ age.min }} BBY</strong>
              <input
                type="range"
                min="19"
                max="112"
                v-model.number="age.min"
                @change="filterAge"
              />
              <strong>{{ age.max }} BBY</strong>
              <input
                type="range"
                min="19"
                max="112"
                v-model.number="age.max"
                @change="filterAge"
              />
            </div>
          </div>
          <img
            src="../assets/images/arrowOnDiv.png"
            alt="arrowOnDiv"
            class="arrow-on-div"
            width="9"
            height="18"
          />
        </div>
      </div>
    </div>
    <SelectSort />
  </div>
</template>

<script>
import SelectEye from "./SelectEye.vue";
import SelectSort from "./SelectSort.vue";

export default {
  data() {
    return {
      select: "",
      selectSort: "",
      height: {
        title: "Height",
        min: 96,
        max: 202,
      },
      age: {
        title: "Age",
        min: 12,
        max: 112,
      },
      areOptionsVisible: false,
      areOptionsVisibleHeight: false,
      areOptionsVisibleAge: false,
    };
  },
  methods: {
    filterHeight() {
      this.$store.dispatch("updateCuratedListHeight", this.height);
    },
    filterAge() {
      this.$store.dispatch("updateCuratedListAge", this.age);
    },
  },
  components: {
    SelectEye,
    SelectSort,
  },
};
</script>

<style lang="scss" scoped>
.options-block {
  display: flex;
  text-align: left;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: 35px;
  &-parameters {
    display: flex;
    align-items: center;
    align-items: baseline;
    .arrow {
      border: solid black;
      border-width: 0 1px 1px 0px;
      display: inline-block;
      padding: 2px;
      margin-right: 30px;
      margin-bottom: 3px;
      margin-left: 11px;
    }
    .select p {
      margin: 0;
      padding-bottom: 8px;
      padding-top: 15px;
    }
    .options {
      position: absolute;
      top: 50px;
      right: 0;
      width: 100%;
      background-color: white;
      box-shadow: 0px 0px 32px rgba(0, 0, 0, 0.04);
      border-radius: 6px;
    }
    .options p:hover {
      background: #e7e7e7;
    }

    .select-height {
      position: relative;
      border-radius: 6px;
      cursor: pointer;

      .title-height {
        font-size: 14px;
        color: rgba(0, 0, 0, 0.8);
        text-align: left;
      }
    }
    .select-height p {
      font-size: 14px;
    }
    .options-height {
      position: absolute;
      top: 30px;
      right: -55px;
      width: 249px;
      height: 132px;
      background-color: white;
      box-shadow: 0px 0px 32px rgba(0, 0, 0, 0.04);
      border-radius: 6px;
      padding: 20px;
      .arrow-on-div {
        position: absolute;
        top: -9px;
        left: 120px;
      }
    }

    .container-range {
      display: flex;
      justify-content: center;
      margin-bottom: 25px;

      .range-values {
        height: 42px;
        width: 100px;
        border-radius: 6px;
        text-align: center;
        border: 1px solid rgba(0, 0, 0, 0.08);
        p {
          text-align: left;
          padding-top: 8px;
          padding-left: 14px;
        }
      }
      .range-values:first-child {
        margin-right: 10px;
      }
    }

    .select-age {
      position: relative;
      border-radius: 6px;
      cursor: pointer;

      .title-age {
        font-size: 14px;
        color: rgba(0, 0, 0, 0.8);
      }
    }
    .select-age p {
      margin: 0;
      padding-bottom: 14px;
      font-size: 14px;
    }
    .options-age {
      position: absolute;
      right: -68px;
      height: 132px;
      background-color: white;
      box-shadow: 0px 0px 32px rgba(0, 0, 0, 0.04);
      border-radius: 6px;
      padding: 20px;
      .arrow-on-div {
        position: absolute;
        top: -9px;
        left: 120px;
      }
    }

    .range-slider {
      margin: auto;
      text-align: center;
    }
    .range-slider svg,
    .range-slider input[type="range"] {
      position: absolute;
      left: 15px;
      bottom: 0;
      width: 85%;
      margin-bottom: 23px;
    }

    input[type="range"]::-webkit-slider-thumb {
      z-index: 2;
      position: relative;
      margin-top: -7px;
      border-radius: 50%;
      width: 5px;
      height: 5px;
    }
    input[type="range"]::-webkit-slider-runnable-track {
      background: #ff634a;
      height: 2px;
    }
    .container-input {
      display: flex;
      justify-content: space-between;
      margin: 0 auto;
    }
    .container-input strong {
      position: relative;
      bottom: 10px;
      font-size: 14px;
      font-weight: normal;
    }
  }
  &-parameters span {
    padding-right: 40px;
  }
  .options-sort {
    margin-right: 160px;
    .title-sort {
      font-size: 14px;
      display: contents;
    }

    img {
      display: none;
    }
  }
}
.select {
  border: none;
  outline: none;
  font-size: 14px;

  .option {
    border: none;
    outline: none;
  }
}
select:first-child {
  margin-right: 40px;
}

@media only screen and (max-width: 670px) {
  .options-block {
    text-align: left;
    align-items: baseline;
  }
}
// mobile
@media only screen and (max-width: 375px) {
  .options-block {
    align-items: baseline;
    margin-bottom: 10px;
    justify-content: space-between;
    width: 93%;
    &-parameters {
      .select-height {
        p {
          display: flex;
          align-items: center;
        }
      }
      .select-age {
        margin-right: 20px;
        .title-age {
          display: flex;
          align-items: center;
        }
      }
      .arrow {
        margin-right: 24px;
      }
    }
    .options-sort {
      margin-right: 0;
      margin-left: 70px;
      .select {
        display: none;
      }
    }
  }
  select {
    margin-right: 25px !important;
  }
}
</style>