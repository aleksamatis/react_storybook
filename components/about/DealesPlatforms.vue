<template>
    <div>
      <div class="deales-platforms">
        <div>
          <div class="padding-dp">
            <div class="title-dp">
              Платформа, где трейдеры зарабатывают еще больше
            </div>
            <span class="txt-dp">
              Ты сам устанавливаешь размер своего <span class="link-dp">заработка</span> от прибыли копирующих твою торговлю.
            </span>
             <div class="White_btn_disable"><button class="btnWhite btn-defaultWhite textTransform btnHidden btn-top-margin" >Подробнее</button></div>
          </div>
         </div>
       </div>
    </div>
 </template>

<style lang="scss">
 .deales-platforms {
  padding-top: 160px;
}
@media (max-width: 500px) {
  .deales-platforms {
    padding-top: 0px;
    }
}
.link-dp {
  text-decoration: underline;
  color: $gray-font-color-desktop;
  cursor:pointer;
}
.padding-dp {
  padding-top:10%;
  padding-left: 10%;
}
@media (max-width: 600px) {
  .padding-dp {
    padding-left: 0px;
  }
}
.txt-dp {
  font-size: 24px;
  color: $gray-font-color-desktop;
  line-height: 160%;
 }
.link {
  color: $blue-color-and-link;
  cursor: pointer;
}
.btnHidden {
  visibility: visible;
}
@media (max-width: 500px) {
.White_btn_disable {
  display: none;
}
}
@media (max-width: 500px) {
.btnHidden {
 visibility: hidden;
}
}

@media (max-width: 500px) {
.txt-dp {
  font-size: 17px;
  color: $gray-font-color-mobile;
  
}
}
.title-dp {
  font-size: 50px;
  font-weight: bold;
  margin-bottom: 30px;
  line-height: 120%;
  word-wrap: break-word;
}
@media (max-width: 890px) {
.title-dp {
  font-size: 40px;
  font-weight: bold;
  line-height: 120%;
  margin-bottom: 30px;
}
}

@media (max-width: 500px) {
.title-dp {
  margin-top:20px;
  font-size: 24px;
  font-weight: bold;
  line-height: 120%;
  margin-bottom: 30px;
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

@media (max-width: 500px) {
.link-dp {
  text-decoration: underline;
  color: $blue-color-and-link;
  cursor: pointer;
}
}

</style>