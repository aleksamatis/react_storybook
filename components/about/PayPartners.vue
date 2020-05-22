<template>
  <div>
    <div class="pay_Partners wrap">
      <div class="picture_cards"></div>
      <div class="textcards">
        <span class="pay_Partners_font">
          Платим партнерам от своей <br> прибыли
          70%
        </span>
        <br />
        <div class="pay_Partners_font_little">Работай только
          над привлечением клиентов, все остальное мы берем на себя</div>
        <div class="ctr-btn-Grey">
          <button class="btnGrey btn-defaultGrey textTransform btn-top-margin">Подробнее</button></div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
  .picture_cards {
    background-image: url(/img/cards.svg);
    background-size: 90% 90%;
    background-repeat: no-repeat;
    background-position-x: 100%;
    background-position-y: center;
    width: 40%;
  }
  @media (max-width: 600px) {
    .picture_cards {
      background-image: url(/img/cards.svg);
      background-size: 90% 90%;
      background-repeat: no-repeat;
      height: 400px;
      background-position-x: center;
      background-position-y: center;
      width: 100%;

    }
  }

  @media (max-width: 375px) {
    .picture_cards {
      background-size: 90% 90%;
      background-repeat: no-repeat;
      height: 400px;
      background-position-x: center;
      background-position-y: center;
      padding: 0px;
    }
  }

  .textcards {
    width: 60%;
    height: auto;
    color: #ffffff;
    padding: 90px;
    padding-left: 5px;
  }

  @media (max-width: 600px) {
    .textcards {
      width: 60%;
      height: auto;
      color: #ffffff;
    }
  }

  @media (max-width: 600px) {
    .textcards {
      width: 100%;
      height: auto;
      color: #ffffff;
      padding-left: 20px;
      padding-right: 20px;
      padding-top: 0px;
    }
  }

  @media (max-width: 500px) {
    .textcards {
      width: 100%;
      height: auto;
      color: #ffffff;
    }
  }

  @media (max-width: 500px) {
    .aliBut {
      text-align: center;
    }
  }

  .pay_Partners_font {
    font-size: 50px;
  }

  @media (max-width: 600px) {
    .btn-defaultGrey {
      color: #333;
      background-color: #000000;
      border: 2px solid #dbdbdb;
      color: #dbdbdb;
    }
  }

  @media (max-width: 600px) {
    .pay_Partners_font {
      font-size: 24px;
    }
  }

  .btnGrey {
    display: inline-block;
    margin-top: 20px;
    margin-bottom: 0px;
    font-weight: bold;
    text-align: center;
    vertical-align: middle;
    cursor: pointer;
    background-image: none;
    white-space: nowrap;
    padding: 16px 60px;
    font-size: 15px;
    line-height: 1.42857143;
    border-radius: 50px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  .btn-defaultGrey {
    color: #333;
    background-color: #000000;
    border: 2px solid #dbdbdb;
    color: #dbdbdb;
  }

 .pay_Partners {
    display: flex;
    background-color: #000000;
    padding-top: 4%;
    padding-bottom: 4%;
  }

  .pay_Partners_font_little {
    padding-top: 20px;
    font-size: 24px;
    color: #DBDBDB;
    font-weight: 400px;
  }

  @media (max-width: 600px) {
    .pay_Partners_font_little {
      font-size: 17px;
      color: #DBDBDB;
      font-weight: 400px;
    }
  }

  @media (max-width: 600px) {
    .pay_Partners {
      display: flex;
      background-color: #000000;
      padding-top: 0;
      padding-bottom: 0;
    }
  }

  @media (max-width: 600px) {
    .wrap {
      flex-wrap: wrap;
    }
  }

  @media (max-width: 500px) {
    .btnGrey {
      display: inline-block;
      margin-bottom: 0;
      margin: 0 auto;
      font-weight: bold;
      text-align: center;
      vertical-align: middle;
      cursor: pointer;
      background-image: none;
      white-space: nowrap;
      padding: 12px 40px;
      font-size: 15px;
      line-height: 1.42857143;
      border-radius: 50px;
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
    }
  }
 @media (max-width: 500px) {
  .ctr-btn-Grey {
    margin-top:30px;
    text-align: center
  }
}
</style>
