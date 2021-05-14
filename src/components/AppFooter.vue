<template>
  <footer class="footer">
    <div class="footer-container">
      <div class="top-block">
        <a href="#">
          <img
            src="../assets/images/StarWars.png"
            alt="StarWars.jpg"
            width="135"
            height="40"
            class="logo-footer"
          />
        </a>
        <div class="social-icons">
          <a href="#"
            ><img
              src="../assets/images/fb.png"
              alt="facebook"
              width="40"
              height="40"
          /></a>
          <a href="#"
            ><img
              src="../assets/images/insta.png"
              alt="insta"
              width="40"
              height="40"
          /></a>
        </div>
      </div>
      <div class="bottom-block">
        <h2>All rights Reserved.</h2>
        <p><a href="#">Privacy Policy</a></p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.footer {
  background: #f2eeee;
  &-container {
    padding: 44px 104px 20px 104px;
    display: flex;
    flex-direction: column;
    max-width: 1440px;
    margin: 0 auto;
    .top-block {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      a .logo-footer {
        width: 86px;
        height: 25px;
      }
      .social-icons {
        a:first-child {
          margin-right: 15px;
        }
      }
    }
    .bottom-block {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      margin-top: 60px;
      h2 {
        font-size: 14px;
      }
      p a {
        font-size: 14px;
        color: black;
      }
    }
  }
}

@media only screen and (min-width: 768px) and (max-width: 1024px) {
}
// mobile
@media only screen and (max-width: 375px) {
  .footer-container {
    padding: 32px 15px 25px 15px;
    .top-block {
      flex-direction: column;
      .social-icons {
        margin-top: 25px;
      }
    }
  }
}
</style>
