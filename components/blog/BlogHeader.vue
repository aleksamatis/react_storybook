<template>
  <div class="wrap-blog-header">
    <div class="flex-blogheader-subtitle">
      <div class="blog-header-font">Форекс блог трейдеров</div>
      <div class="subscribe_button">
        <el-button disabled size="small">Подписаться на блог</el-button>
      </div>
      <img src="/img/search.svg" class="blog-icon-search-custom"/>
      <!-- <div class="forex_visiability_btn el-icon-search" /> -->
    </div>
    <div>
      <button class="manyfunctionalGreybtn defaul-tmanyfunctionalGreybtn disapear_manyfunctionakGreyBtn">
        For professionals
        <img src="img/More.png" class="absolute_more_sign">
      </button>
    </div>
    <div class="forex_visiability">
      <div class="blogheader-subtitle"> Форекс Блог трейдеров — это независимый источник полезной информации
        о финансовых рынках, заработке на форекс и криптовалюте.
        Авторы статей — практикующие трейдеры, экономические обозреватели и известные аналитики.
        Советы, стратегии, индикаторы, технические и фундаментальные анализы для успешной торговли онлайн.
        Все что нужно знать о валютном рынке в одном Forex блоге.
      </div>
      <div class="elements-topbar">
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
          <div class="position_hart"><nuxt-link to="favorites"><img src="/img/blogs-img/Hart.png"> 1</nuxt-link>
          </div>
        </div>
      </div>
    </div>
   </div>
</template>
<style lang="scss">
.wrap-blog-header {
  width:80%;
  margin: 0 auto; 
  margin-top:3%;
}
 @media (max-width: 500px) {
.wrap-blog-header {
  margin: 0 auto; 
  margin-top:3%;
  padding-right: 40px;
    }
  }

.flex-blogheader-subtitle{
  position: relative;
  margin-top:8%;
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
.blog-icon-search-custom {
  position: absolute;
  right: 0px;
  bottom: 0px;
  display:none;
}
 @media (max-width: 500px) {
  .blog-icon-search-custom {
  position: absolute;
  right: -24px;
  bottom: 26px;
  display: block;
}
}
.subscribe_button {
  vertical-align: center;
  margin-top:10px;
  // margin-left:20px;
}
@media (max-width: 600px) {
.subscribe_button {
  vertical-align: center;
  margin-top:10px;
  margin-bottom: 20px;
  // margin-left:20px;
}
}
.blogheader-subtitle {
  font-size:18px;
  color: #333333;
  margin-top:1.5%
}
  .blog-header {
    width: 85%;
    margin: 0 auto;
    font-weight: bold;
    margin-top: 3%;
  }
  .blog-header-font {
    font-size: 50px;
    margin-right: 20px;
  }
  .label-font-blogheader {
    font-size:15px;
    color: black;
    padding: 10px;
  }
  .elements-topbar {
    position:relative; 
    margin-top:6%;
  }
 .forex_visiability_btn {
    display: none;
  }
  @media (max-width: 500px) {
    .forex_visiability {
      display: none;
    }
  }
  @media (max-width: 500px) {
    .blog-header-font {
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
  .manyfunctionalGreybtn {
    display: inline-block;
    margin-bottom: 0;
    font-weight: bold;
    position:relative;
    text-transform: uppercase;
    text-align: center;
    vertical-align: middle;
    cursor: pointer;
    background-image: none;
    white-space: nowrap;
    padding-top: 7px;
    padding-bottom:7px;
    padding-left:25px;
    padding-right:35px;
    font-size: 14px;
    line-height: 1.42857143;
    border-radius: 4px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
  .defaul-tmanyfunctionalGreybtn {
    background: #EBEEF1;
    border: none;
    color: #858585;
  }
  .disapear_manyfunctionakGreyBtn {
      display: none;
    }
  @media (max-width: 600px) {
    .disapear_manyfunctionakGreyBtn {
      display: block;
    }
  }
  .absolute_more_sign {
    position: absolute;
    right: 10px
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
</style>
