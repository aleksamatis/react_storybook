<template>
    <div class="trading-platform-bg-color">
      <div class="flex_LiteForex_Copyprogramm">
        <div class="header_text_Copyprogramm">
          <div class="lite_Forex_Bottom_Copyprogramm">
            <div class="lite_Forex_Bottom_Copyprogramm_title">
              Лучший сервис инвестиций
            </div>
            <div>
             <div class="lite_Forex_Bottom_Copyprogramm_undertitle">
              Social trading создан для тех кто ищет максимальную прибыль и минимальный риск. 
              Богатый выбор управляющих, и невероятный контроль над инвестициями и возможность общения с трейдерами. 
              Инновационная платформа для начинающих и профессиональных инвесторов.
            </div>
            </div>
          </div>
          <div class="btn-align-center"><button class="btnBlue btn-defaultBlue textTransform ">Регистрация</button></div>
          <div class="padding_copyHeader"></div>
        </div>
      </div>
    </div>
</template>
<style lang="scss">
.flex_LiteForex_Copyprogramm {
  display: flex;
  justify-content: center;
  align-items: center;
}
.trading-platform-bg-color {
  background-color: black;
}
.lite_Forex_Bottom_Copyprogramm_undertitle {
  line-height: 160%; 
  width:54%;
  margin:0 auto; 
}
.padding_copyHeader {
  padding-top:7%;
}
@media (max-width: 500px) {
.padding_copyHeader {
  padding-top:7%;
}
}
@media (max-width: 1500px) {
  .header_text_Copyprogramm {
  font-weight: bold;
  font-size: 35px;
  color:red;
  text-align: center;
  padding-top: 80px;
  padding-bottom: 80px;
  line-height: 120%;
  word-wrap: break-word;
  background-color: black;
  }
}
@media (max-width: 500px) {
  .header_text_Copyprogramm {
    font-weight: normal;
    background-color: black;
    font-size: 30px;
    width:80%;
    text-align: center;
    padding-top: 80px;
    padding-bottom: 40px;
    
  }
}
.lite_Forex_Bottom_Copyprogramm {
  margin: 0 auto;
  font-size:17px;
  padding-top:10%;
  width: 70%;
  margin-bottom: 35px;
  text-align: center;
  color: white;
}

@media (max-width: 700px) {
.lite_Forex_Bottom_Copyprogramm {
  margin: 0 auto;
  font-size:17px;
  padding-top:16%;
  width:100%;
  margin: 0 auto;
  margin-bottom:30px;
  color:white;
}
}
.lite_Forex_Bottom_Copyprogramm_title {
  font-size: 50px;
  font-weight: bold;
  margin-bottom:2%;
  line-height: 160%;
}
.btn-align-center {
  text-align: center;
}
.btnBlue {
  display: inline-block;
  margin-bottom: 0;
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
}
</style>