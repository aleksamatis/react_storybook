<template>
  <div>
    <div class="deales-traders">
      <div>
        <div class="padding-dt">
          <div class="titile-dt">
            Копируй сделки успешных
            <br />трейдеров
          </div>
          <span class="text-dt-mobile">
            Получай прибыль с первого дня работы на
            финансовых рынках без обучения. Лучшие
            трейдеры со всего мира доступны в одной платформе и готовы делиться своей прибыльной
            торговлей.
          </span>
          <div class="btn_Disable"><button class="btnWhite btn-defaultWhite textTransform btnHidden btn-top-margin">Подробнее</button></div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
  .deales-traders {
    padding-top: 100px;
  }

  @media (max-width: 500px) {
    .deales-traders {
      padding-top: 0px;
    }
  }

  .padding-dt {
    padding-left: 10%;
    padding-top: 10%;
  }

  @media (max-width: 600px) {
    .padding-dt {
      padding-left: 0px;
      padding-top: 0px;
    }
  }

  .text-dt-mobile {
    font-size: 24px;
    line-height: 140%;
    color: $gray-font-color-desktop;

  }

  .btnHidden {
    visibility: visible;
  }

  @media (max-width: 500px) {
    .btn_Disable {
      display: none;
    }
  }

  @media (max-width: 500px) {
    .btnHidden {
      visibility: hidden;
    }
  }

  @media (max-width: 500px) {
    .text-dt-mobile {
      font-size: 17px;
      color: $gray-font-color-mobile;
      line-height: 140%;
    }
  }

  .titile-dt {
    font-size: 50px;
    font-weight: bold;
    margin-bottom: 17px;
    line-height: 120%;

  }

  @media (max-width: 500px) {
    .titile-dt {
      margin-top: 20px;
      font-size: 24px;
      font-weight: bold;
      margin-bottom: 30px;
      line-height: 120%;

    }
  }

  .textTransform {
    text-transform: uppercase;
  }

  @media (max-width: 500px) {
    .textTransform {
      text-transform: uppercase;
    }
  }


</style>
