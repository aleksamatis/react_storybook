<template>
  <div class="copypartnerstory ">
    <div>
      <div v-for="(section, index) in content.sections" v-bind:key="index">
        <div class="copystory-partnership-title page-new-item" v-if="section.title">
          {{section.title}}
        </div>
        <div v-html="section.text" class="copycnt-flex-col page-new-item" v-if="section.text"></div>


        <div v-if="section.image" class="car-carrier-liteforex-picture-cars-relative">
          <div class="margin-to-cars-img">
            <img :src="section.image" class="carrier-liteforex-picture-cars" /> <img src="img/back.png" class="absolute-back-arrow-cars" />
          </div>
        </div>
        <!-- <div v-if="section.imageList">
          <el-carousel height="450px" :autoplay="false">
            <el-carousel-item v-for="(item, idx) in section.imageList" :key="idx">
              <img :src="item"/>
            </el-carousel-item>
          </el-carousel>
        </div> -->
        <div v-if="section.imageList">
          <flickity ref="flickity" :options="flickityOptions">
            <div v-for="(item, idx) in section.imageList" :key="idx" class="flickityContainer">
              <img :data-flickity-lazyload="item" class="flickityImage"/>

            </div>
          </flickity>
        </div>
        <div class="copy-imgsubutitle page-new-item" v-if="section.imageText">
          {{section.imageText}}
        </div>
        <!-- Quote -->
        <div class="position-relative-copypartner" v-if="section.quote">
          <div class="position-absolute-copypartner">
            <img src="/partnership/picture-quote.png">
          </div>
          <div class="quote cnt-copycitate-txt">
            <div>{{section.quote}}</div>
          </div>
        </div>
        <!-- Affiliations -->
        <div v-if="section.affiliates" class="copy-multiplatforms page-new-item">
          <div class="copy-multiplatforms-itembox " v-for="(affiliate, idx) in section.affiliates" v-bind:key="idx">
            <img :src="affiliate.flag" />
            <div class="multi-right">
              <div v-html="affiliate.name" align="left" class="font-color-carrierliteforex">{{affiliate.name}}</div>
              <div align="left" class="font-size-carrierliteforex">{{affiliate.amount}}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Flickity from '~/node_modules/vue-flickity/src/flickity';
  export default {
    components: {
      Flickity
    },

    props: ["content"]
    ,

    data() {
      return {
        flickityOptions: {
          initialIndex: 0,
          prevNextButtons: true,
          pageDots: false,
          wrapAround: true,
          adaptiveHeight: false,
          imagesLoaded: true,
          lazyLoad: true
          // any options from Flickity can be used
        }
      }
    },

  };
  
</script>
<style lang="scss">
  .flickityContainer {
    width: 100%;
    height: auto;
  }
  .flickityImage {
   width: 100%;
  }
  .copy-multiplatforms {
    box-sizing: border-box;
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-between;
    padding-top: 20px;
    padding-bottom: 20px;
    max-width: 700px;
    margin: auto;
    box-sizing: border-box;
  }
  .font-size-carrierliteforex{
    color:black;
    font-weight: bold;
    font-size:24px;
  }

  @media (max-width: 600px) {
    .copy-multiplatforms {
      box-sizing: border-box;
      display: flex;
      width: 100%;
      flex-wrap: wrap;
      flex-direction: column;
      align-items: center;
      padding-top: 20px;
      padding-bottom: 20px;
      max-width: 700px;
      margin: auto;
      box-sizing: border-box;

    }
  }

  .light-addiliate {
    font-size: 14px;
    font-weight: normal;
  }

  .copy-multiplatforms-itembox {
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .carrier-liteforex {
    width: 100%;
    margin-top: 5px
  }
  .carrier-liteforex-picture-cars {
    width: 100%;
    margin-top: 5px;
  }

  @media (max-width: 600px) {
    .copy-multiplatforms-itembox {
      box-sizing: border-box;
      display: flex;
      flex-direction: row;
      padding: 20px;
      align-items: center;
    }
  }

  .car-carrier-liteforex-picture-cars-relative {
    position: relative;
    width: 100%;
    margin-top: 5px;
  }
  .absolute-back-arrow-cars{
    position:absolute;
    top:45%;
    right:10%;
    display:none;
  }
  @media (max-width: 600px) {
  .absolute-back-arrow-cars{
    position:absolute;
    top:45%;
    right:10%;
    display:block;
  }
  }

  .font-color-carrierliteforex {
    font: size 16px;
    color: $gray-font-subtitle-color-partner;
  }

  .car-carrier-liteforex {
    position: relative;
    margin-top:15px;
    margin-bottom:5px;
  }
  .car-carrier-liteforex-picture-cars {
    width:100%;
    margin-top: 15px;
    margin-bottom: 5px;
  }

  .car-carrier-liteforex-btn {
    display: none;
  }

  @media (max-width: 600px) {
    .car-carrier-liteforex-btn {
      cursor: pointer;
      display: block;
      position: absolute;
      top: 40%;
      right: 30px;
    }
  }

  .car-carrier-main {
    display: none;
  }

   @media (max-width: 600px) {
    .car-carrier-main {
      cursor: pointer;
      display: block;
      position: absolute;
      top: 40%;
      left: 30px;
      ;
    }
  }

  .maqn {
    color: #ABABAB;
    font-size: 16px;
    line-height: 160%;
    margin-left: 10px;
  }

  @media (max-width: 600px) {
    .maqn {
    color: $gray-font-subtitle-color-partner;
    font-size: 14px;
    line-height: 160%;
  }
  }

   .multi-right {
    padding-left: 10px;
  }

  .multi-right-nigeria {
    padding-left: 10px;
  }

  @media (max-width: 600px) {
    .multi-right-nigeria {
    padding-left: 18px;
  }
  }
  .margin-to-cars-img {
    margin-left:0px;
    margin-right:0px;
  }
  @media (max-width: 600px) {
  .margin-to-cars-img {
    margin-left:20px;
    margin-right:20px;
  }
  }
  .mt-Malaysia {
    margin-top: 4%;
  }

  .copypartnerstory {
    max-width: 700px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    margin: auto;
  }

  .copycnt-flex-story {
    width: 100%;
    padding-top: 20px;
    padding-bottom: 20px;
  }

  .copycnt-flex-col {
    display: flex;
    font-size: 18px;
    line-height: 32px;
    color: $gray-font-color-desktop;
    flex-direction: column;
  }

  .car-carrier-liteforex-btnleft {
    display: none;
  }

    @media (max-width: 600px) {
    .car-carrier-liteforex-btnleft {
      cursor: pointer;
      display: block;
      position: absolute;
      top: 40%;
      left: 0px;
    }
  }
  
  .car-carrier-liteforex-btnright {
    display: none;
 }

     @media (max-width: 600px) {
    .car-carrier-liteforex-btnright {
      cursor: pointer;
      display: block;
      position: absolute;
      top: 40%;
      right: 0px;
    }
  }
  
  @media (max-width: 600px) {
    .copycnt-flex-col {
      display: flex;
      font-size: 17px;
      line-height: 27px;
      color: $gray-font-color-mobile;
      flex-direction: column;
    }
  }

  .copystory-partnership-title {
    font-size: 36px;
    padding-top: 6%;
    padding-bottom: 3%;
    font-weight: bold;
    color: #000000;
  }

  @media (max-width: 600px) {
    .copystory-partnership-title {
      font-size: 24px;
      padding-bottom: 7%;
      font-weight: bold;
      color: #000000;
    }
  }

  .copy-imgsubutitle {
    color: $gray-font-subtitle-color-partner;
    text-align: center;
    font-size: 12px;
    line-height: 120%;
  }

  .quote {
    background: rgba(167, 204, 246, 0.5);
    border-radius: 2px;
    width: 100%;
    min-height: 40px;
    font-size: 24px;
    line-height: 120%;
    box-sizing: border-box;
    font-style: italic;
    font-weight: bold;
    color: #000000;
    padding-right: 30px;
    padding-top: 30px;
    padding-bottom: 30px;
    padding-left: 50px;
  }
  @media (max-width: 600px) {
   .quote {
    background: rgba(167, 204, 246, 0.5);
    border-radius: 2px;
    width: 100%;
    min-height: 40px;
    font-size: 18px;
    line-height: 120%;
    box-sizing: border-box;
    font-style: italic;
    font-weight: bold;
    color: #000000;
    padding-right: 30px;
    padding-top: 30px;
    padding-bottom: 30px;
    padding-left: 50px;
  }
  }

  .cnt-copycitate-txt {
    display: flex;
    justify-content: left;
    align-items: center;
  }

  .cnt-copycitate-txt-affiliate {
    display: flex;
    // justify-content: center;
    align-items: center;
  }

  .position-relative-copypartner {
    position: relative;
  }

  .position-absolute-copypartner {
    display: inline;
    position: absolute;
    top: 28px;
    left: 26px
  }

  .font-addiliate {
    font-weight: normal;
    font-size: 18px;
    line-height: 32px;
    color: black;
  }

  @media (max-width: 600px) {
    .font-addiliate {
    font-weight: normal;
    font-size: 14px;
    line-height: 32px;
     color: $gray-font-color-mobile;
  }
  }

  .addiliate {
    font-weight: bold;
    font-size: 17px;
    line-height: 160%;
    color: black;
  }

  .monday-addiliate {
    font-size: 14px;
     color: $gray-font-color-mobile;
    font-weight: normal;
  }

  .el-carousel__arrow {
    width: 64px;
    height: 64px;
    font-size: 32px;
  }
</style>
