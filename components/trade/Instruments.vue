<template>
  <div class="instruments page-fixed-item">
    <div class="trade-heading trade-visibility-hidden">В вашем распоряжении множество популярных торговых инструментов с минимальными спредами</div>
    <div class="trade-heading trade-visibility-hidden-2">Торгуй чем привык с минимальными ставками</div>
    <div class="instruments-items">
      <div class="instruments-item">
        <div class="instruments-item-box">
          <img class="instruments-item-image" src="/img/inst/eurusd.svg">
          <!--div-->
            <div class="platforms-item-title">EURUSD</div>
            <div class="instruments-numbers">0.0</div>
          <!--/div-->
        </div>
      </div>
         <div class="instruments-item">
        <div class="instruments-item-box">
          <img class="instruments-item-image" src="/img/inst/oil.svg">
          <!--div-->
            <div class="platforms-item-title">USCrude</div>
           <div class="instruments-numbers">0.0</div>
          <!--/div-->
        </div>
      </div>
             <div class="instruments-item">
        <div class="instruments-item-box">
          <img class="instruments-item-image" src="/img/inst/btcusd.svg">
          <!--div-->
            <div class="platforms-item-title">BTSUSD</div>
            <div class="instruments-numbers">0.0</div>
          <!--/div-->
        </div>
      </div>
             <div class="instruments-item">
        <div class="instruments-item-box">
          <img class="instruments-item-image" src="/img/inst/facebook.svg">
          <!--div-->
            <div class="platforms-item-title">facebook</div>
            <div class="instruments-numbers">0.0</div>
          <!--/div-->
        </div>
      </div>
      <div class="instruments-footer">
         <a href="#" class="instruments-font-link"><img src="/img/linkpdf.svg" class="instruments-link" />Ссылка на пдф со спецификацией</a><br>
        <div class="pp-inst-btn"><button class="pp-btnWhite pp-btn-defaultWhite textTransform btn-top-margin">Полный список</button></div>
      </div>
    </div>
    
  </div>
</template>
<style lang="scss">
  .instruments-subtitle {
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    color: #333333;
    text-align: center;
    width: 100%;
  }
  .instruments-numbers {
    padding-top: 16px;
    font-size:64px;
    color: black;
  }
  @media(max-width: 700px) { 
  .instruments-numbers {
    padding-top: 16px;
    font-weight: bolder;
    font-size:44px;
    color: black;
  }
  }
  .pp-inst-btn {
    margin-top: 50px;
  }
  @media(max-width: 700px) { 
    .pp-inst-btn {
    margin-top: 30px;
  }
  }
  .instruments-items {
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: center;
    padding: 0px;
    max-width: 1100px;
    margin: auto;
    margin-top: 50px;
  }
  .instruments-link {
    position: relative;
    right: 6px;
    top: 4px;
  }

  .instruments-item {
    width: 25%;
    padding-left: 20px;
    padding-right: 20px;
    padding-bottom: 20px;
    padding-top: 0px;
    margin: 0px;
    box-sizing: border-box;
    line-height: 140%;
    /* position: relative; */
  }
  @media(max-width: 700px) {
    .instruments-item {
      width: 50%;
      padding-left: 20px;
      padding-right: 20px;
      padding-bottom: 20px;
      padding-top: 0px;
      margin: 0px;
      box-sizing: border-box;
    }
  }
  .instruments-item-box {
    align-items: center;
    flex-direction: column;
    align-items:center;
    justify-content: center;
    display: flex;
    background: #F4F4F4;
    border: 1px solid #E8E8E8;
    border-radius: 4px;
    margin: 0px;
    padding: 0px;
    padding-top: 15%;
    padding-bottom: 25%;
  }
  @media(max-width: 700px) {
    .instruments-item-box {
     margin-left: 0px;
    align-items: center;
    flex-direction: column;
    align-items:center;
    justify-content: center;
    display: flex;
    background: #F4F4F4;
    border: 1px solid #E8E8E8;
    border-radius: 4px;
    margin: 0px;
    padding: 0px;
    padding-top: 4%;
    padding-bottom: 15%;
    }
  }

  .instruments-item-image {
    width: 80px;
    height: 80px;
    margin: 10px;
  }
  @media(max-width: 700px) {
  .instruments-item-image {
    width: 45px;
    height: 45px;
    margin: 10px;
  }
  }
  
 .platforms-item-title {
    font-style: normal;
    font-size: 18px;
    justify-self: flex-start;
  }
  @media(max-width: 700px) {
    .platforms-item-title {
      color: #888888;
      font-size: 13px;
      justify-self: flex-start; 
    }
  }

  .instruments-item-description {
    color: #888888;
    left: 111px;
    top: 40px;
    position: absolute;
  }

  @media(max-width: 700px) {
    .instruments-item-description {
      position: static;
    }
  }

  .instruments-footer {
    margin-top: 50px;
  }
  @media(max-width: 700px) {
  .instruments-footer {
    margin-top: 0px;
  }
  }

  .instruments {
    margin-bottom: 100px;
  }
  .instruments-font-link{
    margin-top: 50px;
    text-decoration: underline;
    font-size: 17px;
    color: $blue-color-and-link;
  }
</style>
