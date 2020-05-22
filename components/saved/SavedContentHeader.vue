<template>
  <div class="wrap-blog-header-content-author">
    <div class="flex-blogheader-subtitle-content-author">
      <div class="blog-header-font-content-author">Форекс блог трейдеров</div>
      <div class="subscribe_button-content-author">
        <el-button disabled size="small">Подписаться на блог</el-button>
      </div>
      <img src="/img/search.svg" class="savedContent-icon-search-custom"/>
      <!-- <div class="forex_visiability_btn el-icon-search" /> -->
       </div>
      <div>
      <button class="manyfunctionalGreybtn-fav defaul-tmanyfunctionalGreybtn-fav disapear_manyfunctionakGreyBtn">
        Сохраненные статьи
        <img src="img/More.png" class="absolute_more_sign">
        <img src="img/sing_saved.png" class="absolute_more_sign-hard">
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
            <img src="/img/blogs-img/Flag.png" /> 2
          </div>
          <div class="position_hart">
            <nuxt-link to="favorites">
              <img src="/img/blogs-img/Hart.png" /> 1
            </nuxt-link>
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
    padding-left: 20px;
    margin-top: 3%;
  }
}
.flex-blogheader-subtitle-content-author {
  display: block;
  position: relative;
  margin-top: 0%;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
}
.position_flag {
  position: absolute;
  bottom: 20px;
  right: 10px;
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
  /* margin-left: 20px; */
}
@media (max-width: 700px) {
  .subscribe_button-content-author {
    vertical-align: center;
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
  .savedContent-icon-search-custom {
  position: absolute;
  right: 0px;
  bottom: 0px;
  display: none;
}
 @media (max-width: 600px) {
  .savedContent-icon-search-custom {
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
    margin-right: 0px;
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
  .disapear_manyfunctionakGreyBtn {
      display: none;
    }
  @media (max-width: 600px) {
    .disapear_manyfunctionakGreyBtn {
      display: block;
    }
  }


</style>