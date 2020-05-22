<template>
  <div>
    <div class="copy_sdelki">
      <div>
        <div class="Graph1">
          <div class="fl_Graph_Martin">
            <div class="picture_User"></div>
            <div class="colby_MartinTraders">
              @ColbyMartin
              <br />
              <div class="martin_Colby">Colby Martin</div>
            </div>
          </div>
          <div class="position_Man">
            <div class="colby_profitability">
              Доходность
              <div class="dohodnostTraders">220,90%</div>
            </div>
            <div class="colby_profitability-management">
              В управлении
              <div class="copy_DohodTraders">~ 10 000 USD</div>
            </div>
          </div>
          <div class="visible_Round">
            <div class="colby_Round_ClassTraders">
              <div class="dt-flex">
                <div class="greyColby">
                  Доходность
                  <div class="colby_Round_colorTraders">220,90%</div>
                </div>
                <div class="greyColby-management">
                  В управлении
                  <div class="colby_Round_fontTraders">~ 10 000 USD</div>
                </div>
              </div>
            </div>
          </div>

          <div class="graphic">
            <img src="/img/img_graph.svg" class="graphic_WidthTraders" />
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
  .copy_sdelki {
    padding-top: 100px;
  }

  @media (max-width: 500px) {
    .copy_sdelki {
      padding-top: 0px;
    }
  }

  .Graph1 {
    padding-left: 30px;
    padding-right: 10%;
  }

  .colby_profitability {
    color: $gray-font-color-graphic-author;
    font-size: 13px;
  }
  @media (max-width: 600px) {
  .colby_profitability {
    padding-left:20px;
    color: $gray-font-color-graphic-author;
    font-size: 13px;
  }
  }
  .colby_profitability-management {
    color: $gray-font-color-graphic-author;
    font-size: 13px;
    margin-left:15%;
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

  .fl_Graph_Martin {
    display: flex;
  }
  .dt-flex {
    display: flex; 
    flex-direction:row;
    justify-content:space-between;
  }

  @media (max-width: 700px) {
    .fl_Graph_Martin {
      display: flex;
      margin-left: 5%;
      margin-top: 30px;
    }
  }

  .colby_MartinTraders {
    margin-top: 25px;
    margin-bottom: 30px;
    margin-left: 20px;
    color: $gray-font-colbyMartinTraders;
    font-weight: 500;
    font-size: 30px;
  }

  @media (max-width: 800px) {
    .colby_MartinTraders {
      margin-top: 25px;
      margin-bottom: 30px;
      margin-left: 20px;
      color: $gray-font-colbyMartinTraders;
      font-weight: 500;
      font-size: 23px;
    }
  }

  @media (max-width: 500px) {
    .colby_MartinTraders {
      margin-top: 25px;
      margin-bottom: 30px;
      margin-left: 20px;
      color: $gray-font-colbyMartinTraders;
      font-weight: 500;
      font-size: 30px;
    }
  }

  .colby_Round_colorTraders {
    color: #47BF6F;
    font-weight: 500;
    font-size: 20px;
  }

  .colby_Round_fontTraders {
    white-space: nowrap;
    color:var(--gray-font-colbyMartinTraders);
    font-weight: 500;
    font-size: 20px;
  }

  .martin_Colby {
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
    border-top: 2px solid #DDE7ED;
    border-bottom: 2px solid #DDE7ED;
    padding-bottom: 10px;
    padding-top: 10px;
    display: flex;
  }


  .dohodnostTraders {
    margin-top: 7px;
    font-weight: 500;
    line-height: 100%;
    font-size: 24px;
    color: #47bf6f;
  }

  .copy_DohodTraders {
    margin-top: 7px;
    font-weight: 500;
    font-size: 24px;
    color: $gray-font-colbyMartinTraders;
    line-height: 100%;
  }

  .visible_Round {
    display: none;
  }

  @media (max-width: 500px) {
    .visible_Round {
      display: block;
    }
  }

  .colby_Round_ClassTraders {
    border-radius: 100px;
    background: rgba(255, 255, 255, 0.65);
    padding-top: 15px;
    padding-bottom: 15px;
    padding-right: 40px;
    padding-left: 40px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    position: absolute;
    right: 35px;
    margin-top: 20px;
    z-index: 2;
  }

  .colby_Round {
    padding-left: 5px;
    padding-right: 30px;
  }

  .colby_Round_two {
    padding-right: 30px;
  }

  .graphic {
    margin-top: 75px;
    position: relative;
    z-index: 1;
  }

  .graphic_WidthTraders {
    width: 100%;
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

  .greyColby {
    font-size: 13px;
    color: #70787D;
  }
  .greyColby-management {
    font-size: 13px;
    color: #70787D;
    padding-left:20%;
  }

  .btnVisible_2 {
    display: none;
  }

  @media (max-width: 600px) {
    .btnVisible_2 {
      margin-top: 50px;
      display: block;
      text-align: center;

    }
  }

  @media (max-width: 600px) {
    .colby_Round_ClassTraders {
      border-radius: 100px;
      padding-top: 15px;
      padding-bottom: 15px;
      padding-right: 60px;
      padding-left: 60px;
      display: flex;
      justify-content: space-around;
      align-items: center;
      position: absolute;
      right: 35px;
      margin-top: 63px;
      z-index: 2;
    }
  }

  @media (max-width: 460px) {
    .colby_Round_ClassTraders {
      border-radius: 100px;
      background: rgba(255, 255, 255, 0.65);
      padding-top: 15px;
      padding-bottom: 15px;
      padding-right: 40px;
      padding-left: 40px;
      display: flex;
      justify-content: space-around;
      align-items: center;
      position: absolute;
      right: 25px;
      margin-top: 40px;
      z-index: 2;
    }
  }

  @media (max-width: 1200px) {
    .graphic {
      margin-top: 40px;
      position: relative;
      z-index: 1;
    }
  }

</style>
