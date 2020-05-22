<template>
    <div>
      <div class="flex-liteForex">
        <div class="header-text">
          <div class="liteforex-bottom lit-visiable">
            LiteForex — форекс-брокер
            <br />для инвестиций и торговли
          </div>
           <div class="liteforex-bottom lit-headen">
            LiteForex — <br />форекс-брокер
            для инвестиций и торговли
          </div>
          <div><button class="btnBlue btn-defaultBlue textTransform btn-block-Blue">Регистрация</button></div>
        </div>
      </div>
    </div>
</template>
<script>
  export default {
    data: function () {
      return {
        title: 'Carrier with Liteforex',
        mainTitle: 'LiteForex —  форекс-брокер </br> для инвестиций и торговли ',
        mainTitle2: 'LiteForex —  </br> форекс-брокер  для инвестиций и торговли ',
        }
    }
  }


</script>

<style lang="scss">
.flex-liteForex {
  display: flex;
  justify-content: center;
  align-items: center;
}

.header-text {
  font-weight: bold;
  font-size: 75px;
  width: 974px;
  text-align: center;
  padding-top: 280px;
  padding-bottom: 280px;
  line-height: 120%;
}
@media (max-width: 1500px) {
  .header-text {
  font-weight: bold;
  font-size: 55px;
  width: 974px;
  text-align: center;
  padding-top: 80px;
  padding-bottom: 80px;
  line-height: 120%;
  word-wrap: break-word;
  width:70%;
  }
}
@media (max-width: 500px) {
  .header-text {
    font-weight: bold;
    background-color: black;
    font-size: 30px;
    color: white;
    width: 974px;
    text-align: center;
    padding-top: 80px;
    padding-bottom: 80px;
    text-align: center;
  }
}
.liteforex-bottom {
  margin-bottom: 0px;
}
@media (max-width: 500px) {
.lit-visiable {
  display: none;
}
}
.lit-headen {
  display: none;
}
@media (max-width: 500px) {
.lit-headen {
  display: block;
}
}

@media (max-width: 500px) {
.liteforex-bottom {
  margin-bottom: 0px;
  width:60%;
  margin: 0 auto;
  margin-bottom:30px;
}
}
.btn-block-Blue {
  display: block; 
  margin-top:0;
  margin:0 auto
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