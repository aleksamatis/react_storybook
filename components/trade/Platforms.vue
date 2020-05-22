<template>
<div class="margin-platforms">
<div class="page-fixed-item">
  <div class="trade-heading">Устанавливай сам размер свого заработка и получай дополнительную прибыль</div>
  <div class="platform_subtitle">Чем больше трейдеров копирует вашу торговлю - тем большую сумму вы получаете</div>
</div>
<div class="manBlue">
    <div class="graphic_wrap_width">
    
      <div class="relative_position_platform">
        <!--График -->
        <div>
        <div>
        <div class="platforms-visiable-graph_1"> <img src="/img/img_graph_2.svg" class="graphic_Width_1"/> </div>
        <div class="platforms-visiable-graph"> <img src="/img/img_graph_22.svg" class="graphic_Width_2"/> </div>
        <div class="position_absolute_wrap">
          <div class="position_label">
            <div class="graph-label">1 год</div>
          </div>
          <div class="position-absolute-85">
            <div class="graph-label">3 года</div>
          </div>
          <div class="position-absolute-30">
            <div class="graph-label">5 лет</div>
          </div>
        </div>
        </div>
        <div class="position_absolute_top">
          <div class="flex_absolute">
            <div class="width_scroll">
              <!--One-->
              <div class="block">
                <div class="scroll_above"><span class="platforms-demonstration">Количество копирующих</span><span class="platforms-font-weight">0</span></div>
                <div class="platform-width">
                  <el-slider v-model="value1"></el-slider>
                </div>
                <!--End One-->
                <!--Two-->
              </div>
               <div class="block">
                <div class="scroll_above"><span class="platforms-demonstration">Депозит</span><span class="platforms-font-weight">2 000 USD</span></div>
                <div class="platform-width">
                  <el-slider v-model="value2"></el-slider>
                </div>
                <!--End Two-->
                <!--Free-->
              </div>
              <div class="block">
                <div class="scroll_above"><span class="platforms-demonstration">Твоя комиссия?</span><span class="platforms-font-weight">30%</span></div>
                <div class="platform-width">
                  <el-slider v-model="value3"></el-slider>
                </div>
                <!--End Free-->
              </div>
            </div>
            <div class="right_scroll position_absolute_top_2">
              <ul class="lists_platform">
                <div class="platform-flex"> <div><img src="/img/Ellipse_1.svg"></div><div  class="platforms-font">Прибыль при обычной торговле</div></div>
                <div class="text_platform_profit_size"> 8 000 - 12 000 USD</div>
                 <div class="platform-flex"> <div><img src="/img/Ellipse_2.svg"></div><div  class="platforms-font">Прибыль при обычной торговле</div></div>
                <div class="text_platform_profit_size"> 12 000 - 16 000 USD</div>
              </ul>
            </div>
            </div>
          </div>
        </div>
      </div>
      <div class="dateplatforms">Данные основаны на
            среднестатической торговле прибыльный трейдеров за последний год</div>
      <div class="visible_BtmWhiteDou btn-platforms"> 
      <button class="pp-btnWhite pp-btn-defaultWhite textTransform btn-top-margin">Подробнее</button>
      </div>
    </div>
  </div>
  </div>
</template>


<script>
  export default {
    data() {
      return {
        value1: 0,
        value2: 50,
        value3: 36,
      }
    },
    methods: {
      formatTooltip(val) {
        return val / 100;
      }
    }
  }

</script>

<style lang="scss">
  .graphic_wrap_width {
    width: 60.88%;
    margin-top: 0px;
  }
  .platforms-demonstration {
    color: #70787D;
    font-size:15px;
  }
  .platform-flex {
    display: flex;
    align-items: center;
  }
  .platforms-font {
     color:#70787D;
     font-size: 13px;
  }
  .platforms-font-weight {
    font-weight:bold;
    font-size: 20px;
  }
  @media (max-width: 600px) {
    .graphic_wrap_width {
      width: 100%;
    }
  }
  .margin-platforms {
    margin-top:100px;
    margin-bottom: 100px;
  }
   @media (max-width: 600px) {
   .margin-platforms {
    margin-top:50px;
  }
  }
  .position-absolute-85 {
    position: absolute; 
    left: 85%
  }
  .position-absolute-30 {
    position: absolute;
    right: -30px
  }
   .platforms-visiable-graph_1 {
    display: block;
  }
  @media (max-width: 900px) {
   .platforms-visiable-graph_1 {
    display: none;
  }
  }
.platforms-visiable-graph {
    display: none;
  }
  @media (max-width: 900px) {
   .platforms-visiable-graph {
    display: block;
  }
  }

  .platform_subtitle {
    font-weight: normal;
    font-weight: normal;
    font-size: 24px;
    margin-top:30px;
    color: #333333;
    text-align: center;
    width:100%;
  }
   @media (max-width: 500px) {
    .platform_subtitle {
      font-weight: normal;
      font-weight: normal;
      color: #646464;
      line-height: 160%;
      font-size: 17px;
      text-align: left;
    }
  }
  .width_scroll {
    width: 32%; 
    margin-top: 4%;
    margin-right: 20px;
    margin-left: 20px;
}
  @media (max-width: 1400px) {
   .width_scroll {
    width: 100%; 
    margin-top:4%;
    margin-right: 10px;
  }
  }
 
  .right_scroll {
    width: 100%;
    display: block
  }
  .flex_absolute {
    display: flex;
  }
  .visible_BtmWhiteDou {
    display: none
  }
  @media (max-width: 500px) {
    .visible_BtmWhiteDou {
      display: block;
    }
  }
  .relative_position_platform {
      position: relative; 
      margin-bottom: 55px;
  }
  .dateplatforms {
    text-align: center;
    color: #B7B7B7; 
    font-size: 13px;
    margin-top:20px;
  }
   @media (max-width: 600px) {
   .dateplatforms {
   display: none;
  }
   }
  @media (max-width: 1400x) {
   .relative_position_platform {
      position: static; 
      margin-bottom: 0px;
      margin-top:200px;
  }
  }
  .position_absolute_top {
      position: absolute; 
      top: 0px;
      width: 100%;
      margin-top:3%;
  }
  .position_absolute_top_2 {
      position: absolute; 
      top: 0px;
      right: 0px;
      width: 60%
  }
  @media (max-width: 1400px) {
   .position_absolute_top_2 {
      position: absolute; 
      top: 26px;
      left: 0px;
      width: 100%;
  }
  }
  .lists_platform {
    padding-left: 0px; 
    list-style-type: none;
    margin-top:8%;
  }
  @media (max-width: 950px) {
    .lists_platform {
      padding-left: 20px; 
      list-style-type: none;
      margin-top:4%;
    }
  }
  
  .graphic_Width_1 {
    width: 100%; 
    margin-top: 3%;
  }

  .graphic_Width_2{
    width:100%;
  }
  @media (max-width: 950px) {
  .graphic_Width_1 {
    width: 100%; 
    margin-top: 100px;
  }
  }
   @media (max-width: 950px) {
  .graphic_Width_2 {
    width: 100%; 
    margin-top: 105px;
  }
  }
  .scroll_above {
    display:flex;
    justify-content: space-between;
  }
  .platform-width {
    width: 100%;
  }
  @media (max-width: 500px) {
    .btn-platforms {
      text-align: center;
      margin-top: -35px;
    }
  }
  @media (max-width: 1400px) {
  .position_absolute_top {
      position: static; 
      top: 0px;
      width: 100%;
      margin-top: 0;
  }
  }
  .position_absolute_wrap {
    width: 100%;
    position: absolute;
  }
  .graph-label {
    position: relative;
    left: -10px;
  }
  .position_label {
    position: absolute; 
    left: 58%
  }
  @media (max-width: 1200px) {
  .position_absolute_wrap {
    display: none;
  }
  }
  .text_platform_profit_size {
    font-weight: bold;
    font-size: 26px;
    line-height: 140%;
    margin-left: 25px;
    margin-top:-4px;
  }
  .block {
    margin-bottom: 20px;
  }
</style>