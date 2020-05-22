<template>
  <div class="page-fixed-item global-network-bottom" >
    <div>
    <div class="trade-heading">LiteForex - глобальная сеть трейдеров</div>
    <div class="globalnetwork-subtitle">Популярные чаты и каналы</div>
    </div>
    <div class="items">
      <div class="item">
        <div class="item-description">Канал аналитических статей и торговых стратегий</div>
        <div class="item-box">
          <img class="item-small-image" src="/img/boardtrade.svg"/>
          <img class="item-big-image" src="/img/board_trade.svg"/>
          <div class="item-right">
            <div class="item-title">Analysts' opinions</div>
            <div class="item-counter"><i class="el-icon-user-solid"></i><div class="item-couner-font">124 776</div></div>
          </div>
          <i class="el-icon-arrow-right item-arrow"/>
        </div>
      </div>
      <div class="item">
        <div class="item-description">Актуальные справочные материалы для трейдера</div>
        <div class="item-box">
          <img class="item-small-image" src="/img/newspapertrade.svg"/>
          <img class="item-big-image" src="/img/news_papertrade.svg"/>
          <div class="item-right">
            <div class="item-title">Traders' blog</div>
           <div class="item-counter"><i class="el-icon-user-solid"></i><div class="item-couner-font">78 999</div></div>
          </div>
          <i class="el-icon-arrow-right item-arrow"/>
        </div>
      </div>
      <div class="item">
        <div class="item-description">Чат для общения трейдеров и инвесторов</div>
        <div class="item-box">
          <img class="item-small-image" src="/img/hattrade.svg"/>
          <img class="item-big-image" src="/img/hat_trade.svg"/>
          <div class="item-right">
            <div class="item-title">General chat</div>
           <div class="item-counter"><i class="el-icon-user-solid"></i><div class="item-couner-font">345 660</div></div>
          </div>
          <i class="el-icon-arrow-right item-arrow"/>
        </div>
      </div>
      <div class="item">
        <div class="item-description margin-support-desktop">Круглосуточная помощь</div>
        <div class="item-box">
          <img class="item-small-image" src="/img/logo_trade.svg"/>
          <img class="item-big-image" src="/img/logo_trade.svg"/>
          <div class="item-right item-support margin-support">
            <div class="item-title">Support</div>
          </div>
          <i class="el-icon-arrow-right item-arrow"/>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
  .globalnetwork-subtitle {
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    color: $gray-font-color-desktop;
    text-align: center;
    width: 100%;
    margin-top: 20px; 
  }
  @media (max-width: 500px) {
  .globalnetwork-subtitle  {
      font-style: normal;
      font-weight: bold;
      color: black;
      font-size: 17px;
      text-align: left;
    }
  }

  .items {
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: center;
    margin: 0px;
    padding-top: 30px;
    max-width: 1180px;
    margin: auto;
  }

  .item {
    width: 50%;
    padding: 20px;
    margin: 0px;
    box-sizing: border-box;
    line-height: 140%;
    position: relative;
  }
  @media(max-width: 800px) {
    .item {
      width: 100%;
      padding: 0px;
      padding-top: 25px;
      margin: 0px;
      box-sizing: border-box;
      position: relative;
    }
  }

  .item-arrow {
    font-size: 30px;
    margin-left: 5px;
    align-self: center;
    margin-left: auto;
    color: #888888;
  }

  @media(min-width: 800px) {
    .item-arrow {
      display: none;
    }
  }

  .item-box {
    align-items: stretch;
    display: flex;
    background: #F4F4F4;
    border: 1px solid #E8E8E8;
    border-radius: 4px;
    margin: 0px;
    padding: 0px;
  }

  .item-big-image {
    margin: 20px;
  }
  @media(max-width: 700px) {
    .item-big-image {
      display: none;
      margin: 0px;
    }
  }
  
  .item-small-image {
    display: none;
  }
  // @media(max-width: 700px) {
  //   .item-small-image {
  //     display: block;
  //     width: 30px;
  //     height: 30px;
  //     margin: 20px;
  //   }
  // }
   @media(max-width: 700px) {
    .item-small-image {
      display: block;
      width: 33px;
      height: 47px;
      margin-top: 2px;
      margin-bottom:2px;
      margin-left:11px;
      margin-right:11px;
    }
  }

  .item-right {
    margin-bottom: 10px;
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    justify-items: space-between;
    width: 100%;
  }
   @media(max-width: 700px) {
    .item-right {
    margin-bottom: 2px;
    margin-top: 2px;
    display: flex;
    flex-direction: column;
    justify-items: space-between;
    width: 100%;
  }
  }

  .margin-support {
    margin-top: 30px;
  }

  .margin-support-desktop {
    margin-top: 30px;
  }
  .global-network-bottom {
    margin-bottom:4%;
  }
  .el-icon-user-solid {
    font-size:20px;
    margin-top: 6px;
  }
  @media(max-width: 700px) {
  .el-icon-user-solid {
    font-size:15px;
    margin-top: 8px;
  }
  }

  @media(max-width: 700px) {
    .margin-support {
      margin-top: 40px;
    }
  }

  @media(max-width: 700px) {
    .margin-support-desktop {
      margin-top: 0px;
    }
  }
  
  @media(max-width: 700px) {
    .item-support {
      justify-content: center;
      margin-top: 0px;
    }
  }
  .item-title {
    font-style: normal;
    font-weight: bold;
    /* justify-self: flex-start; */
    margin-top: 1.7%;
    font-size: 24px;
  }
  @media(max-width: 900px) {
    .item-title {
      color: #70787D;
      font-weight: bold;
      font-size: 15px;
      line-height:120%;
    }
  }
  .item-description {
    color: #70787D;
    left: 141px;
    font-size: 15px;
    top: 65px;
    padding-right: 30px;
    position: absolute;
  }

  @media(max-width: 700px) {
    .item-description {
      position: static;
      margin-bottom: 10px;
    }
  }
  .item-counter {
    display:flex;
    color:#8E9AAC;
    margin-top: auto;
  }
  .item-couner-font {
    font-size: 18px;
    margin-top:7px;
  }
  @media(max-width: 700px) {
  .item-couner-font {
    font-size: 12px;
    margin-top:7px;
  }
  }

</style>
