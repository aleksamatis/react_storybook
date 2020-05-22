<template>
  <div>
    <div class="section_One visible_full_Menu">
      <div class="flex_Menu">
        <nuxt-link class="header-link" to="/">
          <div class="picture_Logo"></div>
        </nuxt-link>
        <div class="flex_Menu_Div">
          <div class="flex_Menu_Right">
            <nuxt-link class="header-link" to="/">About us</nuxt-link>
          </div>
          <div class="flex_Menu_Right">For Traders</div>
          <div class="flex_Menu_Right">
            <nuxt-link class="header-link" to="/trade">Social Trading</nuxt-link>
          </div>
          <div class="flex_Menu_Right">Promotions</div>
          <div class="flex_Menu_Right">
            <nuxt-link class="header-link" to="/partnership">Partnership</nuxt-link>
          </div>
          <div class="flex_Menu_Right0">
            <nuxt-link class="header-link" to="/blog">Blog</nuxt-link>
          </div>
          <!-- <div class="flex_Menu_Right">
            <nuxt-link class="header-link" to="/blog2"> | Blog2</nuxt-link>
          </div> -->
        </div>
        <div class="flex_Menu">
          <button class="header-btnBlue btn-defaultBlue">Open account</button>
          <button class="header-btnWhite header-btn-defaultWhite">Sign in</button>
          <el-dropdown>
            <span class="el-dropdown-link">
              <el-image class="language-flag" :src="selectedLanguage.icon" />
              {{selectedLanguage.label}} <i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item v-for="lang in languages" v-bind:key="lang.label">
                <el-image class="language-flag" :src="lang.icon" /> {{lang.label}}
              </el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </div>
    </div>
    <div class="section1 section_One visible_Menu">
      <div class="flex_Menu_Mobile">
        <div class="picture_Logo"></div>
        <el-dropdown trigger="click">
          <span class="el-dropdown-link">
            <div class="burger_Menu"></div>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>
              <nuxt-link class="header-link" to="/">About us</nuxt-link>
            </el-dropdown-item>
            <el-dropdown-item>
              <nuxt-link class="header-link" to="/partnership">Partnership</nuxt-link>
            </el-dropdown-item>
            <el-dropdown-item>
              <nuxt-link class="header-link" to="/blog">Blog</nuxt-link>
            </el-dropdown-item>
            <el-dropdown-item>
              <nuxt-link class="header-link" to="/trade">Social Trading</nuxt-link>
            </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data: function () {
      const data = {
        languages: [{
            label: "Ru",
            icon: "/img/icon_russia.png",
          },
          {
            label: "En",
            icon: "/img/icon_russia.png",
          },
        ]
      };
      data.selectedLanguage = data.languages[0];
      return data;
    },
  }

</script>

<style lang="scss">
  @media (max-width: 600px) {
    .visible_full_Menu {
      display: none;
    }
  }

  .section_One {
    background-color: white;
    padding-top: 19px;
    padding-bottom: 19px;
    border-bottom: 1px solid #E6E9ED;
  }
  @media (max-width: 600px) {
  .section_One {
    background-color: white;
    padding-top: 3px;
    padding-bottom: 0px;
    border-bottom: 1px solid #E6E9ED;
  }
  }
  .flex_Menu {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    margin-left: 50px;
    margin-right: 25px;
  }

  .flex_Menu_Right {
    margin-right: 50px;
    cursor: pointer;
  }

  .flex_Menu_Bottom {
    margin-right: 10px;
  }

  .flex_Menu_Mobile {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  @media (max-width: 600px) {
  .flex_Menu_Mobile {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  }

  .picture_Logo {
    background-image: url(/img/logo_full.png);
    background-size: contain;
    background-repeat: no-repeat;
    width: 166px;
    height: 49px;
  }  
  @media (max-width: 600px) {
  .picture_Logo {
    background-image: url(/img/logo_full.png);
    background-size: contain;
    background-repeat: no-repeat;
    width: 120px;
    height: 49px;
    margin-left:5%;
    margin-top: 2%;
  }
  }

  .picture_Icon_Op_Menu {
    background-image: url(/img/icon_open_menu.svg);
    background-size: contain;
    background-repeat: no-repeat;
    width: 11px;
    height: 7px;
    margin-right: 10px;
  }
  .menu_Disabled {
    margin-right: 10px;
  }

  .flex_Menu_Div {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    color: #666666;
    font-size: 15px;
    margin-left: auto;
  }

  .main-menu {
    margin: 0;
    padding: 0;
    list-style: none;
    border: 1px solid #e5e5e5;
  }

  .main-menu>li {
    position: relative;
    display: inline-block;
    margin-right: -4px;
  }

  .main-menu a {
    display: block;
    margin-left: -1px;
    padding: 8px 10px;
    color: #0088cc;
    border-left: 1px solid #e5e5e5;
  }

  .main-menu a:hover {
    background-color: #f5f5f5;
  }

  .main-menu .sub-menu {
    position: absolute;
    width: 38px;
    display: none;
    margin: 0;
    padding: 0;
    list-style: none;
    background-color: #fcf8e3;
  }

  .main-menu .sub-menu a {
    margin-bottom: -1px;
    border: 1px solid #e5e5e5;
  }

  .main-menu>li:hover .sub-menu {
    display: block;
  }

  .visible_Menu {
    display: none;
  }

  @media (max-width: 600px) {
    .visible_Menu {
      display: block;
    }
  }

  @media (max-width: 1000px) {
    .flex_Menu_Div {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      align-items: center;
      margin-left: 0;
      font-size: 15px;
      color: #666666;
      padding-top: 10px;
      padding-bottom: 10px;

    }
  }

  .burger_Menu {
    background-image: url(/img/burger_menu.svg);
    background-size: contain;
    background-repeat: no-repeat;
    width: 40px;
    height: 40px;
    cursor: pointer;
  }
  @media (max-width: 600px) {
  .burger_Menu {
    background-image: url(/img/burger_menu.svg);
    background-size: contain;
    background-repeat: no-repeat;
    width: 40px;
    height: 40px;
    cursor: pointer;
    margin-right: 17px;
    margin-bottom: 3px;
  }
  }

  .header-btnBlue {
    display: inline-block;
    margin-bottom: 0;
    margin-right: 10px;
    font-weight: 500;
    text-align: center;
    vertical-align: middle;
    cursor: pointer;
    background-image: none;
    white-space: nowrap;
    padding: 10px 32px;
    font-size: 15px;
    border-radius: 50px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  @media (max-width: 500px) {
    .header-btnWhite {
      display: inline-block;
      margin-bottom: 0;
      font-weight: 400;
      text-align: center;
      vertical-align: middle;
      cursor: pointer;
      background-image: none;
      white-space: nowrap;
      padding: 16px 60px;
      font-size: 15px;
      line-height: 1.42857143;
      border-radius: 50px;
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
      text-align: center;
    }
  }

  @media (max-width: 500px) {
    .header-btn-defaultWhite {
      color: #333;
      background-color: white;
      border: 1px solid #007fd8;
      color: #007fd8;
      text-align: center;
    }
  }

  .header-btnWhite {
    display: inline-block;
    margin-bottom: 0;
    margin-right: 30px;
    font-weight: 400;
    text-align: center;
    vertical-align: middle;
    cursor: pointer;
    background-image: none;
    white-space: nowrap;
    padding: 10px 32px;
    font-size: 15px;
    border-radius: 50px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  .header-btn-defaultWhite {
    color: #333;
    background-color: white;
    border: 1px solid #007fd8;
    color: #007fd8;
  }
  .header-btn-defaultWhite:hover {
    color: #333;
    background-color: white;
    border: 1px solid #2199EE;
    color: #007fd8;
  }
  .header-btn-defaultWhite:active {
    color: #333;
    background-color: white;
    border: 1px solid #007FD8;
    color: #006CB8;
  }
 .language-flag {
    height: 1em;
    width: 1em;
    margin-right: 10px;
  }
  @media (max-width: 1000px) {
    .flex_Menu-padding {
      padding-bottom: 0px;
      border: 2px solid black;
    }
  }
  .el-dropdown-link {
    cursor: pointer;
  }

</style>
