<template>
  <div>
      <div class="copyContent-title">
          Выберите из более 400 верефицированных трейдеров, 
          основываясь на их объективных показателях
      </div>
      <div class="margin-saved-CopyContent">
      <div class="margin-saved-CopyContent_two">
          <div class="saved-CopyContent">
              <div class="copy-content-dohodnost">Доходность</div>
              <div class="copy-content-undertitle-dohodnos">
                 Средняя доходность топ-100 трейдеров платформы social trading-230 процентов 
              </div>
              <div class="copy-content-dohodnost">Риск</div>
              <div class="copy-content-undertitle-dohodnos">
                Риск. Сложные расчёт выражений в простых числах.
              </div>
               <div class="copy-content-dohodnost">Популярность</div>
              <div class="copy-content-undertitle-dohodnos">
                Совокупная сумма инвестиций 5 млрд долларов.
              </div>
          </div>
          <div class="square-CopyContent">
              <img src="/img/copy/user_Picture.png">
              <div>@Colby Martin</div>
              Доходность
              <div>220,90%</div>
              <img src="/img/copy/Graphic.jpg" width="100%">
              <div class="square-two-CopyContent">
                <div class="underSquare-two-CopyContent">
                <div>Копируют</div>
                <div>29</div>
                </div>
                 <div class="underSquare-two-CopyContent">
                <div>В управлении</div>
                <div>~25 000 USD</div>
                </div>
                <div class="underSquare-two-CopyContent">
                <div>Риск</div>
                <div>4</div>
                </div>
              </div>
          </div>
          <div class="underSquare-two-CopyContent">
              <div class="copy-content-dohodnost">Количество инвесторов</div>
              <div class="copy-content-undertitle-dohodnos">
                 Количество инвесторов. Совокупная количаство актинвх инвесторов более 50000
              </div>
              <div class="copy-content-dohodnost">Срок торговли</div>
              <div class="copy-content-undertitle-dohodnos">
                Строк торговли. Более 150 трейдеров с торговой историей более 7 лет
              </div>
               <div class="copy-content-dohodnost">Динамика</div>
              <div class="copy-content-undertitle-dohodnos">
                Продвинутый график доходности с возможность технического анализа.
              </div>
          </div>
    </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.copyContent-title {
    font-style: normal;
    font-weight: 700;
    font-size: 50px;
    text-align: center;
    word-wrap: break-word;
    width: 80%;
    margin: 0 auto;
}
@media (max-width: 700px) {
.copyContent-title {
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    text-align: left;
    width:90%;
    line-height: 120%;
    word-wrap: break-word;
}
}
.copy-content-dohodnost {
  font-size: 24px;
  font-weight: bold;
  line-height: 140%;
}
.copy-content-undertitle-dohodnos {
  font-size: 18px;
  line-height: 140%;
  color:$gray-font-color-desktop;
}
.margin-saved-CopyContent {
  margin: 0 auto;
}
.margin-saved-CopyContent_two {
  display:flex;
  justify-content: center;
}
.saved-CopyContent {
  display: flex; 
  flex-direction:column;
}
.square-CopyContent {
  width:338px; 
  height:485px;
  background-color: pink;
}
.square-two-CopyContent {
  background-color: grey;
  display:flex;
}
.underSquare-two-CopyContent {
  display:flex;
  flex-direction:column;
}
</style>