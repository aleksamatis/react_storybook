<template>
  <div class="wrap-blog-header-content">
    <div class="flex-blogheader-subtitle-content">
      <div class="blog-header-font-content">Форекс блог трейдеров</div>
      <div class="subscribe_button-content" style="border:10px solid redp">
        <el-button disabled size="small">Подписаться на блог</el-button>
      </div>
      <img src="/img/search.svg" style="position: absolute; right: 0px; bottom: 0px"/>
      <!-- <div class="forex_visiability_btn el-icon-search" /> -->
    </div>
    <div class="forex_visiability">
      <div class="bc-elements-topbar">
        <el-tabs value="all">
          <el-tab-pane name="all">
             <span slot="label" class="label-font-blogheader">All Posts</span>
          </el-tab-pane>
            <el-tab-pane name="opinions">
             <span slot="label"  class="label-font-blogheader">Anylysts' opinion</span>
          </el-tab-pane>
            <el-tab-pane name="beginners">
             <span slot="label"  class="label-font-blogheader">For beginners</span>
          </el-tab-pane>
            <el-tab-pane name="professionals">
             <span slot="label"  class="label-font-blogheader">For professionals</span>
          </el-tab-pane>
            <el-tab-pane name="investors">
             <span slot="label"  class="label-font-blogheader">For investors</span>
          </el-tab-pane>
            <el-tab-pane name="chatty">
             <span slot="label"  class="label-font-blogheader">Chatty Forex</span>
          </el-tab-pane>
       </el-tabs>
        <div class="forex_visiability_light">
          <div class="position_flag"><nuxt-link to="saved"><img src="/img/blogs-img/Flag.png"> 2 </nuxt-link>
          </div>
          <div class="position_hart"><nuxt-link to="favorites"><img src="/img/blogs-img/Hart.png"> 1 </nuxt-link>
          </div>
        </div>
      </div>
    </div>
   </div>
</template>
<style lang="scss" scoped>
.wrap-blog-header-content {
  width:80%;
  margin: 0 auto; 
  margin-top:3%;
}
 @media (max-width: 600px) {
.wrap-blog-header-content {
  display: none;
     }
  }
.flex-blogheader-subtitle-content{
  position: relative;
  margin-top:0%;
  display: flex; 
  align-items: center;
  flex-wrap:wrap;
}
.position_flag {
  position:absolute;
  bottom:20px; right: 
  10px; cursor: pointer;
}
.position_hart {
  position:absolute; 
  bottom:20px; 
  right: 50px; 
  cursor: pointer;
}
.subscribe_button-content {
  vertical-align: center;
  // margin-left:20px;
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
    font-size:15px;
    color: black;
    padding: 10px;
  }
  .bc-elements-topbar {
    position:relative; 
    margin-top:2%;
  }
 .forex_visiability_btn {
    display: none;
  }
  @media (max-width: 500px) {
    .forex_visiability {
      display: none;
    }
  }
  .blog-header-font-content {
    font-size: 24px;
    font-weight: bold;
    margin-right: 20px;
  }
  @media (max-width: 500px) {
    .blog-header-font-content {
      font-size: 24px;
      font-weight: bold;
      margin-right: 0px;
    }
  }
  @media (max-width: 500px) {
    .forex_visiability_btn {
      display: block;
    }
  }
  @media (max-width: 1300px) {
    .forex_visiability_light {
      display: none;
    }
  }
</style>
