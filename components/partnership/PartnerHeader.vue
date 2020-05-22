<template>
  <div>
    <div>
      <div class="full-partner-header">
       <div class="relative-partnerheader">
          <div><img src="/partnership/cabinet-big.jpg" class="img-partnerheader " /></div>
           <div class="linear-gradien-ph-1"></div>
        </div>
       <div>
          <div class="absolute-partnerheader">
            <div class="partnerheader-flexdirection">
              <div class="partner-header-title">Высокий доход для партнеров LiteForex</div>
              <div class="partner-header-subtitle">Мы знаем цену партнерства и предлагаем самое высокое вознаграждение
                на рынке </div>
              <div class="seventh-percent-class">
                <div class="eventh-percent-class-2">
                  70% <div class="txt-seventh-header-title">от нашей прибыли отдаем партнерам</div>
                </div>
              </div>
                <div class="partnerheader-btn"><button
                class="btnBlue btn-defaultBlue textTransform btn-block-Blue">Стать партнером</button>
                </div>
            </div>
           </div>
         </div>
      </div>
      <div class="mobile-partner-header">
        <div class="relative-partnerheader">
          <div class="partnerheader-picture_Note"></div>
          <div class="linear-gradien-ph-2"></div>
        </div>
        <div class="absolute-partnerheader-mobile">
          <div>
            <div class="partnerheader-flexdirection">
              <div class="partner-header-title">Высокий доход для партнеров LiteForex</div>
              <div class="partner-header-subtitle">Мы знаем цену партнерства и предлагаем самое высокое вознаграждение
                на рынке </div>
              <div class="seventh-percent-class-small">
                  70% <div class="txt-seventh-header-title">от нашей прибыли отдаем партнерам</div>
              </div>
            </div>
          </div>
            <div class="partnerheader-btn-and-margin"><button
                class="btnBlue btn-defaultBlue textTransform btn-block-Blue">Стать партнером</button>
           </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
  .full-partner-header {
    display: block;
  }
  .relative-partnerheader {
    position:relative;
  }
  .img-partnerheader {
    width:100%;
    box-sizing: border-box;
  }
  .linear-gradien-ph-1 {
    background: linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0.49) 100%);
    position: absolute; 
    top: 0px;
    left: 0px;
    width: 100%; 
    height: 100%;
  }
  .linear-gradien-ph-2 { 
     background: linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 100%);
     position: absolute;
     top: 0px; left: 0px; 
     width: 100%;
     height: 100%
  }
  .partnerheader-flexdirection {
    display: flex;
    flex-direction: column;
  }
  .partnerheader-btn-and-margin {
    text-align: center; 
    margin-top:20px;
    margin-top:126px;
  }
  .absolute-partnerheader {
    width: 70%;
    position:absolute; 
    top: 200px; 
    left: 0;
    bottom: 0;
    right: 0;
    margin:0 auto;
  }
  .absolute-partnerheader-mobile {
    width: 100%;
    margin:0 auto;
    position: absolute;
    top: 200px;
    left: 0;
    bottom: 0;
    right: 0;
  }
  .partnerheader-btn {
    text-align: center; 
    margin-top:20px;
  }
  @media (max-width: 700px) {
    .full-partner-header {
      display: none;
    }
  }
  .mobile-partner-header {
    display: none;
  }
  @media (max-width: 700px) { 
.mobile-partner-header {
    display: block;
  }
  }
  .txt-seventh-header-title {
    font-size:16px;
    color: $gray-font-color-blog;
    font-weight: normal;
  }
  .picture-partner-header{
    background-image: url(/partnership/cabinet-small.svg);
    background-size: cover;
    background-repeat: no-repeat;
    height: 698px;
  }
  .partner-header-title {
    text-align: center;
    font-size: 50px;
    font-weight: bold;
    margin-top: 2.5%;
    margin-bottom: 30px;
    line-height: 120%;
    word-wrap: break-word;
  }
  @media (max-width: 1050px) {
    .partner-header-title {
    text-align: center;
    font-size: 30px;
    font-weight: bold;
    margin-top: 0%;
    margin-bottom: 30px;
    line-height: 120%;
    word-wrap: break-word;
    margin:0 auto;
    width: 90%;
  }
 }
   @media (max-width: 500px) {
    .partner-header-title {
    text-align: center;
    font-size: 30px;
    font-weight: bold;
    margin-top: -21%;
    margin-bottom: 30px;
    line-height: 120%;
    word-wrap: break-word;
  }
 }

  .partner-header-subtitle {
    font-weight: normal;
    font-weight: normal;
    font-size: 24px;
    margin-top:-0.5%;
    color: #333333;
    text-align: center;
    width: 100%;
  }
  @media (max-width: 1050px) {
  .partner-header-subtitle {
    font-weight: normal;
    font-size: 17px;
    margin-top:0%; 
    color: #646464;
    text-align: center;
    margin:0 auto;
    width: 80%;
  }
  }
   @media (max-width: 500px) {
  .partner-header-subtitle {
    font-weight: bold;
    margin: 0 auto;
    font-size: 17px;
    margin-top:0%; 
    color: #646464;
    padding-bottom:30px;
    text-align: center;
    line-height: 130%;
    width: 80%;
  }
  }

  .seventh-percent-class {
    margin-top: 3%;
    font-size: 120px;
    font-weight: bold;
    text-align: center;
  }
  @media (max-width: 500px) {
  .seventh-percent-class
  {
    background-color:white;  
    font-size: 120px;
    font-weight: bold;
    text-align: center;
    display: block;
  }
  }
  .eventh-percent-class-2 {
    background-color: white;
    width: 25%;
    padding-top:2%;
    padding-bottom:2%;
    border: 1px dashed #9C9C9C;
    margin: 0 auto;
  }
  .seventh-percent-class-small {
    margin-top: 7%;
    font-size: 80px;
    width:48%;
    margin: auto;
    background: linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.510417) 48.96%, rgba(255, 255, 255, 0) 100%);
    border: 1px dashed #9C9C9C;
    font-weight: bold;
    text-align: center;
  }
  @media (max-width: 1350px) {
   .eventh-percent-class-2 {
     display: none;
  }
  }
  @media (max-width: 700px) {
    .seventh-percent-class {
      width:60%;
      margin: 0 auto;
    }
  }
    .partnerheader-picture_Note {
      background-image: url(/partnership/cabinet-small.jpg);
      background-size: cover;
      background-repeat: no-repeat;
      height: 700px;
      background-position-x: center;
      background-position-y: center;
    }
    @media (max-width: 500px) {
    .partnerheader-picture_Note {
      background-image: url(/partnership/cabinet-small.jpg);
      background-size: cover;
      background-repeat: no-repeat;
      height: 700px;
      background-position-x: center;
      background-position-y: center;
    }
  } 
   @media (max-width: 400px) {
    .partnerheader-picture_Note {
      background-image: url(/partnership/cabinet-small.jpg);
      background-size: cover;
      background-repeat: no-repeat;
      height: 700px;
      background-position-x: center;
      background-position-y: center;
     }
  } 

</style>
