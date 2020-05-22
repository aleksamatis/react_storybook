<template>
  <div>
    <div class="copy_sdelki_detailPlatform">
      <div class="Graph1">
        <div class="fl_Graph">
          <div class="picture_User"></div>
          <div class="colby_MartinPlatforms">
            @ColbyMartin
            <br />
            <div class="martin_ColbyPl">Colby Martin</div>
          </div>
        </div>
        <div class="graphicPl">
          <img src="/img/img_graph_3.svg" class="graphic_WidthPlatforms" />
          <div class="Sredstv_Upravleniya_Visible border_Sredstv_Upravleniya_Visible">
            <div class="details-platforms-flex">
              <div class="round"></div>
              <div class="copy_class">
                Копирующих
                <div class="copy_zero">0</div>
              </div>
            </div>
            <div class="copy_class">
              Средств в управлении
              <div class="copy_zero">10 000 USD</div>
            </div>
            <div class="details-platforms-flex">
              <div class="round2"></div>
              <div class="copy_class">
                Копирующих
                <div class="copy_zero">0</div>
              </div>
            </div>
            <div>
              <div class="copy_class">
                Средств в управлении
                <div class="copy_zero">150 000 USD</div>
              </div>
            </div>
          </div>
          <div class="btnVisible_2">
            <button class="btnWhite btn-defaultWhite btnVisible_2 textTransform">Подробнее</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
  .copy_sdelki_detailPlatform {
    padding-top: 160px;
  }

  @media (max-width: 500px) {
    .copy_sdelki_detailPlatform {
      padding-top: 0px;
    }
  }
  
  .Graph1 {
    padding-top: 20px;
    padding-left: 30px;
    padding-right: 10%;
  }

  @media (max-width: 600px) {
    .Graph1 {
      padding-left: 0px;
      padding-right: 0px;
    }
  }

  @media (max-width: 700px) {
    .Graph1 {
      flex-wrap: wrap;
    }
  }

  .fl_Graph {
    display: flex;
  }

  @media (max-width: 500px) {
    .fl_Graph {
      display: none;
    }
  }

  .copy_class {
    font-size: 13px;
    color: $gray-font-color-graphic-author;
  }
  .details-platforms-flex {
    display:flex;
    align-items: center;
  }
  .border_Sredstv_Upravleniya_Visible {
    border-top: 1px solid #DDE7ED;
    padding-top: 1.5%;
  }

  @media (max-width: 600px) {
    .border_Sredstv_Upravleniya_Visible {
      border-top: 0px solid #DDE7ED;
      padding-top: 1.5%;
    }
  }

  .colby_MartinPlatforms {
    margin-top: 25px;
    margin-bottom: 30px;
    margin-left: 20px;
    color: $gray-font-colbyMartinTraders;
    font-weight: 500;
    font-size: 30px;
  }

  @media (max-width: 800px) {
    .colby_MartinPlatforms {
      margin-top: 25px;
      margin-bottom: 30px;
      margin-left: 20px;
      color: $gray-font-colbyMartinTraders;
      font-weight: 500;
      font-size: 23px;
    }
  }

  @media (max-width: 500px) {
    .colby_MartinPlatforms {
      margin-top: 25px;
      margin-bottom: 30px;
      margin-left: 20px;
      color: $gray-font-colbyMartinTraders;
      font-weight: 500;
      font-size: 30px;
    }
  }

  .colby_Round_color {
    color: #47bf6f;
    font-weight: 500;
    font-size: 20px;
  }

  .colby_Round_font {
    color: #3b4b68;
    font-weight: 500;
    font-size: 20px;
  }

  .martin_ColbyPl {
    margin-top: 4%;
    font-size: 12px;
    color: #8E9AAC;
    font-weight: 500;
  }

  .picture_User {
    background-image: url(/img/user_pic.svg);
    background-size: contain;
    background-repeat: no-repeat;
    height: 90px;
    width: 90px;
  }

  .position_Man {
    border-top: 2px solid #dde7ed;
    border-bottom: 2px solid #dde7ed;
    padding-bottom: 10px;
    padding-top: 10px;
    display: flex;
  }


  .dohodnost {
    font-weight: 500;
    line-height: 100%;
    font-size: 24px;
    color: #47bf6f;
  }

  .copy_Dohod {
    font-weight: 500;
    font-size: 24px;
    color: $gray-font-colbyMartinTraders;
    line-height: 100%;
  }

  .copy_zero {
    font-weight: bold;
    font-size: 18px;
    color: $gray-font-colbyMartinTraders;
  }

  .visible_Round {
    display: none;
  }

  @media (max-width: 500px) {
    .visible_Round {
      display: block;
    }
  }

  .colby_Round_Class {
    border-radius: 100px;
    background: rgba(255, 255, 255, 0.65);
    padding-right: 70px;
    padding-left: 70px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    position: absolute;
    right: 35px;
    margin-top: 20px;
    z-index: 2;
  }

  .Sredstv_Upravleniya_Visible {
    display: grid;
    grid-column-gap: 5px;
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }

  @media(max-width: 1200px) {
    .Sredstv_Upravleniya_Visible {
      display: grid;
      grid-template-rows: 1fr 1fr;
      grid-template-columns: 1fr 1fr;
      grid-row-gap: 5px;
    }
  }

  @media(max-width: 600px) {
    .Sredstv_Upravleniya_Visible {
      display: grid;
      grid-template-rows: 1fr 1fr;
      grid-template-columns: 1fr 1fr;
      grid-row-gap: 5px;
      padding-left: 20px;
    }
  }

  .colby_Round {
    padding-left: 5px;
    padding-right: 30px;
  }

  .colby_Round_two {
    padding-right: 30px;
  }

  .graphicPl {
    border-top: 1px solid #DDE7ED;
    position: relative;
    z-index: 1;
  }

  @media (max-width: 600px) {
    .graphicPl {
      border-top: 0px solid #DDE7ED;
      position: relative;
      z-index: 1;
    }
  }

  .round {
    width: 36px;
    height: 36px;
    border: 1px solid rgba(0, 127, 216, 0.5);
    background: rgba(167, 203, 246, 0.4);
    -moz-border-radius: 50px;
    -webkit-border-radius: 50px;
    border-radius: 50px;
    margin-right: 20px;
  }

  .round2 {
    width: 36px;
    height: 36px;
    border: 1px solid #B8D837;
    background: #E8F1D2;;
    -moz-border-radius: 50px;
    -webkit-border-radius: 50px;
    border-radius: 50px;
    border-radius: 50px;
    margin-right: 20px;
  }

  .graphic_WidthPlatforms {
    width: 100%;
    padding-top: 13%;
    padding-bottom: 3px;
  }

  @media (max-width: 500px) {
    .graphic_WidthPlatforms {
      width: 100%;
      padding-top: 0;
      padding-bottom: 3px;
    }
  }

  @media (max-width: 500px) {
    .visible_Round_year {
      display: none;
    }
  }

  .one_Year {
    display: flex;
    justify-content: space-between;
  }

  .btnVisible_2 {
    display: none;
  }

  @media (max-width: 600px) {
    .btnVisible_2 {
      margin-top:50px;
      display: block;
      text-align: center;
    }
  }

  @media (max-width: 600px) {
    .fl_Graph {
      margin-left: 20px;
    }
  }

</style>
