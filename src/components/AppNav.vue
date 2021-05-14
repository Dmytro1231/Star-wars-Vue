<template>
  <div class="nav">
    <nav class="nav-container">
      <a href="#" class="logo">
        <img
          src="../assets/images/StarWars.png"
          alt="StarWars.jpg"
          width="105"
          height="30"
        />
      </a>

      <div class="nav-item">
        <select class="select-lang">
          <option value="EN">En</option>
          <option value="RU">Ru</option>
        </select>
        <a href="#" class="hide">Log in</a>
        <button class="btn">Sign up</button>
        <img
          src="../assets/images/burger.png"
          width="24"
          height="10"
          alt="burger"
          class="burger"
        />
      </div>
    </nav>
  </div>
</template>

<style lang="scss" scoped>
.nav {
  background: #f2eeee;

  &-container {
    max-width: 1440px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 0 17px;
    flex-wrap: wrap;

    .logo {
      margin-left: 90px;
    }
  }
}
.nav-item {
  margin-right: 114px;
  font-size: 14px;

  .select-lang {
    border: none;
    outline: none;
    background: transparent;
    margin-right: 55px;
  }
  a {
    color: black;
    margin-right: 45px;
  }
  .btn {
    cursor: pointer;
    border: none;
    outline: none;
    color: black;
    border-radius: 6px;
    padding: 16px 56px;
    background: #ff634a;
    color: #fff;
    font-size: 14px;
  }
  .burger {
    display: none;
  }
}
@media only screen and (max-width: 670px) {
  .nav-container {
    justify-content: center;
    .logo {
      margin-bottom: 10px;
    }
    .nav-item {
      margin-right: 0;
    }
  }
}
// mobile
@media only screen and (max-width: 375px) {
  .nav {
    background: #fff;
    height: 100px;
  }
  .nav-container {
    padding: 15px 15px 60px 15px;
    justify-content: space-between;
    a img {
      width: 82px;
      height: 24px;
    }
    .nav-item {
      margin-right: 0;
      margin-bottom: 8px;
      .select-lang {
        display: none;
      }
      .btn {
        background: #fff;
        color: black;
        margin-right: 80px;
        padding: 0;
      }
      .burger {
        display: block;
        position: absolute;
        right: 22px;
        top: 25px;
      }
    }
    .logo {
      padding-left: 0;
      margin-left: 0;
    }
    svg {
      width: 84px;
      height: 32px;
    }
    span {
      display: none;
    }
    .hide {
      display: none;
    }
    .danger {
      margin-right: 38px;
    }
  }
}
</style>
