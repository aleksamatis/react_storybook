<template>
  <div>
    <div>
      <div class="lefttext-brokerpromis lefttext-padding-brokerpromis">
        <div class="lefttext-margintop-brokerpromis">
          <div class="heading-brokerpromis">Брокер которому доверяют</div>
          <div class="flex_textbrokerpromis margin-broker">
            <div>
              <img src="/img/lvr.png" class="image-broker-one" />
            </div>
            <div>
              <div class="txt-broker-one">15 лет работы</div>
              <br />
              <div class="font-broker">Более полутора миллионов клиентов</div>
            </div>
          </div>
          <div class="flex-second-section-broker margin-brokerpromis-section">
            <div>
              <img src="/img/dom.svg" class="image-broker-two" />
            </div>
            <div>
              <div class="txt-broker-two">
                Вывод сделок на рынок
              </div>
              <br />
              <div class="font-broker">Быстрое пополнение без реквот, разрешены любые стратегии</div>
            </div>
          </div>
          <div class="image-text-flex margin-brokerpromis-section-free">
            <div>
              <img src="/img/sht.svg" class="image-broker-free" />
            </div>
            <div>
              <div class="picture_br_one_sp_str">
                Страхование
                депозитов
              </div>
              <br />
              <div class="font-broker">Все депозиты хранятся в европейском банке с покрытием до 50 000
                USD</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<style lang="scss">
  .lefttext-brokerpromis {
    padding-top: 100px;
  }

  @media (max-width: 500px) {
    .lefttext-brokerpromis {
      padding-top: 0px;
    }
  }

  .lefttext-padding-brokerpromis {
    padding-left: 10%;
  }

  .margin-broker {
    padding-bottom: 10px;
    margin-top: 0px;
  }

  @media (max-width: 500px) {
    .margin-broker {
      padding-bottom: 10px;
      margin-top: -10px;
    }
  }

  .margin-brokerpromis-section {
    padding-bottom: 20px;
    margin-top: 20px
  }

  @media (max-width: 500px) {
    .margin-brokerpromis-section {
      padding-bottom: 10px;
      margin-top: -10px;
    }
  }

  .margin-brokerpromis-section-free {
    padding-bottom: 10px;
    margin-top: 0px
  }

  @media (max-width: 500px) {
    .margin-brokerpromis-section-free {
      padding-bottom: 10px;
    }
  }

  @media (max-width: 600px) {
    .lefttext-padding-brokerpromis {
      padding-left: 0px;
    }
  }

  .flex_textbrokerpromis {
    display: flex;
    margin-bottom: 40px;
  }

  .image-broker-one {
    margin-right: 10px;
  }

  .txt-broker-two {
    font-weight: bold;
    font-size: 30px;
  }

  .txt-broker-one {
    font-weight: bold;
    font-size: 30px;
  }

  .picture_br_one_sp_str {
    font-weight: bold;
    font-size: 30px;
  }

  .image-text-flex {
    display: flex;
    align-items: center;
    margin-bottom: 40px;
    margin-top: 52px;
  }

  .flex-second-section-broker {
    display: flex;
    align-items: center;
    margin-bottom: 40px;
    margin-top: 55px;
  }

  @media (max-width: 500px) {
    .image-text-flex {
      display: flex;
      align-items: center;
      margin-bottom: 15px;
    }
  }

  @media (max-width: 500px) {
    .flex-second-section-broker {
      display: flex;
      align-items: center;
      margin-top: -40px;
      margin-bottom: -40px;
    }
  }

  @media (max-width: 500px) {
    .st {
      margin-top: -18px;
    }
  }

  .image-broker-two {
    margin-right: 25px;
    margin-top: 0px;
  }

  .image-broker-free {
    margin-right: 25px;
    margin-top: -28px;
  }

  .heading-brokerpromis {
    margin-bottom: 40px;
    font-size: 50px;
    color: black;
    font-weight: bold;
  }

  .lefttext-margintop-brokerpromis {
    margin-top: 10%;
  }

  .font-broker {
    font-weight: normal;
    font-size: 24px;
    color: $gray-font-color-desktop;
    margin-top: -15px;
  }

  @media (max-width: 800px) {
    .font-broker {
      font-weight: normal;
      font-size: 14px;
      color: $gray-font-color-desktop;
    }
  }

  @media (max-width: 500px) {
    .font-broker {
      font-weight: normal;
      font-size: 14px;
      color: $gray-font-color-graphic-author;
    }
  }

  @media (max-width: 800px) {
    .heading-brokerpromis {
      margin-bottom: 40px;
      font-size: 40px;
      color: black;
      font-weight: bold;
    }
  }

  @media (max-width: 500px) {
    .image-broker-two {
      margin-right: 20px;
      margin-top: 0px;
    }
  }

  @media (max-width: 500px) {
    .image-broker-free {
      margin-right: 20px;
      margin-top: 0px;
    }
  }

  @media (max-width: 500px) {
    .heading-brokerpromis {
      margin-top: 0px;
      margin-bottom: 40px;
      font-size: 24px;
      color: black;
      font-weight: bold;
    }
  }

  @media (max-width: 500px) {
    .txt-broker-two {
      font-size: 17px;
      color: black;
      margin-top: 25px;
      font-weight: bold;
    }
  }

  @media (max-width: 500px) {
    .txt-broker-one {
      font-size: 17px;
      color: black;
      margin-top: 8px;
      font-weight: bold;
    }
  }

  @media (max-width: 500px) {
    .picture_br_one_sp_str {
      font-size: 17px;
      color: black;
      margin-top: 0px;
      font-weight: bold;
    }
  }

  @media (max-width: 500px) {
    .image-broker-one {
      width: 45px;
      margin-right: 10px;
    }
  }

  @media (max-width: 500px) {
    .image-broker-two {
      width: 35px;
      margin-right: 20px;
    }
  }

  @media (max-width: 500px) {
    .image-broker-free {
      width: 35px;
      margin-right: 20px;
      margin-top: -25px;
    }
  }

</style>
