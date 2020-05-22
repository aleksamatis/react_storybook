<template>
  <div class="wrap-blog-header-content-author">
    <div class="flex-blogheader-subtitle-content-author">
      <div class="blog-header-font-content-author">Форекс блог трейдеров</div>
      <div class="subscribe_button-content-author">
        <el-button disabled size="small">Подписаться на блог</el-button>
      </div>
      <img src="/img/search.svg" class="favoritesContent-icon-search-custom" />
      <!-- <div class="forex_visiability_btn el-icon-search" /> -->
    </div>
    <div>
      <button class="manyfunctionalGreybtn-fav defaul-tmanyfunctionalGreybtn-fav disapear_manyfunctionakGreyBtn">
        Любимые авторы
        <img src="img/More.png" class="absolute_more_sign">
        <img src="img/hard_favorites.png" class="absolute_more_sign-hard">
      </button>
    </div>
    <div class="forex_visiability-author">
      <div class="bc-elements-topbar-author">
        <el-tabs value="all">
          <el-tab-pane name="all">
            <span slot="label" class="label-font-blogheader">All Posts</span>
          </el-tab-pane>
          <el-tab-pane name="opinions">
            <span slot="label" class="label-font-blogheader">Anylysts' opinion</span>
          </el-tab-pane>
          <el-tab-pane name="beginners">
            <span slot="label" class="label-font-blogheader">For beginners</span>
          </el-tab-pane>
          <el-tab-pane name="professionals">
            <span slot="label" class="label-font-blogheader">For professionals</span>
          </el-tab-pane>
          <el-tab-pane name="investors">
            <span slot="label" class="label-font-blogheader">For investors</span>
          </el-tab-pane>
          <el-tab-pane name="chatty">
            <span slot="label" class="label-font-blogheader">Chatty Forex</span>
          </el-tab-pane>
        </el-tabs>
        <div class="forex_visiability_light_author">
          <div class="position_flag">
            <nuxt-link to="saved"><img src="/img/blogs-img/Flag.png"> 2 </nuxt-link>
          </div>
          <div class="position_hart">
            <nuxt-link to="favorites"><img src="/img/blogs-img/Hart.png"> 1 </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<style>
  .wrap-blog-header-content-author {
    width: 80%;
    margin: 0 auto;
    margin-top: 3%;
  }

  @media (max-width: 700px) {
    .wrap-blog-header-content-author {
      width: 91%;
      margin: 0 auto;
      margin-top: 3%;
    }
  }

  .flex-blogheader-subtitle-content-author {
    position: relative;
    display: block;
    margin-top: 0%;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
  }

  @media (max-width: 700px) {
    .flex-blogheader-subtitle-content-author {
      position: relative;
      display: block;
      margin-top: 0%;
      display: flex;
      align-items: center;
      flex-wrap: wrap;
    }
  }

  .position_flag {
    position: absolute;
    bottom: 20px;
    right:
      10px;
    cursor: pointer;
  }

  .position_hart {
    position: absolute;
    bottom: 20px;
    right: 50px;
    cursor: pointer;
  }

  .subscribe_button-content-author {
    vertical-align: center;
    /* margin-left:20px; */
  }

  @media (max-width: 700px) {
    .subscribe_button-content-author {
      vertical-align: center;
      margin-top: 3%;
      margin-bottom: 20px;
      margin-left: 0px;
    }
  }

  .blog-header {
    width: 85%;
    margin: 0 auto;
    font-weight: bold;
    margin-top: 3%;
  }

  .blog-header-fon-content {
    font-size: 50px;
  }

  .label-font-blogheader {
    font-size: 15px;
    color: black;
    padding: 10px;
  }

  .bc-elements-topbar-author {
    position: relative;
    margin-top: 2%;
  }

  .favoritesContent-icon-search-custom {
    position: absolute;
    right: 0px;
    bottom: 0px;
    display: none;
  }

  @media (max-width: 600px) {
    .favoritesContent-icon-search-custom {
      position: absolute;
      right: 8px;
      bottom: 0px;
      display: block;
    }
  }

  .forex_visiability_btn {
    display: none;
  }

  @media (max-width: 700px) {
    .forex_visiability-author {
      display: none;
    }
  }

  .blog-header-font-content-author {
    margin-right: 20px;
    font-size: 24px;
    font-weight: bold;
  }

  @media (max-width: 500px) {
    .blog-header-font-content-author {
      margin-right: 20px;
      font-size: 24px;
      font-weight: bold;
    }
  }

  @media (max-width: 500px) {
    .forex_visiability_btn {
      display: block;
    }
  }

  @media (max-width: 1300px) {
    .forex_visiability_light_author {
      display: none;
    }
  }

  .manyfunctionalGreybtn-fav {
    display: inline-block;
    margin-bottom: 0;
    font-weight: bold;
    position: relative;
    text-transform: uppercase;
    text-align: center;
    vertical-align: middle;
    cursor: pointer;
    background-image: none;
    white-space: nowrap;
    padding-top: 7px;
    padding-bottom: 7px;
    padding-left: 35px;
    padding-right: 35px;
    font-size: 14px;
    line-height: 1.42857143;
    border-radius: 4px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  .defaul-tmanyfunctionalGreybtn-fav {
    background: #EBEEF1;
    border: none;
    color: #858585;
  }

  .absolute_more_sign-hard {
    position: absolute;
    left: 10px;
    top: 10px;
  }
    .disapear_manyfunctionakGreyBtn {
      display: none;
    }
  @media (max-width: 600px) {
    .disapear_manyfunctionakGreyBtn {
      display: block;
    }
  }

</style>
