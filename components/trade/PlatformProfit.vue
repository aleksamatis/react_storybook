<template>
  <div class="platform-profit page-fixed-item">
    <div>
      <div class="trade-heading trade-visibility-hidden">
        Воспользуйтесь возможностями лучшей торговой платформы для трейдинга и инвестиций
      </div>
      <div class="trade-heading trade-visibility-hidden-2">
        Торговая платформа all inclusive
      </div>
      <div class="platform_subtitle"><a href="#" class="pp-link">Торговая платформа LiteForex</a> включает в себя
        полностью иновационный функционал и
        совместима с MetaTrader 4/5</div>
      <div class="info-items">
        <div class="info-item">
          <img src="/img/analyses-big.svg" class="pp-item-big-image" />
          <img src="/img/analyses-sm.svg" class="pp-item-small-image" />
          <div class="pp-font">Встроенная<br>аналитика</div>
        </div>
        <div class="info-item">
          <img src="/img/crosses-big.svg" class="pp-item-big-image" />
          <img src="/img/crosses-sm.svg" class="pp-item-small-image" />

          <div class="pp-font"> Торговые<br>сигналы</div>
        </div>
        <div class="info-item">
          <img src="/img/idea-big.svg" class="pp-item-big-image" />
          <img src="/img/idea-sm.svg" class="pp-item-small-image" />

          <div class="pp-font">Мнения<br>экспертов</div>
        </div>
        <div class="info-item">
          <img src="/img/news-icon-big.svg" class="pp-item-big-image" />
          <img src="/img/news-item-sm.svg" class="pp-item-small-image" />


          <div class="pp-font">Экономические<br>новости</div>
        </div>
        <div class="pp-mt-btn"><button
            class="pp-btnWhite pp-btn-defaultWhite textTransform open-button">Открыть</button></div>
      </div>
    </div>
  </div>
</template>


<script>
</script>

<style lang="scss">
  .info-items {
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: center;
    padding: 0px;
    margin: auto;
    max-width: 1200px;
    margin-top: 40px;
  }

  .info-item {
    display: flex;
    width: 25%;
    box-sizing: border-box;
    margin: 0px;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  @media(max-width: 700px) {
    .info-item {
      width: 50%;
    }
  }

  .pp-item-small-image {
    display: none;
  }

  @media(max-width: 700px) {
    .pp-item-small-image {
      display: block;
      width: 60px;
      height: 60px;
      margin: 10px;
    }
  }

  .pp-font {
    font-size: 24px;
  }

  @media(max-width: 700px) {
    .pp-font {
      font-size: 14px;
      font-weight: bold;
    }
  }

  .pp-link {
    text-decoration: underline;
    color: $blue-color-and-link;
  }

  .pp-item-big-image {
    margin: 40px;
    margin-bottom: 20px;
    padding: 50px;
    height: 120px;
    width: 120px;
  }

  @media(max-width: 700px) {
    .pp-item-big-image {
      display: none;
      margin: 0px;
    }
  }

  .open-button {
    margin: 40px;
  }

  .pp-mt-btn {
    margin-top: 50px;
  }

  @media (max-width: 500px) {
    .pp-mt-btn {
      margin-top: 30px;
    }
  }

  .platform-profit {
    margin-bottom: 100px;
  }
  @media (max-width: 700px) {
   .platform-profit {
    margin-bottom: 80px;
  }
  }

  .pp-btn-defaultWhite {
    color: #333;
    background-color: white;
    border: 2px solid #007fd8;
    color: #007fd8;
  }

  @media (max-width: 500px) {
    .pp-btn-defaultWhite {
      color: #333;
      background-color: white;
      border: 2px solid #007fd8;
      color: #007fd8;
      text-align: center;
    }
  }

  .pp-btnWhite {
    display: inline-block;
    margin-top: 20px;
    margin-bottom: 0px;
    margin: 0 auto;
    font-weight: bold;
    text-align: center;
    vertical-align: middle;
    cursor: pointer;
    background-image: none;
    white-space: nowrap;
    padding: 18px 40px;
    font-size: 15px;
    line-height: 1.42857143;
    border-radius: 50px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  @media (max-width: 500px) {
    .pp-btnWhite {
      display: inline-block;
      margin-top: 0;
      margin-bottom: 0;
      margin: 0 auto;
      font-weight: bold;
      text-align: center;
      vertical-align: middle;
      cursor: pointer;
      background-image: none;
      white-space: nowrap;
      padding: 16px 40px;
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

  .pp-btnWhite:hover {
    color: #333;
    background-color: white;
    border: 2px solid #2199EE;
    color: #007fd8;
  }

  .pp-btnWhite:active {
    color: #333;
    background-color: white;
    border: 2px solid #007FD8;
    color: #006CB8;
  }

</style>
