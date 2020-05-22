<template>
  <div class="page-fixed-item">
    <div class="icons_Menu">
      <div>
        <img class="icons_Low" src="/img/facebook.svg" />
        <img class="icons_Low" src="/img/inst.svg" />
        <img class="icons_Low" src="/img/twitter.svg" />
        <img class="icons_Low" src="/img/vk.svg" />
        <img class="icons_Low" src="/img/in.svg" />
        <img class="icons_Low" src="/img/google.svg" />
      </div>
    </div>

    <div class="footer_Menu">
      <div>
        <div class="footer_Menu_One">About us</div>
        <div class="footer_Menu_One">For Traders</div>
        <div class="footer_Menu_One">Social Trading</div>
        <div class="footer_Menu_One">Promotions</div>
        <div class="footer_Menu_One">Partnership</div>
        <div class="footer_Menu_One">Blog</div>
      </div>
    </div>
    <div class="text_Low">
      <div>Данный веб-сайт является собственностью компании Фондовая торговля Investments Limited.</div>
      <div class="m_txt">
        LiteForex Investments Limited, зарегистрированная на Маршалловых островах под номером 63888 и
        регулируемая в соответствии Marshall Islands Business Corporation Act.
        Адрес компании: Ajeltake Road, Ajeltake Island, Majuro, Marshall Islands MH96960. Email:
        <span class="link">clients@Фондовая торговля.com</span>
      </div>
      <div class="m_txt">
        Liteforex Investments Limited не предоставляет сервис резидентам стран Европейской Экономической Зоны
        (ЕЭЗ), США, Израиля и Японии.
      </div>
      <div class="m_txt">Copyright © 2005-2019 Фондовая торговля.com </div>
      <div class="m_txt">
        Предупреждение о рисках: Торговля на финансовых рынках сопряжена с риском. Контракты на разницу ("CFDs")
        являются сложными финансовыми инструментами, используемыми для маржинальной торговли.
        Торговля CFD имеет высокий уровень риска, так как кредитное плечо может работать как в Вашу пользу, так
        и против Вас. Вследствие этого торговля CFD подходит не всем инвесторам из-за высокого риска
        потери инвестированного капитала. Вы не должны рисковать большими средствами, чем Вы готовы потерять.
        Перед началом торговли Вы должны убедиться, что Вы понимаете все риски и учитываете их в
        совокупности с уровнем Вашего опыта при постановке Ваших инвестиционных целей.
        <span class="link">Перейти</span> к полному документу "Предупреждение о рисках".
      </div>
      <img class="eleventh_Low mt_txt" src="/img/eleventh.svg" />
      <div class="low_Menu m_txt">
        <div class="low_Menu_One">Условия использования информации</div>
        <div class="low_Menu_One">Конфиденциальность</div>
        <div class="low_Menu_One">Предупреждение о рисках</div>
        <div class="low_Menu_One">Политика AML</div>
        <div class="low_Menu_One">Отзыв</div>
      </div>
    </div>
  </div>

</template>

<style lang="scss">
  .link {
    color: $blue-color-and-link;
    cursor: pointer;
  }

  .low_Menu_One {
    padding-right: 20px;
    color: $blue-color-and-link;
    cursor: pointer;
  }

  .icons_Menu {
    display: flex;
    justify-content: center;
    padding-top: 40px;
    padding-bottom: 40px;
  }

  .icons_Low {
    padding-left: 10px;
    padding-right: 10px;
    cursor: pointer;
  }
  .icons_Low:active {
    padding-left: 10px;
    padding-right: 10px;
  }
  .icons_Low:hover {
    padding-left: 10px;
    padding-right: 10px;
    filter: invert(16%) sepia(67%) saturate(6678%) hue-rotate(194deg) brightness(98%) contrast(101%);
  }


  .footer_Menu {
    margin: 0 auto;
    width: 90%;
    padding-top: 20px;
    padding-bottom: 20px;
    flex-wrap: wrap;
    border-top: 1px solid #DBDBDB;
    border-bottom: 1px solid #DBDBDB;
    text-align: center;
    font-weight: 600px;
  }

  @media (max-width: 500px) {
    .footer_Menu {
      display: none;
    }
  }

  @media (max-width: 500px) {
    .footer_Menu {
      display: none;
    }
  }
  .footer_Menu_One {
    margin-right: 50px;
    display: inline-block;
    cursor: pointer;
    font-weight: 800px;
  }
  .footer_Menu_One:hover {
    margin-right: 50px;
    display: inline-block;
    cursor: pointer;
    font-weight: 800px;
    color: $blue-color-and-link;
  }
  .text_Low {
    width: 80%;
    margin: 0 auto;
    padding-top: 60px;
    color: $gray-font-color-footer;
    padding-bottom: 40px;
    font-size: 15px;
    line-height: 140%;
  }
  .eleventh_Low {
    padding-right: 20px;
  }

  .low_Menu {
    display: flex;
    flex-wrap: wrap;
    font-size:13px;
  }

  .m_txt {
    margin-top: 20px;
  }
  .mt_txt {
    margin-top: 30px;
  }

  @media (max-width: 600px) {
    .text_Low {
      width: 100%;
      padding-top: 40px;
      color: $gray-font-color-footer;
      line-height: 140%;
      padding-bottom: 40px;
    }
  }

  @media (max-width: 500px) {
    .icons_Menu {
      display: flex;
      justify-content: space-around;
      padding-top: 120px;
      padding-bottom: 0;
    }
  }

  @media (max-width: 500px) {
    .low_Menu_One {
      font-size: 13px;
      padding-right: 20px;
      color: $blue-color-and-link;
      cursor: pointer;
      padding-bottom: 10px;
    }
  }

</style>
