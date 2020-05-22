<template>
    <div class="trading-platform-bg-color">
      <div class="flex_LiteForex_Q">
        <div class="header_text_Q">
          <div class="lite_Forex_Bottom_Q">
            <div class="lite_Forex_Bottom_the_question">
               Платформа, где трейдеры зарабатывают еще больше
            </div>
          </div>
          <div class="padding_question"><div class="picture_Question q_display"></div>
          </div>
          <div class="btn-align-center"><button class="btnBlue btn-defaultBlue textTransform ">Регистрация</button></div>
          <div class="padding_Q"></div>
        </div>
      </div>
    </div>
</template>
<style lang="scss">
.flex_LiteForex_Q {
  display: flex;
  justify-content: center;
  align-items: center;
}
.header_text_Q {
 font-size: 50px;
 line-height: 120%;
}
.picture_Question {
  background-image: url(/img/question.svg);
  background-size: contain;
  background-repeat: no-repeat;
  height:148px;
  background-position-x: center;
  background-position-y: center;
  margin-top:70px;
}
.trading-platform-bg-color {
  background-color: black;
}
.q_display {
  display:none;
}
.btn-align-center {
  text-align: center;
}
@media (max-width: 500px) {
.q_display {
  display:block;
}
}
.padding_Q {
  padding-top:28%;
}
@media (max-width: 500px) {
.padding_Q {
  padding-top:0%;
}
}
@media (max-width: 1500px) {
  .header_text_Q {
  font-weight: bold;
  font-size: 35px;
  color: white;
  text-align: center;
  padding-top: 80px;
  padding-bottom: 80px;
  line-height: 120%;
  word-wrap: break-word;
  background-color: black;
  }
}
@media (max-width: 500px) {
  .header_text_Q {
    font-weight: bold;
    background-color: black;
    font-size: 30px;
    color: white;
    width:80%;
    text-align: center;
    padding-top: 85px;
    padding-bottom: 52px;
    
  }
}
.lite_Forex_Bottom_Q {
  padding-top:26%;
  margin-bottom: 35px;
  color: white;
}

@media (max-width: 500px) {
.lite_Forex_Bottom_Q {
  margin-bottom: 40px;
  width:100%;
  margin: 0 auto;
  margin-bottom:30px;
  color:white;
}
}
@media (max-width: 500px) {
.lite_Forex_Bottom_the_question {
  margin-top:-125px;
}
}
@media (max-width: 500px) {
.padding_question {
  padding-bottom:49%;
}
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