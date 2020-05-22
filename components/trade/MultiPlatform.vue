<template>
  <div class="multiplatforms page-fixed-item">
    <div class="trade-heading">Мультиплатформа</div>
    <div class="multiplatform-subtitle">LiteForex offers only the most popular trading platforms of the Forex market</div>
    <div class="multiplatform-items">
        <div class="multiplatform-item-box">
          <img src="/img/metatrader4.svg"/>
          <a href="#" class="link-multiplatform">Скачать</a> 
        </div>

        <div class="multiplatform-item-box">
          <img src="/img/metatrader5.svg" class="metatrader5"/>
          <a href="#" class="link-multiplatform">Скачать</a> 
        </div>

        <div class="multiplatform-item-box">
          <img src="/img/liteforexmetatrader.svg"/>
          <a href="#" class="link-multiplatform">Перейти</a> 
        </div>
    </div>
  </div>
</template>
<style lang="scss">

  .metatrader5 {
    position: relative;
    top: -2px;
  }
  .multiplatforms {
    margin-bottom: 70px;
  }

  .multiplatform-subtitle  {
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    margin-top:30px;
    color: #333333;
    text-align: center;
    width:100%;
  }
   @media (max-width: 500px) {
    .multiplatform-subtitle  {
      font-style: normal;
      font-weight: normal;
      color: #646464;
      font-size: 17px;
      text-align: left;
      line-height: 160%;
    }
  }

  .multiplatform-items {
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-between;
    margin-top:0px;
    padding-top: 20px;
    max-width: 1080px;
    margin: auto;
    
  }
  .multiplatform-item-box {
    display: flex; 
    flex-direction: column;
    margin: 40px; 
    margin-left: 10px;
    margin-right: 10px;
    align-items: center;
    justify-content: flex-end;
  }
  
  @media(max-width: 820px) {
    .multiplatform-items {
      justify-content: center;
    }
  }

  .link-multiplatform {
      margin-top: 4%;
      color: #007fd8;
      cursor: pointer;
      text-decoration: underline;
      font-size: 17px;
    }


</style>
